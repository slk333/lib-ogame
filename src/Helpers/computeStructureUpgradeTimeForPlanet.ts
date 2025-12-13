import { getStructureConstructionTime } from "../ConstructionTime/getStructureConstructionTime.js"
import { Planet } from "../Types/Planet.js"
import { StructureName } from "../Types/Structure/StructureName.js"

export function computeStructureUpgradeTimeForPlanet(
    planet: Planet,
    structureName: StructureName
): number {
    const targetLevel = planet.structures[structureName].level + 1
    const roboticsFactory = planet.structures["roboticsFactory"].level
    const naniteFactory = planet.structures["naniteFactory"].level

    const upgradeTime = getStructureConstructionTime({
        structureName,
        level: targetLevel,
        roboticsFactory,
        naniteFactory,
    })
    return upgradeTime
}
