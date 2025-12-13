import { getMetalMineProduction } from "../Production/getMetalMineProduction.js"
import { getCrystalMineProduction } from "../Production/getCrystalMineProduction.js"
import { getDeuteriumSynthesizerProduction } from "../Production/getDeuteriumSynthesizerProduction.js"
import { Planet } from "../Types/Planet.js"

type ResourcesProduction = {
    metalProduction: number
    crystalProduction: number
    deuteriumProduction: number
}

export function computeProductionForPlanet(planet: Planet): ResourcesProduction {
    /* 0.1 native production */
    const nativeProduction = {
        metalProduction: 30 / 3600,
        crystalProduction: 15 / 3600,
        deuteriumProduction: 0,
    }
    /* 0.2 mines production */
    const metalMineProduction = getMetalMineProduction(planet.structures.metalMine.level)
    const crystalMineProduction = getCrystalMineProduction(planet.structures.crystalMine.level)
    const deuteriumMineProduction = getDeuteriumSynthesizerProduction(
        planet.structures.deuteriumSynthesizer.level
    )
    /* 0.3 native + mines production */
    const metalProduction = metalMineProduction + nativeProduction.metalProduction
    const crystalProduction = crystalMineProduction + nativeProduction.crystalProduction
    const deuteriumProduction = deuteriumMineProduction

    return { metalProduction, crystalProduction, deuteriumProduction }
}
