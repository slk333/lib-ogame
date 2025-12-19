import { ResourceCost } from "../Types/ResourceCost.js"
import { ShipyardUnit } from "../Types/Shipyard/ShipyardUnit.js"
import { getDefenseCost } from "./getDefenseCost.js"
import { getShipCost } from "./getShipCost.js"

export function getShipyardUnitCost(shipyardUnit: ShipyardUnit): ResourceCost {
    if (shipyardUnit.type === "ship") {
        return getShipCost(shipyardUnit.name)
    } else if (shipyardUnit.type === "defense") {
        return getDefenseCost(shipyardUnit.name)
    } else {
        throw Error("invalid shipyard unit type")
    }
}
