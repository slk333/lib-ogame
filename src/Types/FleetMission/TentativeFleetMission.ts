import { FleetMissionType } from "./FleetMissionType.js"
import { ResourcesRecord } from "../ResourcesRecord.js"
import { FleetComposition } from "./FleetComposition.js"

export interface TentativeFleetMission {
    type: FleetMissionType
    ships: FleetComposition
    origin: {
        id: string
    }
    destination: {
        id: string
    }
    cargoHold: ResourcesRecord
}
