import { Coordinates } from "./Coordinates"
import { PlanetStructure } from "./PlanetStructure"
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
        colonyShip?: {
            name: string
            count: number
        }
    }

    resources: {
        metal: number
        crystal: number
        deuterium: number
    }

    pendingStructure?: {
        name: StructureName
        completionDate: string
    }

    snapshotDate: string

    structureQueue?: StructureName[]
}
