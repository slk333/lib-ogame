import { Planet } from "../Types/Planet.js"
import { ResourcesRecord } from "../Types/ResourcesRecord.js"
import { computeProductionForPlanet } from "./computeProductionForPlanet.js"

export function computeResourcesForPlanetAtDate(
    Planet: Planet,
    requestedDate: Date
): ResourcesRecord {
    const snapshotDate = new Date(Planet.snapshotDate) // from ISO
    const elapsedTime_s = (requestedDate.getTime() - snapshotDate.getTime()) / 1000

    // planet production per second
    const { metalProduction_s, crystalProduction_s, deuteriumProduction_s } =
        computeProductionForPlanet(Planet)

    // produced resources at requestedDate
    const producedmetal = elapsedTime_s * metalProduction_s
    const producedcrystal = elapsedTime_s * crystalProduction_s
    const produceddeuterium = elapsedTime_s * deuteriumProduction_s

    // pre-existing resources at snapshot
    const preExistingResources: ResourcesRecord = Planet.resources

    // sum of pre-existing + produced
    const resourcesAtRequestedDate: ResourcesRecord = {
        metal: Math.floor(preExistingResources.metal + producedmetal),
        crystal: Math.floor(preExistingResources.crystal + producedcrystal),
        deuterium: Math.floor(preExistingResources.deuterium + produceddeuterium),
    }
    return resourcesAtRequestedDate
}
