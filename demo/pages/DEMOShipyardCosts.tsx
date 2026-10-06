import { useState } from "react";
import {
  shipNames, defenseNames, getShipDisplayName, getDefenseDisplayName,
  getShipyardUnitCost, getShipyardUnitConstructionTime,
} from "@slk333/lib-ogame";
import type { ShipName, DefenseName, ShipyardUnit } from "@slk333/lib-ogame";
import { Calculator, NumberField, SelectField, number } from "../components";

function calculateUnits(data: FormData) {
  const unit: ShipyardUnit = data.get("type") === "ship"
    ? { type: "ship", name: data.get("ship") as ShipName }
    : { type: "defense", name: data.get("defense") as DefenseName };
  const count = number(data, "count");
  const cost = getShipyardUnitCost(unit);
  const seconds = getShipyardUnitConstructionTime(unit, number(data, "shipyard"), number(data, "nanite"));
  return {
    unit, unitCost: cost, unitConstructionSeconds: seconds,
    totalCost: { metal: cost.metal * count, crystal: cost.crystal * count, deuterium: cost.deuterium * count },
    totalConstructionSeconds: seconds * count,
  };
}

export function ShipyardCosts() {
  const [unitType, setUnitType] = useState("ship");
  return (
    <Calculator calculate={calculateUnits}>
      <SelectField name="type" label="Type" options={["ship", "defense"]} displayName={(type) => type === "ship" ? "Ships" : "Defenses"} onChange={setUnitType} />
      {unitType === "ship"
        ? <SelectField name="ship" label="Ship" options={shipNames} displayName={(name) => getShipDisplayName(name as ShipName)} />
        : <SelectField name="defense" label="Defense" options={defenseNames} displayName={(name) => getDefenseDisplayName(name as DefenseName)} />}
      <NumberField name="count" label="Quantity" value={1} min={1} />
      <details>
        <summary>Build time settings</summary>
        <div>
          <NumberField name="shipyard" label="Shipyard" />
          <NumberField name="nanite" label="Nanite Factory" />
        </div>
      </details>
    </Calculator>
  );
}
