import { ResourceCost } from "../Types/ResourceCost"
import { DefenseName } from "../Types/Shipyard/DefenseName"

export function getDefenseCost(defenseName: DefenseName): ResourceCost {
    const cost = DEFENSE_COSTS[defenseName]
    if (!cost) {
        throw new Error(`Invalid defense name: ${defenseName}`)
    }
    return cost
}

const DEFENSE_COSTS: Record<DefenseName, ResourceCost> = {
    rocketLauncher: {
        metalAmount: 2000,
        crystalAmount: 0,
        deuteriumAmount: 0,
    },
    lightLaser: {
        metalAmount: 1500,
        crystalAmount: 500,
        deuteriumAmount: 0,
    },
    heavyLaser: {
        metalAmount: 6000,
        crystalAmount: 2000,
        deuteriumAmount: 0,
    },
    gaussCannon: {
        metalAmount: 20000,
        crystalAmount: 15000,
        deuteriumAmount: 2000,
    },
    ionCannon: {
        metalAmount: 5000,
        crystalAmount: 3000,
        deuteriumAmount: 0,
    },
    plasmaTurret: {
        metalAmount: 50000,
        crystalAmount: 50000,
        deuteriumAmount: 30000,
    },
}
