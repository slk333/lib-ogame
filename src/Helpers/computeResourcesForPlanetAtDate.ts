import { Planet } from "../Types/Planet.js"
import { ResourcesRecord } from "../Types/ResourcesRecord.js"
import { computeProductionForPlanet } from "./computeProductionForPlanet.js"

export function computeResourcesForPlanetAtDate(
    Planet: Planet,
    requestedDate: Date
): ResourcesRecord {
    const snapshotDate = new Date(Planet.lastSnapshot.date) // from ISO
    const elapsedTime = (requestedDate.getTime() - snapshotDate.getTime()) / 1000

    // planet production per second
    const { metalProduction, crystalProduction, deuteriumProduction } =
        computeProductionForPlanet(Planet)

    // produced resources at requestedDate
    const producedmetal = elapsedTime * metalProduction
    const producedcrystal = elapsedTime * crystalProduction
    const produceddeuterium = elapsedTime * deuteriumProduction

    // pre-existing resources at snapshot
    const preExistingResources: ResourcesRecord = Planet.lastSnapshot.resources

    // sum of pre-existing + produced
    const resourcesAtRequestedDate: ResourcesRecord = {
        metal: Math.floor(preExistingResources.metal + producedmetal),
        crystal: Math.floor(preExistingResources.crystal + producedcrystal),
        deuterium: Math.floor(preExistingResources.deuterium + produceddeuterium),
    }
    return resourcesAtRequestedDate
}
