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
    destination: PublicPlanet | PublicMoon | DebrisField | ExpeditionSite

    departureDate: string
    arrivalDate: string
    returnDate: string

    expireAt?: Date
    // the expiration date is added to the mission when it's marked as returned.
}
