import { ResourceCost } from "../../Types/ResourceCost.js"

/* 1.0 Cost */
export function getMetalMineCost(targetLevel: number): ResourceCost {
    /* 60 M, 15 C */
    const metal = Math.trunc(60 * 1.5 ** (targetLevel - 1))
    const crystal = Math.trunc(15 * 1.5 ** (targetLevel - 1))
    const deuterium = 0
    return { metal, crystal, deuterium }
}
export function getCrystalMineCost(targetLevel: number): ResourceCost {
    /* 48 M, 24 C */
    const metal = Math.trunc(48 * 1.6 ** (targetLevel - 1))
    const crystal = Math.trunc(24 * 1.6 ** (targetLevel - 1))
    const deuterium = 0
    return { metal, crystal, deuterium }
}

export function getDeuteriumMineCost(targetLevel: number): ResourceCost {
    /* 225 M, 75 C */
    const metal = Math.trunc(225 * 1.5 ** (targetLevel - 1))
    const crystal = Math.trunc(75 * 1.5 ** (targetLevel - 1))
    const deuterium = 0
    return { metal, crystal, deuterium }
}
