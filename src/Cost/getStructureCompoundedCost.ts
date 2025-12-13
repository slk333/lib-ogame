import { StructureName } from "../Types/Structure/StructureName.js"
import { ResourceCost } from "../Types/ResourceCost.js"
import {
    getRoboticsFactoryCost,
    getShipyardCost,
    getResearchLabCost,
    getNaniteFactoryCost,
} from "./internals/facilityCost.js"
import { getMetalMineCost, getCrystalMineCost, getDeuteriumMineCost } from "./internals/mineCost.js"

function computeStructureCompoundedCost(
    achievedLevel: number,
    costFunction: (level: number) => ResourceCost
) {
    let metal = 0
    let crystal = 0
    let deuterium = 0

    for (let level = 1; level <= achievedLevel; level++) {
        const levelCost = costFunction(level)
        metal += levelCost.metal
        crystal += levelCost.crystal
        deuterium += levelCost.deuterium
    }

    return {
        metal,
        crystal,
        deuterium,
    }
}

export function getStructureCompoundedCost(
    name: StructureName,
    achievedLevel: number
): ResourceCost {
    switch (name) {
        case "metalMine":
            return computeStructureCompoundedCost(achievedLevel, getMetalMineCost)
        case "crystalMine":
            return computeStructureCompoundedCost(achievedLevel, getCrystalMineCost)

        case "deuteriumSynthesizer":
            return computeStructureCompoundedCost(achievedLevel, getDeuteriumMineCost)
        case "roboticsFactory":
            return computeStructureCompoundedCost(achievedLevel, getRoboticsFactoryCost)

        case "shipyard":
            return computeStructureCompoundedCost(achievedLevel, getShipyardCost)

        case "researchLab":
            return computeStructureCompoundedCost(achievedLevel, getResearchLabCost)

        case "naniteFactory":
            return computeStructureCompoundedCost(achievedLevel, getNaniteFactoryCost)
        default:
            throw Error("invalid name")
    }
}
