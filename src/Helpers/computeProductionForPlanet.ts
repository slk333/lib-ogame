import {
    getCrystalMineProduction_s,
    getDeuteriumProduction_s,
    getMetalMineProduction_s,
} from "../Production/production"
import { FirestorePlanet } from "../Types/FirestorePlanet"

export function computeProductionForPlanet(firestorePlanet: FirestorePlanet) {
    const planetDefaultProduction = {
        metalProduction_s: 30 / 3600,
        crystalProduction_s: 15 / 3600,
        deuteriumProduction_s: 0,
    }
    const metalMineProduction_s = getMetalMineProduction_s(
        firestorePlanet.structures.metalMine.level
    )
    const crystalMineProduction_s = getCrystalMineProduction_s(
        firestorePlanet.structures.crystalMine.level
    )
    const deuteriumMineProduction_s = getDeuteriumProduction_s(
        firestorePlanet.structures.deuteriumSynthesizer.level
    )

    const metalProduction_s = metalMineProduction_s + planetDefaultProduction.metalProduction_s
    const crystalProduction_s =
        crystalMineProduction_s + planetDefaultProduction.crystalProduction_s
    const deuteriumProduction_s = deuteriumMineProduction_s

    return { metalProduction_s, crystalProduction_s, deuteriumProduction_s }
}
