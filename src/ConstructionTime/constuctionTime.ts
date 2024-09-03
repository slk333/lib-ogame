import { getStructureUpgradeCost } from "../Cost/structureCost.js"
import { StructureName } from "../Types/StructureName.js"

/* 1.2  Construction Time */
export function getStructureConstructionTime(
    name: StructureName,
    targetLevel: number,
    roboticsFactoryLevel: number,
    naniteFactoryLevel: number
) {
    const { metalAmount, crystalAmount } = getStructureUpgradeCost(name, targetLevel)
    const resourceAmount = metalAmount + crystalAmount /* ex 60 + 15 */
    let lowLevelEasing = Math.max(4 - targetLevel / 2, 1)
    if (name === "naniteFactory") lowLevelEasing = 1
    const constructionTime_h =
        resourceAmount /
        2500 /
        lowLevelEasing /
        (1 + roboticsFactoryLevel) /
        2 ** naniteFactoryLevel
    const constructionTime_s = Math.trunc(constructionTime_h * 3600)
    return constructionTime_s
}
