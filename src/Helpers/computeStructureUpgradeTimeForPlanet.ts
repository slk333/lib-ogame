import { getStructureConstructionTime } from "../ConstructionTime/constuctionTime.js"
import { Planet } from "../Types/Planet.js"
import { StructureName } from "../Types/Structure/StructureName.js"

export function computeStructureUpgradeTimeForPlanet(
    planet: Planet,
    structureName: StructureName
): number {
    const targetLevel = planet.structures[structureName].level + 1
    const roboticsFactoryLevel = planet.structures["roboticsFactory"].level
    const naniteFactoryLevel = planet.structures["naniteFactory"].level

    const upgradeTime_s = getStructureConstructionTime(
        structureName,
        targetLevel,
        roboticsFactoryLevel,
        naniteFactoryLevel
    )
    return upgradeTime_s
}
