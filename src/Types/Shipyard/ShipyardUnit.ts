import { DefenseName } from "./DefenseName.js"
import { ShipName } from "./ShipName.js"

export interface ShipyardUnit {
    type: "ship" | "defense"
    name: ShipName | DefenseName
}
