import { DefenseName } from "./DefenseName.js"
import { ShipName } from "./ShipName.js"

interface ShipUnit {
    readonly type: "ship"
    readonly name: ShipName
}

interface DefenseUnit {
    readonly type: "defense"
    readonly name: DefenseName
}

export type ShipyardUnit = ShipUnit | DefenseUnit
