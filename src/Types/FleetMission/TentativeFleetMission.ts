import { FleetMissionType } from "./FleetMissionType.js"
import { ResourcesRecord } from "../ResourcesRecord.js"
import { FleetShips } from "./FleetShips.js"

export interface TentativeFleetMission {
    type: FleetMissionType
    ships: FleetShips
    origin: {
        id: string
    }
    destination: {
        id: string
    }
    carriedResources: ResourcesRecord
}
