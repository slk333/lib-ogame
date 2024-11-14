import { FirestorePlanet } from "../Types/FirestorePlanet.js"
import { ResourcesRecord } from "../Types/ResourcesRecord.js"
import { computeProductionForPlanet } from "./computeProductionForPlanet.js"

export function computeResourcesForPlanetAtDate(
    firestorePlanet: FirestorePlanet,
    requestedDate: Date
): ResourcesRecord {
    const snapshotDate = new Date(firestorePlanet.snapshotDate) // from ISO
    const elapsedTime_s = (requestedDate.getTime() - snapshotDate.getTime()) / 1000

    // planet production per second
    const { metalProduction_s, crystalProduction_s, deuteriumProduction_s } =
        computeProductionForPlanet(firestorePlanet)

    // produced resources at requestedDate
    const producedMetalAmount = elapsedTime_s * metalProduction_s
    const producedCrystalAmount = elapsedTime_s * crystalProduction_s
    const producedDeuteriumAmount = elapsedTime_s * deuteriumProduction_s

    // pre-existing resources at snapshot
    const preExistingResources: ResourcesRecord = firestorePlanet.resources

    // sum of pre-existing + produced
    const resourcesAtRequestedDate: ResourcesRecord = {
        metalAmount: Math.floor(preExistingResources.metalAmount + producedMetalAmount),
        crystalAmount: Math.floor(preExistingResources.crystalAmount + producedCrystalAmount),
        deuteriumAmount: Math.floor(preExistingResources.deuteriumAmount + producedDeuteriumAmount),
    }
    return resourcesAtRequestedDate
}
