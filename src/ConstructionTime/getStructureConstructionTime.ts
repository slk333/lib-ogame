import { getStructureCost } from "../index.js"
import { StructureName } from "../Types/Structure/StructureName.js"

type GetStructureConstructionTimeOptions = {
    structureName: StructureName
    level: number
    roboticsFactory: number
    naniteFactory: number
}

/**
 * Get the construction time for a structure in seconds.
 * The construction time is calculated based on the resource cost.
 * The time is adjusted by the robotics factory and nanite factory levels.
 *
 * @param {GetStructureConstructionTimeConfig} config - Configuration object containing structure name, level, and factory levels.
 * @returns {number} - Construction time in seconds.
 */

export function getStructureConstructionTime({
    structureName,
    level,
    roboticsFactory,
    naniteFactory,
}: GetStructureConstructionTimeOptions) {
    /* sum of metal and crystal cost determine the construction time  */
    const { metal, crystal } = getStructureCost(structureName, level)
    const resourceAmount = metal + crystal /* ex 60 + 15 */

    // regular time is divided by 3.5 for target lvl 1
    // regular time is divided by 1 for target lvl 6
    // easing goes from 1 to 3.5 from lvl 6 to 1 (most easing for lvl 1)
    let lowLevelEasing = Math.max(4 - level / 2, 1)

    // no easing for nanite factory
    if (structureName === "naniteFactory") lowLevelEasing = 1

    /* 1 hour for 2500 resources */
    const constructionTime_h =
        resourceAmount / 2500 / lowLevelEasing / (1 + roboticsFactory) / 2 ** naniteFactory
    const constructionTime_s = Math.trunc(constructionTime_h * 3600)
    return constructionTime_s
}
