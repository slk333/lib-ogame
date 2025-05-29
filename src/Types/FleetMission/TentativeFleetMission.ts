import { FleetMissionType } from "./FleetMissionType.js"
import { ShipName } from "../Shipyard/ShipName.js"

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
