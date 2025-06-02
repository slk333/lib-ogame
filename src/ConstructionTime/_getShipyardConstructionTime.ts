import { ResourcesRecord } from "../Types/ResourcesRecord.js"

type GetShipyardConstructionTime = {
    unitCost: ResourcesRecord
    shipyard: number
    naniteFactory: number
}

export function getShipyardConstructionTime({
    unitCost,
    shipyard,
    naniteFactory,
}: GetShipyardConstructionTime): number {
    // Base time in seconds.
    // 2500 resources for 1 hour
    const totalResources = unitCost.metalAmount + unitCost.crystalAmount
    const baseTime = (totalResources / 2500) * 3600

    const shipyardSpeed = (1 + shipyard) * Math.pow(2, naniteFactory)
    const constructionTimeFloat = baseTime / shipyardSpeed
    const constructionTimeFloored = Math.floor(constructionTimeFloat)
    /* it cannot be below 1 second */
    const constructionTime = Math.max(constructionTimeFloored, 1)

    return constructionTime
}
