import { Coordinates } from "./Coordinates"
import { ResourcesRecord } from "./ResourcesRecord"
import { ShipName } from "./ShipName"

export type FleetMissionType = "Expedition" | "Spy"
export type FleetMissionStatus = "pendingArrival" | "returning" | "returned"

export interface FleetMission {
    id: string
    type: FleetMissionType
    status: FleetMissionStatus

    ships: {
        [shipName in ShipName]?: {
            name: ShipName
            count: number
        }
    }

    cargoHold: ResourcesRecord

    origin: {
        id: string
        name: string
        coordinates: Coordinates
        type: string
    }

    destination: {
        id: string
        name?: string
        coordinates: Coordinates
        type: string
    }

    sender: {
        id: string
        name: string
    }

    receiver: {
        id: string
        name: string
    }

    departureDate: string
    arrivalDate: string
    returnDate: string

    expireAt: Date // timestamp for firestore periodic deletion, set to return date + 24hours
}
