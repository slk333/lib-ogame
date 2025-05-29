import { ResourcesRecord } from "../Types/ResourcesRecord.js"

export function computeHasEnoughResources(
    availableResources: ResourcesRecord,
    price: ResourcesRecord
): boolean {
    return (
        availableResources.metalAmount >= price.metalAmount &&
        availableResources.crystalAmount >= price.crystalAmount &&
        availableResources.deuteriumAmount >= price.deuteriumAmount
    )
}
