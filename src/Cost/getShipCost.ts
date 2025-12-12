import { ResourceCost } from "../Types/ResourceCost.js"
import { ShipName } from "../Types/Shipyard/ShipName.js"

export function getShipCost(shipName: ShipName): ResourceCost {
    const cost = SHIP_COSTS[shipName]
    if (!cost) {
        throw new Error(`Invalid ship name: ${shipName}`)
    }
    return cost
}

const SHIP_COSTS: Record<ShipName, ResourceCost> = {
    lightFighter: {
        metal: 3000,
        crystal: 1000,
        deuterium: 0,
    },
    heavyFighter: {
        metal: 6000,
        crystal: 4000,
        deuterium: 0,
    },
    cruiser: {
        metal: 20000,
        crystal: 7000,
        deuterium: 2000,
    },
    battleship: {
        metal: 45000,
        crystal: 15000,
        deuterium: 0,
    },
    battlecruiser: {
        metal: 30000,
        crystal: 40000,
        deuterium: 15000,
    },
    bomber: {
        metal: 50000,
        crystal: 25000,
        deuterium: 15000,
    },
    destroyer: {
        metal: 60000,
        crystal: 50000,
        deuterium: 15000,
    },
    deathstar: {
        metal: 5_000_000,
        crystal: 4_000_000,
        deuterium: 1_000_000,
    },
    reaper: {
        metal: 85000,
        crystal: 55000,
        deuterium: 20000,
    },
    pathfinder: {
        metal: 8000,
        crystal: 15000,
        deuterium: 8000,
    },
    smallCargo: {
        metal: 2000,
        crystal: 2000,
        deuterium: 0,
    },
    largeCargo: {
        metal: 6000,
        crystal: 6000,
        deuterium: 0,
    },
    colonyShip: {
        metal: 10000,
        crystal: 20000,
        deuterium: 10000,
    },
    recycler: {
        metal: 10000,
        crystal: 6000,
        deuterium: 2000,
    },
    espionageProbe: {
        metal: 0,
        crystal: 1000,
        deuterium: 0,
    },
    solarSatellite: {
        metal: 0,
        crystal: 2000,
        deuterium: 500,
    },
    crawler: {
        metal: 2000,
        crystal: 2000,
        deuterium: 1000,
    },
}
