import { Coordinates } from "./Coordinates"
import { PlanetStructure } from "./Structure/PlanetStructure"
import { ShipName } from "./Shipyard/ShipName"
import { ScheduledShipyardOrder } from "./Shipyard/ScheduledShipyardOrder"
import { ShipyardUnit } from "./Shipyard/ShipyardUnit"
import { StructureName } from "./Structure/StructureName"

export interface FirestorePlanet {
    id: string
    name: string

    owner: {
        id: string
        name: string
    }

    coordinates: Coordinates

    structures: Record<StructureName, PlanetStructure>

    fleet: {
        // TODO should be renamed to ships
        [shipName in ShipName]?: {
            name: ShipName
            count: number
        }
    }

    resources: {
        metal: number
        crystal: number
        deuterium: number
    }

    snapshotDate: string

    pendingStructure: {
        name: StructureName
        completionDate: string
    } | null

    pendingShipyardUnit: {
        shipyardUnit: ShipyardUnit
        completionDate: string
    }

    structureQueue: StructureName[]
    shipyardQueue: ScheduledShipyardOrder[]
}
