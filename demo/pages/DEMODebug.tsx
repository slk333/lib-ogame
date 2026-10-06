import {
  structureNames, shipNames, getStructureDisplayName,
  computeHasEnoughResources, computeRemainingResources, computeMaxBuildableCountForUnit,
  computeProductionForPlanet, computeResourcesForPlanetAtDate,
  computeStructureUpgradeCostForPlanet, computeStructureUpgradeTimeForPlanet,
  formatResourceShort, formatTimeInterval, formatCoordinates, getRandomTemperatureForPosition,
} from "@slk333/lib-ogame";
import type { Planet, StructureName } from "@slk333/lib-ogame";
import {
  Calculator, NumberField, SelectField, ResourceFields, CoordinateFields,
  number, readResources, readCoordinates,
} from "../components";

function calculateResources(data: FormData) {
  const available = readResources(data, "available");
  const price = readResources(data, "price");
  return {
    hasEnoughResources: computeHasEnoughResources(available, price),
    remainingResources: computeRemainingResources(available, price),
    maxBuildableCount: computeMaxBuildableCountForUnit(available, price),
  };
}

function createSamplePlanet(): Planet {
  const structures = {} as Planet["structures"];
  for (const name of structureNames) {
    structures[name] = { name, level: name === "naniteFactory" ? 0 : 10 };
  }
  const ships = {} as Planet["ships"];
  for (const name of shipNames) {
    ships[name] = { name, count: 0 };
  }
  return {
    id: "debug", name: "Homeworld", owner: { id: "debug", name: "Debug player" },
    coordinates: { galaxy: 1, solarSystem: 100, planetPosition: 8 },
    temperature: 0, structures, ships,
    lastSnapshot: {
      date: "2026-01-01T00:00:00.000Z",
      resources: { metal: 10000, crystal: 5000, deuterium: 1000 },
    },
    pendingStructure: null, pendingShipyardUnit: null, structureQueue: [], shipyardQueue: [],
  };
}

const samplePlanet = JSON.stringify(createSamplePlanet(), null, 2);

function calculatePlanet(data: FormData) {
  const planet: Planet = JSON.parse(String(data.get("planet")));
  const requestedDate = new Date(String(data.get("date")));
  if (!Number.isFinite(requestedDate.getTime())) {
    throw new Error("Enter a valid date.");
  }
  const structureName = data.get("structure") as StructureName;
  return {
    productionPerSecond: computeProductionForPlanet(planet),
    resourcesAtDate: computeResourcesForPlanetAtDate(planet, requestedDate),
    nextUpgradeCost: computeStructureUpgradeCostForPlanet(planet, structureName),
    nextUpgradeSeconds: computeStructureUpgradeTimeForPlanet(planet, structureName),
  };
}

function calculateFormats(data: FormData) {
  return {
    resource: formatResourceShort(number(data, "resource")),
    duration: formatTimeInterval(number(data, "seconds")),
    coordinates: formatCoordinates(readCoordinates(data, "coordinates")),
  };
}

function calculateTemperature(data: FormData) {
  return { maxTemperature: getRandomTemperatureForPosition(number(data, "position")) };
}

export function Debug() {
  return <>
    <details>
      <summary>Resource helpers</summary>
      <Calculator calculate={calculateResources}>
        <ResourceFields prefix="available" label="Available resources" />
        <ResourceFields prefix="price" label="Unit cost" />
      </Calculator>
    </details>
    <details>
      <summary>Planet helpers</summary>
      <Calculator calculate={calculatePlanet}>
        <label>Planet JSON<textarea name="planet" rows={28} cols={70} defaultValue={samplePlanet} required /></label>
        <label>Date (ISO 8601)<input name="date" type="text" defaultValue="2026-01-02T00:00:00.000Z" required /></label>
        <SelectField name="structure" label="Building to upgrade" options={structureNames} displayName={(name) => getStructureDisplayName(name as StructureName)} />
      </Calculator>
    </details>
    <details>
      <summary>Formatting</summary>
      <Calculator calculate={calculateFormats}>
        <NumberField name="resource" label="Resource amount" value={1200000} step={0.01} />
        <NumberField name="seconds" label="Duration (seconds)" value={3661} />
        <CoordinateFields prefix="coordinates" label="Coordinates" />
      </Calculator>
    </details>
    <details>
      <summary>Random temperature</summary>
      <Calculator calculate={calculateTemperature}>
        <NumberField name="position" label="Planet position" value={8} min={1} max={15} />
      </Calculator>
    </details>
  </>;
}
