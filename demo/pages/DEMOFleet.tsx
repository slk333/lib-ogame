import {
  shipNames, getShipDisplayName, getShipSpeed, getFleetSpeed, getFlightDistance,
  getFlightTime, getCargoCapacityForShips, resourcesFitCargoCapacity, formatCoordinates,
} from "@slk333/lib-ogame";
import type { FleetShipName, FleetShips } from "@slk333/lib-ogame";
import { Calculator, NumberField, CoordinateFields, ResourceFields, number, readCoordinates, readResources } from "../components";

const fleetShipNames = shipNames.filter((name): name is FleetShipName => name !== "solarSatellite" && name !== "crawler");
const commonShipNames: FleetShipName[] = ["smallCargo", "largeCargo", "recycler"];
const otherShipNames = fleetShipNames.filter((name) => !commonShipNames.includes(name));

function calculate(data: FormData) {
  const selectedShips = fleetShipNames.map((name) => ({ name, count: number(data, name) }));
  const activeShips = selectedShips.filter((ship) => ship.count > 0);
  const fleetShips = Object.fromEntries(activeShips.map((ship) => [ship.name, ship])) as FleetShips;
  const drives = {
    combustionDrive: number(data, "combustion"),
    impulseDrive: number(data, "impulse"),
    hyperspaceDrive: number(data, "hyperspace"),
  };
  const origin = readCoordinates(data, "origin");
  const destination = readCoordinates(data, "destination");
  const numberOfGalaxies = number(data, "galaxies");
  if (origin.galaxy > numberOfGalaxies || destination.galaxy > numberOfGalaxies) {
    throw new Error("Coordinates must be within the selected number of galaxies.");
  }
  const fleetSpeed = getFleetSpeed({ fleetShips, ...drives });
  const cargoCapacity = getCargoCapacityForShips(fleetShips);
  return {
    origin: formatCoordinates(origin),
    destination: formatCoordinates(destination),
    shipSpeeds: activeShips.map((ship) => ({
      ship: ship.name, speed: getShipSpeed({ shipName: ship.name, ...drives }),
    })),
    fleetSpeed,
    distance: getFlightDistance({ origin, destination, numberOfGalaxies }),
    flightSeconds: getFlightTime({ origin, destination, fleetSpeed, flightTimeSetting: number(data, "percentage") / 100 }),
    cargoCapacity,
    resourcesFit: resourcesFitCargoCapacity(readResources(data, "cargo"), cargoCapacity),
  };
}

export function Fleet() {
  return <>
    <Calculator calculate={calculate}>
      <fieldset><legend>Fleet</legend>
        {commonShipNames.map((name) => <NumberField key={name} name={name} label={getShipDisplayName(name)} value={name === "smallCargo" ? 1 : 0} />)}
      </fieldset>
      <details>
        <summary>More ships</summary>
        <fieldset><legend>Ships</legend>
          {otherShipNames.map((name) => <NumberField key={name} name={name} label={getShipDisplayName(name)} />)}
        </fieldset>
      </details>
      <CoordinateFields prefix="origin" label="Origin" />
      <CoordinateFields prefix="destination" label="Destination" />
      <NumberField name="percentage" label="Flight speed (%)" value={100} min={10} max={100} step={10} />
      <details>
        <summary>Drive technology</summary>
        <div>
          <NumberField name="combustion" label="Combustion Drive" />
          <NumberField name="impulse" label="Impulse Drive" />
          <NumberField name="hyperspace" label="Hyperspace Drive" />
        </div>
      </details>
      <details>
        <summary>Universe settings</summary>
        <div>
          <NumberField name="galaxies" label="Number of galaxies (distance only)" value={9} min={1} />
          <p>Flight time assumes 9 galaxies.</p>
        </div>
      </details>
      <details>
        <summary>Check cargo capacity</summary>
        <ResourceFields prefix="cargo" label="Cargo" />
      </details>
    </Calculator>
  </>;
}
