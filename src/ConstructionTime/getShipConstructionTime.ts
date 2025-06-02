import { getShipCost } from "../Cost/getShipCost.js"
import { ShipName } from "../Types/Shipyard/ShipName.js"
import { getShipyardConstructionTime } from "./_getShipyardConstructionTime.js"

type GetShipConstructionTimeParams = {
    shipName: ShipName
    shipyard: number
    naniteFactory: number
}

export function getShipConstructionTime(params: GetShipConstructionTimeParams) {
    const unitCost = getShipCost(params.shipName)
    const constructionTime = getShipyardConstructionTime({
        unitCost,
        shipyard: params.shipyard,
        naniteFactory: params.naniteFactory,
    })

    return constructionTime
}
