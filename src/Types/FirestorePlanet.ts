import { Coordinates } from "./Coordinates"
import { PlanetStructure } from "./PlanetStructure"
import { ShipName } from "./ShipName"
import { StructureName } from "./StructureName"

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

    structureQueue: StructureName[]
}
