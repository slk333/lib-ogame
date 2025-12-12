import { ResourceCost } from "../../Types/ResourceCost.js"

export function getRoboticsFactoryCost(targetLevel: number): ResourceCost {
    /* 400 M, 120 C, 200 D. */
    const baseCost: ResourceCost = {
        metal: 400,
        crystal: 120,
        deuterium: 200,
    }
    return getFacilityCost(targetLevel, baseCost)
}

export function getResearchLabCost(targetLevel: number): ResourceCost {
    /* 200 M, 400 C, 200 D */
    const baseCost: ResourceCost = {
        metal: 200,
        crystal: 400,
        deuterium: 200,
    }
    return getFacilityCost(targetLevel, baseCost)
}
export function getShipyardCost(targetLevel: number): ResourceCost {
    /* 400 M, 200 C, 100 D */
    const baseCost: ResourceCost = {
        metal: 400,
        crystal: 200,
        deuterium: 100,
    }
    return getFacilityCost(targetLevel, baseCost)
}
export function getNaniteFactoryCost(targetLevel: number): ResourceCost {
    /* 	1 000 000 M, 500 000 C, 100 000 D*/
    const baseCost: ResourceCost = {
        metal: 1_000_000,
        crystal: 500_000,
        deuterium: 100_000,
    }
    return getFacilityCost(targetLevel, baseCost)
}

function getFacilityCost(targetLevel: number, baseCost: ResourceCost): ResourceCost {
    const metal = Math.trunc(baseCost.metal * 2 ** (targetLevel - 1))
    const crystal = Math.trunc(baseCost.crystal * 2 ** (targetLevel - 1))
    const deuterium = Math.trunc(baseCost.deuterium * 2 ** (targetLevel - 1))
    return { metal, crystal, deuterium }
}
