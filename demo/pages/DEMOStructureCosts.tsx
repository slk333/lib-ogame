import {
  structureNames, getStructureDisplayName, getStructureCost,
  getStructureCompoundedCost, getStructureConstructionTime,
} from "@slk333/lib-ogame";
import type { StructureName } from "@slk333/lib-ogame";
import { Calculator, NumberField, SelectField, number } from "../components";

function calculateStructure(data: FormData) {
  const structureName = data.get("structure") as StructureName;
  const level = number(data, "level");
  const seconds = getStructureConstructionTime({
    structureName, level,
    roboticsFactory: number(data, "robotics"),
    naniteFactory: number(data, "nanite"),
  });
  return {
    cost: getStructureCost(structureName, level),
    compoundedCostFromZero: getStructureCompoundedCost(structureName, level),
    constructionSeconds: seconds,
  };
}

export function StructureCosts() {
  return (
    <Calculator calculate={calculateStructure}>
      <SelectField name="structure" label="Structure" options={structureNames} displayName={(name) => getStructureDisplayName(name as StructureName)} />
      <NumberField name="level" label="Target level" value={1} min={1} />
      <details>
        <summary>Build time settings</summary>
        <div>
          <NumberField name="robotics" label="Robotics Factory" />
          <NumberField name="nanite" label="Nanite Factory" />
        </div>
      </details>
    </Calculator>
  );
}
