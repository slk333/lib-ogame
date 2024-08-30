import { Structure } from "../types.js"
import { ResourceCost } from "../types.js"
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

export function getStructureCompoundedCost(name: Structure, achievedLevel: number) {
    /*   { 
	metalCompoundedCost, 
	crystalCompoundedCost, 
	deuteriumCompoundedCost 
	}
 */

    switch (name) {
        case Structure.MetalMine:
            return computeStructureCompoundedCost(achievedLevel, getMetalMineCost, 0.5)

        case Structure.CrystalMine:
            return computeStructureCompoundedCost(achievedLevel, getCrystalMineCost, 0.6)

        case Structure.DeuteriumSynthesizer:
            return computeStructureCompoundedCost(achievedLevel, getDeuteriumMineCost, 0.5)

        case Structure.RoboticsFactory:
            return computeStructureCompoundedCost(achievedLevel, getRoboticsFactoryCost, 1)

        case Structure.Shipyard:
            return computeStructureCompoundedCost(achievedLevel, getShipyardCost, 1)

        case Structure.ResearchLab:
            return computeStructureCompoundedCost(achievedLevel, getResearchLabCost, 1)

        case Structure.NaniteFactory:
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

export function getStructureUpgradeCost(name: Structure, targetLevel: number) {
    switch (name) {
        case Structure.MetalMine:
            return getMetalMineCost(targetLevel)

        case Structure.CrystalMine:
            return getCrystalMineCost(targetLevel)

        case Structure.DeuteriumSynthesizer:
            return getDeuteriumMineCost(targetLevel)

        case Structure.RoboticsFactory:
            return getRoboticsFactoryCost(targetLevel)

        case Structure.Shipyard:
            return getShipyardCost(targetLevel)

        case Structure.ResearchLab:
            return getResearchLabCost(targetLevel)

        case Structure.NaniteFactory:
            return getNaniteFactoryCost(targetLevel)

        default:
            throw Error("")
    }
}
