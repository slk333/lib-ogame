import { ResourcesRecord } from "../Types/ResourcesRecord.js"

export function resourcesFitCargoCapacity(
    carriedResources: ResourcesRecord,
    cargoCapacity: number
): boolean {
    const { metal, crystal, deuterium } = carriedResources
    const total = metal + crystal + deuterium
    return total <= cargoCapacity
}
