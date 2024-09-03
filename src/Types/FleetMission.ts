import { Coordinates } from "./Coordinates"
import { ResourcesRecord } from "./ResourcesRecord"

export type FleetMissionType = "Expedition" | "Spy"
export type FleetMissionStatus = "pendingArrival" | "returning" | "returned"

export interface FleetMission {
    id: string
    type: FleetMissionType
    status: FleetMissionStatus

    ships: {
        battleship?: {
            name: string
            count: number
        }
        cruiser?: {
            name: string
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

    expireAt?: string
}
