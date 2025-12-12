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
    costFunction: (targetLevel: number) => ResourceCost,
    growthCoefficient: number
) {
    const metalNextLevelCost = costFunction(achievedLevel + 1).metal ?? 0
    const metalBaseCost = costFunction(1).metal ?? 0
    const metalCompoundedCost = (metalNextLevelCost - metalBaseCost) / growthCoefficient

    const crystalNextLevelCost = costFunction(achievedLevel + 1).crystal ?? 0
    const crystalBaseCost = costFunction(1).crystal ?? 0
    const crystalCompoundedCost = (crystalNextLevelCost - crystalBaseCost) / growthCoefficient

    const deuteriumNextLevelCost = costFunction(achievedLevel + 1).deuterium ?? 0
    const deuteriumBaseCost = costFunction(1).deuterium ?? 0
    const deuteriumCompoundedCost = (deuteriumNextLevelCost - deuteriumBaseCost) / growthCoefficient

    return {
        metal: metalCompoundedCost,
        crystal: crystalCompoundedCost,
        deuterium: deuteriumCompoundedCost,
    }
}

export function getStructureCompoundedCost(
    name: StructureName,
    achievedLevel: number
): ResourceCost {
    switch (name) {
        case "metalMine":
            return computeStructureCompoundedCost(achievedLevel, getMetalMineCost, 0.5)

        case "crystalMine":
            return computeStructureCompoundedCost(achievedLevel, getCrystalMineCost, 0.6)

        case "deuteriumSynthesizer":
            return computeStructureCompoundedCost(achievedLevel, getDeuteriumMineCost, 0.5)

        case "roboticsFactory":
            return computeStructureCompoundedCost(achievedLevel, getRoboticsFactoryCost, 1)

        case "shipyard":
            return computeStructureCompoundedCost(achievedLevel, getShipyardCost, 1)

        case "researchLab":
            return computeStructureCompoundedCost(achievedLevel, getResearchLabCost, 1)

        case "naniteFactory":
            return computeStructureCompoundedCost(achievedLevel, getNaniteFactoryCost, 1)

        default:
            throw Error("invalid name")
    }
}
