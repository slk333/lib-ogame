import { getStructureConstructionTime } from "../ConstructionTime/constuctionTime"
import { FirestorePlanet } from "../Types/FirestorePlanet"
import { StructureName } from "../Types/Structure/StructureName"

export function computeStructureUpgradeTimeForPlanet(
    planet: FirestorePlanet,
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
