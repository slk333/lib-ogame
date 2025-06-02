import { DefenseName } from "../Types/Shipyard/DefenseName.js"
import { ShipName } from "../Types/Shipyard/ShipName.js"
import { ShipyardUnit } from "../Types/Shipyard/ShipyardUnit.js"
import { getDefenseConstructionTime } from "./getDefenseConstructionTime.js"
import { getShipConstructionTime } from "./getShipConstructionTime.js"

export function getShipyardUnitConstructionTime(
    unit: ShipyardUnit,
    shipyardLevel: number,
    naniteLevel: number
) {
    if (unit.type === "ship") {
        return getShipConstructionTime({
            shipName: unit.name as ShipName,
            naniteFactory: naniteLevel,
            shipyard: shipyardLevel,
        })
    }

    if (unit.type === "defense") {
        return getDefenseConstructionTime({
            defenseName: unit.name as DefenseName,
            naniteFactory: naniteLevel,
            shipyard: shipyardLevel,
        })
    }
}
