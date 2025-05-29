import { ResourceCost } from "../Types/ResourceCost.js"
import { ResourcesRecord } from "../Types/ResourcesRecord.js"

export function computeMaxBuildableCountForUnit(
    availableResources: ResourcesRecord,
    unitCost: ResourceCost
): number {
    const SHIPYARD_QUEUE_LIMIT = 9999

    /* if the cost is 0 for that kind of resource, go with 9999 */
    const maxUnitsFromMetal =
        unitCost.metalAmount > 0
            ? Math.floor(availableResources.metalAmount / unitCost.metalAmount)
            : SHIPYARD_QUEUE_LIMIT

    const maxUnitsFromCrystal =
        unitCost.crystalAmount > 0
            ? Math.floor(availableResources.crystalAmount / unitCost.crystalAmount)
            : SHIPYARD_QUEUE_LIMIT

    const maxUnitsFromDeuterium =
        unitCost.deuteriumAmount > 0
            ? Math.floor(availableResources.deuteriumAmount / unitCost.deuteriumAmount)
            : SHIPYARD_QUEUE_LIMIT

    return Math.min(
        maxUnitsFromMetal,
        maxUnitsFromCrystal,
        maxUnitsFromDeuterium,
        /* limit it to 9999 regardless */
        SHIPYARD_QUEUE_LIMIT
    )
}
