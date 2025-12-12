import { ResourcesRecord } from "../Types/ResourcesRecord.js"

export function computeHasEnoughResources(
    availableResources: ResourcesRecord,
    price: ResourcesRecord
): boolean {
    return (
        availableResources.metal >= price.metal &&
        availableResources.crystal >= price.crystal &&
        availableResources.deuterium >= price.deuterium
    )
}
