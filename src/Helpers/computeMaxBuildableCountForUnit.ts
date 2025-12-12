import { ResourceCost } from "../Types/ResourceCost.js"
import { ResourcesRecord } from "../Types/ResourcesRecord.js"

export function computeMaxBuildableCountForUnit(
    availableResources: ResourcesRecord,
    unitCost: ResourceCost
): number {
    const SHIPYARD_QUEUE_LIMIT = 9999

    /* if the cost is 0 for that kind of resource, go with 9999 */
    const maxUnitsFromMetal =
        unitCost.metal > 0
            ? Math.floor(availableResources.metal / unitCost.metal)
            : SHIPYARD_QUEUE_LIMIT

    const maxUnitsFromCrystal =
        unitCost.crystal > 0
            ? Math.floor(availableResources.crystal / unitCost.crystal)
            : SHIPYARD_QUEUE_LIMIT

    const maxUnitsFromDeuterium =
        unitCost.deuterium > 0
            ? Math.floor(availableResources.deuterium / unitCost.deuterium)
            : SHIPYARD_QUEUE_LIMIT

    return Math.min(
        maxUnitsFromMetal,
        maxUnitsFromCrystal,
        maxUnitsFromDeuterium,
        /* limit it to 9999 regardless */
        SHIPYARD_QUEUE_LIMIT
    )
}
