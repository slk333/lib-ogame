import { FleetMissionType } from "./FleetMissionType"
import { ShipName } from "../Shipyard/ShipName"

export interface TentativeFleetMission {
    type: FleetMissionType
    ships: {
        [shipName in ShipName]?: {
            name: ShipName
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
