import { Coordinates } from "./Coordinates.js"
import { PlanetStructure } from "./Structure/PlanetStructure.js"
import { ShipName } from "./Shipyard/ShipName.js"
import { ScheduledShipyardOrder } from "./Shipyard/ScheduledShipyardOrder.js"
import { ShipyardUnit } from "./Shipyard/ShipyardUnit.js"
import { StructureName } from "./Structure/StructureName.js"
import { ResourcesRecord } from "./ResourcesRecord.js"

export interface Planet {
    id: string
    name: string
    owner: {
        id: string
        name: string
    }

    createdAt?: string // ISO
    coordinates: Coordinates

    structures: Record<StructureName, PlanetStructure>
    ships: Record<ShipName, { name: ShipName; count: number }>

    lastSnapshot: {
        date: string // ISO
        resources: ResourcesRecord
    }
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
