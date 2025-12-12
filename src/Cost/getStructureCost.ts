import { StructureName } from "../Types/Structure/StructureName.js"
import {
    getRoboticsFactoryCost,
    getShipyardCost,
    getResearchLabCost,
    getNaniteFactoryCost,
} from "./internals/facilityCost.js"
import { getMetalMineCost, getCrystalMineCost, getDeuteriumMineCost } from "./internals/mineCost.js"

export function getStructureCost(name: StructureName, targetLevel: number) {
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
