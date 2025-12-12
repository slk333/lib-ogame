import { ResourcesRecord } from "../Types/ResourcesRecord.js"
import { computeHasEnoughResources } from "./computeHasEnoughResources.js"

export function computeRemainingResources(
    availableResources: ResourcesRecord,
    price: ResourcesRecord
): ResourcesRecord {
    if (!computeHasEnoughResources(availableResources, price)) {
        throw new Error("Insufficient resources to pay the price")
    }

    return {
        metal: availableResources.metal - price.metal,
        crystal: availableResources.crystal - price.crystal,
        deuterium: availableResources.deuterium - price.deuterium,
    }
}
