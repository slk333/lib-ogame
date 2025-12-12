import { getStructureCost } from "../Cost/getStructureCost.js"
import { Planet } from "../Types/Planet.js"
import { ResourcesRecord } from "../Types/ResourcesRecord.js"
import { StructureName } from "../Types/Structure/StructureName.js"

export function computeStructureUpgradeCostForPlanet(
    Planet: Planet,
    structureName: StructureName
): ResourcesRecord {
    const targetLevel = Planet.structures[structureName].level + 1
    const upgradeCost = getStructureCost(structureName, targetLevel)
    return upgradeCost
}
