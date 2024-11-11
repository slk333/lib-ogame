import { ResourceCost } from "../Types/ResourceCost"
import { ShipName } from "../Types/ShipName"

export function getShipCost(shipName: ShipName): ResourceCost {
    const cost = SHIP_COSTS[shipName]
    if (!cost) {
        throw new Error(`Invalid ship name: ${shipName}`)
    }
    return cost
}

const SHIP_COSTS: Record<ShipName, ResourceCost> = {
    lightFighter: {
        metalAmount: 3000,
        crystalAmount: 1000,
        deuteriumAmount: 0,
    },
    heavyFighter: {
        metalAmount: 6000,
        crystalAmount: 4000,
        deuteriumAmount: 0,
    },
    cruiser: {
        metalAmount: 20000,
        crystalAmount: 7000,
        deuteriumAmount: 2000,
    },
    battleship: {
        metalAmount: 45000,
        crystalAmount: 15000,
        deuteriumAmount: 0,
    },
    battlecruiser: {
        metalAmount: 30000,
        crystalAmount: 40000,
        deuteriumAmount: 15000,
    },
    bomber: {
        metalAmount: 50000,
        crystalAmount: 25000,
        deuteriumAmount: 15000,
    },
    destroyer: {
        metalAmount: 60000,
        crystalAmount: 50000,
        deuteriumAmount: 15000,
    },
    reaper: {
        metalAmount: 85000,
        crystalAmount: 55000,
        deuteriumAmount: 20000,
    },
    pathfinder: {
        metalAmount: 8000,
        crystalAmount: 15000,
        deuteriumAmount: 8000,
    },
    smallCargo: {
        metalAmount: 2000,
        crystalAmount: 2000,
        deuteriumAmount: 0,
    },
    largeCargo: {
        metalAmount: 6000,
        crystalAmount: 6000,
        deuteriumAmount: 0,
    },
    colonyShip: {
        metalAmount: 10000,
        crystalAmount: 20000,
        deuteriumAmount: 10000,
    },
    recycler: {
        metalAmount: 10000,
        crystalAmount: 6000,
        deuteriumAmount: 2000,
    },
    espionageProbe: {
        metalAmount: 0,
        crystalAmount: 1000,
        deuteriumAmount: 0,
    },
    solarSatellite: {
        metalAmount: 0,
        crystalAmount: 2000,
        deuteriumAmount: 500,
    },
    crawler: {
        metalAmount: 2000,
        crystalAmount: 2000,
        deuteriumAmount: 1000,
    },
}
