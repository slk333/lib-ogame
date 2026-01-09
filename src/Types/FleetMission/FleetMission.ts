import { Coordinates } from "../Coordinates.js"
import { ResourcesRecord } from "../ResourcesRecord.js"
import { SendableFleetComposition } from "./SendableFleetComposition.js"
import { FleetMissionStatus } from "./FleetMissionStatus.js"
import { FleetMissionType } from "./FleetMissionType.js"

export interface FleetMission {
    id: string
    type: FleetMissionType
    status: FleetMissionStatus

    ships: SendableFleetComposition

    carriedResources: ResourcesRecord

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

    expireAt?: Date
    // timestamp for firestore periodic deletion, set to return date + 24hours
    // set type to Date so it's stored as Timestamp in the DB
}
