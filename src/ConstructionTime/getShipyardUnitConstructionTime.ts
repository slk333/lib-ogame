import { getDefenseCost } from "../Cost/getDefenseCost"
import { getShipCost } from "../Cost/getShipCost"
import { DefenseName } from "../Types/Shipyard/DefenseName"
import { ShipName } from "../Types/Shipyard/ShipName"
import { ShipyardUnit } from "../Types/Shipyard/ShipyardUnit"

export function getShipyardUnitConstructionTime(
    unit: ShipyardUnit,
    shipyardLevel: number,
    naniteLevel: number
) {
    const unitCost =
        unit.type === "ship"
            ? getShipCost(unit.name as ShipName)
            : getDefenseCost(unit.name as DefenseName)
    const resourceSum = unitCost.metalAmount + unitCost.crystalAmount
    const baseTime = (resourceSum / 2500) * 3600 // Base time in seconds. // 2500 resources for 1 hour
    const facilityBonus = (1 + shipyardLevel) * Math.pow(2, naniteLevel)
    const timeInSeconds = baseTime / facilityBonus

    return Math.max(Math.floor(timeInSeconds), 1)
}

export default getShipyardUnitConstructionTime
