import { FleetMissionType } from "./FleetMission"
import { ShipName } from "./ShipName"

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
