import { FleetMissionType } from "./FleetMissionType.js"
import { ResourcesRecord } from "../ResourcesRecord.js"
import { SendableFleetComposition } from "./SendableFleetComposition.js"

export interface TentativeFleetMission {
    type: FleetMissionType
    ships: SendableFleetComposition
    origin: {
        id: string
    }
    destination: {
        id: string
    }
    carriedResources: ResourcesRecord
}
