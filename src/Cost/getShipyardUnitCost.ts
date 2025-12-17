import { defenseNames } from "../StaticData/defenseNames.js"
import { shipNames } from "../StaticData/shipNames.js"
import { ResourceCost } from "../Types/ResourceCost.js"
import { DefenseName } from "../Types/Shipyard/DefenseName.js"
import { ShipName } from "../Types/Shipyard/ShipName.js"
import { getDefenseCost } from "./getDefenseCost.js"
import { getShipCost } from "./getShipCost.js"

export function getShipyardUnitCost(unitName: ShipName | DefenseName): ResourceCost {
    if (shipNames.includes(unitName as ShipName)) {
        return getShipCost(unitName as ShipName)
    } else if (defenseNames.includes(unitName as DefenseName)) {
        return getDefenseCost(unitName as DefenseName)
    } else throw Error("invalid unit name")
}
