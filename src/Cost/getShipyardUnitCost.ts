import { defenseNames } from "../Collections/defenseNames"
import { shipNames } from "../Collections/shipNames"
import { ResourceCost } from "../Types/ResourceCost"
import { DefenseName } from "../Types/Shipyard/DefenseName"
import { ShipName } from "../Types/Shipyard/ShipName"
import { getDefenseCost } from "./getDefenseCost"
import { getShipCost } from "./getShipCost"

export function getShipyardUnitCost(unitName: ShipName | DefenseName): ResourceCost {
    if (shipNames.includes(unitName as ShipName)) {
        return getShipCost(unitName as ShipName)
    } else if (defenseNames.includes(unitName as DefenseName)) {
        return getDefenseCost(unitName as DefenseName)
    } else throw Error("invalid unit name")
}
