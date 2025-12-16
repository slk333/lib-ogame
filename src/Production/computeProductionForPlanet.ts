import { getMetalMineProduction } from "./getMetalMineProduction.js"
import { getCrystalMineProduction } from "./getCrystalMineProduction.js"
import { getDeuteriumSynthesizerProduction } from "./getDeuteriumSynthesizerProduction.js"
import { Planet } from "../Types/Planet.js"

type ResourcesProduction = {
    metalProduction: number
    crystalProduction: number
    deuteriumProduction: number
}

export function computeProductionForPlanet(planet: Planet): ResourcesProduction {
    const { metalMine, crystalMine, deuteriumSynthesizer } = planet.structures
    /* 0.1 base production */
    const baseProduction: ResourcesProduction = {
        metalProduction: 30 / 3600,
        crystalProduction: 15 / 3600,
        deuteriumProduction: 0,
    }
    /* 0.2 mines production */
    const metalMineProduction = getMetalMineProduction(metalMine.level)
    const crystalMineProduction = getCrystalMineProduction(crystalMine.level)
    const deuteriumMineProduction = getDeuteriumSynthesizerProduction(
        deuteriumSynthesizer.level,
        planet.temperature
    )
    /* 0.3 base + mines production */
    const metalProduction = metalMineProduction + baseProduction.metalProduction
    const crystalProduction = crystalMineProduction + baseProduction.crystalProduction
    const deuteriumProduction = deuteriumMineProduction

    return { metalProduction, crystalProduction, deuteriumProduction }
}
