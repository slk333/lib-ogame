import { ResourcesRecord } from "../Types/ResourcesRecord"
import { computeHasEnoughResources } from "./computeHasEnoughResources"

export function computeRemainingResources(
    availableResources: ResourcesRecord,
    price: ResourcesRecord
): ResourcesRecord {
    if (!computeHasEnoughResources(availableResources, price)) {
        throw new Error("Insufficient resources to pay the price")
    }

    return {
        metalAmount: availableResources.metalAmount - price.metalAmount,
        crystalAmount: availableResources.crystalAmount - price.crystalAmount,
        deuteriumAmount: availableResources.deuteriumAmount - price.deuteriumAmount,
    }
}
