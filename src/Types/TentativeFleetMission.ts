import { FleetMissionType } from "./FleetMission"

export interface TentativeFleetMission {
    type: FleetMissionType
    ships: {
        [key: string]: {
            name: string
            count: number
        }
    }
    origin: {
        id: string
    }
    destination: {
        id: string
    }
}
