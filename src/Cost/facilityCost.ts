import { ResourceCost } from "../types.js"

export function getRoboticsFactoryCost(targetLevel: number): ResourceCost {
    /* 400 M, 120 C, 200 D. */
    const baseCost: ResourceCost = {
        metalAmount: 400,
        crystalAmount: 120,
        deuteriumAmount: 200,
    }
    return getFacilityCost(targetLevel, baseCost)
}

export function getResearchLabCost(targetLevel: number): ResourceCost {
    /* 200 M, 400 C, 200 D */
    const baseCost: ResourceCost = {
        metalAmount: 200,
        crystalAmount: 400,
        deuteriumAmount: 200,
    }
    return getFacilityCost(targetLevel, baseCost)
}
export function getShipyardCost(targetLevel: number): ResourceCost {
    /* 400 M, 200 C, 100 D */
    const baseCost: ResourceCost = {
        metalAmount: 400,
        crystalAmount: 200,
        deuteriumAmount: 100,
    }
    return getFacilityCost(targetLevel, baseCost)
}
export function getNaniteFactoryCost(targetLevel: number): ResourceCost {
    /* 	1 000 000 M, 500 000 C, 100 000 D*/
    const baseCost: ResourceCost = {
        metalAmount: 1_000_000,
        crystalAmount: 500_000,
        deuteriumAmount: 100_000,
    }
    return getFacilityCost(targetLevel, baseCost)
}

function getFacilityCost(targetLevel: number, baseCost: ResourceCost): ResourceCost {
    const metalAmount = Math.trunc(baseCost.metalAmount * 2 ** (targetLevel - 1))
    const crystalAmount = Math.trunc(baseCost.crystalAmount * 2 ** (targetLevel - 1))
    const deuteriumAmount = Math.trunc(baseCost.deuteriumAmount * 2 ** (targetLevel - 1))
    return { metalAmount, crystalAmount, deuteriumAmount }
}
