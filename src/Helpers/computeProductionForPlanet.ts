import {
    getCrystalMineProduction_s,
    getDeuteriumProduction_s,
    getMetalMineProduction_s,
} from "../Production/production"
import { FirestorePlanet } from "../Types/FirestorePlanet"

type ResourcesProduction_s = {
    metalProduction_s: number
    crystalProduction_s: number
    deuteriumProduction_s: number
}

export function computeProductionForPlanet(planet: FirestorePlanet): ResourcesProduction_s {
    /* 0.1 native production */
    const nativeProduction_s = {
        metalProduction_s: 30 / 3600,
        crystalProduction_s: 15 / 3600,
        deuteriumProduction_s: 0,
    }
    /* 0.2 mines production */
    const metalMineProduction_s = getMetalMineProduction_s(planet.structures.metalMine.level)
    const crystalMineProduction_s = getCrystalMineProduction_s(planet.structures.crystalMine.level)
    const deuteriumMineProduction_s = getDeuteriumProduction_s(
        planet.structures.deuteriumSynthesizer.level
    )
    /* 0.3 native + mines production */
    const metalProduction_s = metalMineProduction_s + nativeProduction_s.metalProduction_s
    const crystalProduction_s = crystalMineProduction_s + nativeProduction_s.crystalProduction_s
    const deuteriumProduction_s = deuteriumMineProduction_s

    return { metalProduction_s, crystalProduction_s, deuteriumProduction_s }
}
