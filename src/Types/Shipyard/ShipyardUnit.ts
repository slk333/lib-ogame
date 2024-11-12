import { DefenseName } from "./DefenseName"
import { ShipName } from "./ShipName"

export interface ShipyardUnit {
    type: "ship" | "defense"
    name: ShipName | DefenseName
}
