import { getStructureUpgradeCost } from "../Cost/structureCost"
import { FirestorePlanet } from "../Types/FirestorePlanet"
import { ResourcesRecord } from "../Types/ResourcesRecord"
import { StructureName } from "../Types/StructureName"

export function computeStructureUpgradeCostForPlanet(
    firestorePlanet: FirestorePlanet,
    structureName: StructureName
): ResourcesRecord {
    const targetLevel = firestorePlanet.structures[structureName].level + 1
    const upgradeCost = getStructureUpgradeCost(structureName, targetLevel)
    return upgradeCost as ResourcesRecord
}
