import { getStructureUpgradeCost } from "../Cost/structureCost"
import { Planet } from "../Types/Planet"
import { ResourcesRecord } from "../Types/ResourcesRecord"
import { StructureName } from "../Types/Structure/StructureName"

export function computeStructureUpgradeCostForPlanet(
    Planet: Planet,
    structureName: StructureName
): ResourcesRecord {
    const targetLevel = Planet.structures[structureName].level + 1
    const upgradeCost = getStructureUpgradeCost(structureName, targetLevel)
    return upgradeCost
}
