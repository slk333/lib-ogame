import { ShipyardOrder } from "./ShipyardOrder.js"

export interface ScheduledShipyardOrder {
    order: ShipyardOrder
    startDate: string
    completionDate: string
    unitBuildTime: number // seconds
    unitsCompleted: number
}
