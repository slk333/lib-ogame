import { ResourcesRecord } from "../ResourcesRecord.js"
import { FleetShips } from "./FleetShips.js"
import { FleetMissionStatus } from "./FleetMissionStatus.js"
import { FleetMissionType } from "./FleetMissionType.js"
import { DebrisField, ExpeditionSite } from "./FleetDestination.js"
import { PublicPlanet } from "../PublicPlanet.js"
import { PublicMoon } from "../PublicMoon.js"

export interface FleetMission {
    id: string
    type: FleetMissionType
    status: FleetMissionStatus

    ships: FleetShips
    carriedResources: ResourcesRecord
    origin: PublicPlanet | PublicMoon
    destination: PublicPlanet | PublicMoon | ExpeditionSite | DebrisField

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
