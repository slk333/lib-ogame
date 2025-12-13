import { StructureName } from "../Types/Structure/StructureName.js"
import { ResourceCost } from "../Types/ResourceCost.js"
import {
    getRoboticsFactoryCost,
    getShipyardCost,
    getResearchLabCost,
    getNaniteFactoryCost,
} from "./internals/facilityCost.js"
import { getMetalMineCost, getCrystalMineCost, getDeuteriumMineCost } from "./internals/mineCost.js"
import { applyCostFunction } from "./internals/applyCostFunction.js"

export function getStructureCompoundedCost(
    name: StructureName,
    achievedLevel: number
): ResourceCost {
    switch (name) {
        case "metalMine":
            return applyCostFunction(achievedLevel, getMetalMineCost)

        case "crystalMine":
            return applyCostFunction(achievedLevel, getCrystalMineCost)

        case "deuteriumSynthesizer":
            return applyCostFunction(achievedLevel, getDeuteriumMineCost)

        case "roboticsFactory":
            return applyCostFunction(achievedLevel, getRoboticsFactoryCost)

        case "shipyard":
            return applyCostFunction(achievedLevel, getShipyardCost)

        case "researchLab":
            return applyCostFunction(achievedLevel, getResearchLabCost)

        case "naniteFactory":
            return applyCostFunction(achievedLevel, getNaniteFactoryCost)

        default:
            throw Error("invalid name")
    }
}
