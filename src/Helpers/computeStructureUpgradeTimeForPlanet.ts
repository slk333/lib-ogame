import { getStructureConstructionTime } from "../ConstructionTime/constuctionTime"
import { FirestorePlanet } from "../Types/FirestorePlanet"
import { StructureName } from "../Types/StructureName"

export function computeStructureUpgradeTimeForPlanet(
    firestorePlanet: FirestorePlanet,
    structureName: StructureName
): number {
    const targetLevel = firestorePlanet.structures[structureName].level + 1
    const roboticsFactoryLevel = firestorePlanet.structures["roboticsFactory"].level
    const naniteFactoryLevel = firestorePlanet.structures["naniteFactory"].level
    const upgradeTime_s = getStructureConstructionTime(
        structureName,
        targetLevel,
        roboticsFactoryLevel,
        naniteFactoryLevel
    )
    return upgradeTime_s
}
