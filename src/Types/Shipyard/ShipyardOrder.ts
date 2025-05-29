import { ShipyardUnit } from "./ShipyardUnit.js"

export interface ShipyardOrder {
    unit: ShipyardUnit
    quantity: number
}
