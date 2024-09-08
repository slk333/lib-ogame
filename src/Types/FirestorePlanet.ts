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

    pendingStructure?: {
        name: StructureName
        completionDate: string
    } | null

    snapshotDate: string

    structureQueue?: StructureName[] | null
}
