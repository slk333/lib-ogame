import { getStructureUpgradeCost } from "../Cost/structureCost.js"
import { StructureName } from "../Types/StructureName.js"

/* 1.2  Construction Time */
export function getStructureConstructionTime(
    structureName: StructureName,
    targetLevel: number,
    roboticsFactoryLevel: number,
    naniteFactoryLevel: number
) {
    /* sum of metal and crystal cost determine the construction time  */
    const { metalAmount, crystalAmount } = getStructureUpgradeCost(structureName, targetLevel)
    const resourceAmount = metalAmount + crystalAmount /* ex 60 + 15 */

    // regular time is divided by 3.5 for target lvl 1
    // regular time is divided by 1 for target lvl 6
    // easing goes from 1 to 3.5 from lvl 6 to 1 (most easing for lvl 1)
    let lowLevelEasing = Math.max(4 - targetLevel / 2, 1)

    // no easing for nanite factory
    if (structureName === "naniteFactory") lowLevelEasing = 1

    /* 1 hour for 2500 resources */
    const constructionTime_h =
        resourceAmount /
        2500 /
        lowLevelEasing /
        (1 + roboticsFactoryLevel) /
        2 ** naniteFactoryLevel
    const constructionTime_s = Math.trunc(constructionTime_h * 3600)
    return constructionTime_s
}
