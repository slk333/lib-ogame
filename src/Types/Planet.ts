import { Coordinates } from "./Coordinates"
import { PlanetStructure } from "./Structure/PlanetStructure"
import { ShipName } from "./Shipyard/ShipName"
import { ScheduledShipyardOrder } from "./Shipyard/ScheduledShipyardOrder"
import { ShipyardUnit } from "./Shipyard/ShipyardUnit"
import { StructureName } from "./Structure/StructureName"
import { ResourcesRecord } from "./ResourcesRecord"

export interface Planet {
    id: string
    name: string

    owner: {
        id: string
        name: string
    }

    coordinates: Coordinates

    structures: Record<StructureName, PlanetStructure>

    ships: Record<ShipName, { name: ShipName; count: number }>

    resources: ResourcesRecord

    snapshotDate: string

    pendingStructure: {
        name: StructureName
        completionDate: string
    } | null

    pendingShipyardUnit: {
        shipyardUnit: ShipyardUnit
        completionDate: string
    } | null

    structureQueue: StructureName[]
    shipyardQueue: ScheduledShipyardOrder[]
}
