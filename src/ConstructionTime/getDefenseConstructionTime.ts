import { getDefenseCost } from "../Cost/getDefenseCost.js"
import { DefenseName } from "../Types/Shipyard/DefenseName.js"
import { getShipyardConstructionTime } from "./_getShipyardConstructionTime.js"

type GetDefenseConstructionTimeParams = {
    defenseName: DefenseName
    shipyard: number
    naniteFactory: number
}

export function getDefenseConstructionTime(params: GetDefenseConstructionTimeParams) {
    const unitCost = getDefenseCost(params.defenseName)
    const constructionTime = getShipyardConstructionTime({
        unitCost,
        shipyard: params.shipyard,
        naniteFactory: params.naniteFactory,
    })

    return constructionTime
}
