import { StructureName } from "../Types/Structure/StructureName.js"
import { ResourceCost } from "../Types/ResourceCost.js"
import {
    getRoboticsFactoryCost,
    getShipyardCost,
    getResearchLabCost,
    getNaniteFactoryCost,
} from "./facilityCost.js"
import { getMetalMineCost, getCrystalMineCost, getDeuteriumMineCost } from "./mineCost.js"

function computeStructureCompoundedCost(
    achievedLevel: number,
    costFunction: (targetLevel: number) => ResourceCost,
    growthCoefficient: number
) {
    const metalNextLevelCost = costFunction(achievedLevel + 1).metalAmount ?? 0
    const metalBaseCost = costFunction(1).metalAmount ?? 0
    const metalCompoundedCost = (metalNextLevelCost - metalBaseCost) / growthCoefficient

    const crystalNextLevelCost = costFunction(achievedLevel + 1).crystalAmount ?? 0
    const crystalBaseCost = costFunction(1).crystalAmount ?? 0
    const crystalCompoundedCost = (crystalNextLevelCost - crystalBaseCost) / growthCoefficient

    const deuteriumNextLevelCost = costFunction(achievedLevel + 1).deuteriumAmount ?? 0
    const deuteriumBaseCost = costFunction(1).deuteriumAmount ?? 0
    const deuteriumCompoundedCost = (deuteriumNextLevelCost - deuteriumBaseCost) / growthCoefficient

    return { metalCompoundedCost, crystalCompoundedCost, deuteriumCompoundedCost }
}

export function getStructureCompoundedCost(name: StructureName, achievedLevel: number) {
    /*   { 
	metalCompoundedCost, 
	crystalCompoundedCost, 
	deuteriumCompoundedCost 
	}
 */

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
            break
    }
    //   const baseCost = 60
    //   const increase = 0.5
    //   const compoundCost = (metalCostForMine(mineLvl + 1) - baseCost) / increase
    //   return Math.trunc(compoundCost / 1000)
}

export function getStructureUpgradeCost(name: StructureName, targetLevel: number) {
    switch (name) {
        case "metalMine":
            return getMetalMineCost(targetLevel)

        case "crystalMine":
            return getCrystalMineCost(targetLevel)

        case "deuteriumSynthesizer":
            return getDeuteriumMineCost(targetLevel)

        case "roboticsFactory":
            return getRoboticsFactoryCost(targetLevel)

        case "shipyard":
            return getShipyardCost(targetLevel)

        case "researchLab":
            return getResearchLabCost(targetLevel)

        case "naniteFactory":
            return getNaniteFactoryCost(targetLevel)

        default:
            throw Error("")
    }
}
