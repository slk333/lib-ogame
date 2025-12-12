import { ResourceCost } from "../Types/ResourceCost.js"
import { DefenseName } from "../Types/Shipyard/DefenseName.js"

export function getDefenseCost(defenseName: DefenseName): ResourceCost {
    const cost = DEFENSE_COSTS[defenseName]
    if (!cost) {
        throw new Error(`Invalid defense name: ${defenseName}`)
    }
    return cost
}

const DEFENSE_COSTS: Record<DefenseName, ResourceCost> = {
    rocketLauncher: {
        metal: 2000,
        crystal: 0,
        deuterium: 0,
    },
    lightLaser: {
        metal: 1500,
        crystal: 500,
        deuterium: 0,
    },
    heavyLaser: {
        metal: 6000,
        crystal: 2000,
        deuterium: 0,
    },
    gaussCannon: {
        metal: 20000,
        crystal: 15000,
        deuterium: 2000,
    },
    ionCannon: {
        metal: 5000,
        crystal: 3000,
        deuterium: 0,
    },
    plasmaTurret: {
        metal: 50000,
        crystal: 50000,
        deuterium: 30000,
    },
}
