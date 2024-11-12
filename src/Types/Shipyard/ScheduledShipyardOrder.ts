import { ShipyardOrder } from "./ShipyardOrder"

export interface ScheduledShipyardOrder {
    order: ShipyardOrder
    startDate: string
    completionDate: string
    unitBuildTime: number // seconds
    unitsCompleted: number
}
