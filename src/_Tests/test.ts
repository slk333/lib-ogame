import { getDefenseCost } from "../Cost/getDefenseCost.js"
import { getShipCost } from "../Cost/getShipCost.js"
import { getStructureCompoundedCost } from "../Cost/getStructureCompoundedCost.js"
import { getStructureCost } from "../Cost/getStructureCost.js"
import { getDefenseConstructionTime } from "../ConstructionTime/getDefenseConstructionTime.js"
import { getShipConstructionTime } from "../ConstructionTime/getShipConstructionTime.js"
import { getStructureConstructionTime } from "../ConstructionTime/getStructureConstructionTime.js"
import { getCrystalMineProduction } from "../Production/getCrystalMineProduction.js"
import { getDeuteriumSynthesizerProduction } from "../Production/getDeuteriumSynthesizerProduction.js"
import { getMetalMineProduction } from "../Production/getMetalMineProduction.js"
import { formatResourceAmount } from "../Misc/formatResourceAmount.js"
import { getRandomTempForPosition } from "../Misc/getRandomTempForPosition.js"

console.log("# costs")

console.log('getStructureCost("crystalMine", 9):')
console.log(getStructureCost("crystalMine", 9))

console.log('getShipCost("lightFighter"):')
console.log(getShipCost("lightFighter"))

console.log('getDefenseCost("rocketLauncher"):')
console.log(getDefenseCost("rocketLauncher"))

console.log('getStructureCompoundedCost("crystalMine", 9):')
console.log(getStructureCompoundedCost("crystalMine", 9))

console.log("\n# construction time")

console.log(
    "getStructureConstructionTime({ structureName: 'researchLab', level: 5, roboticsFactory: 3, naniteFactory: 0 }):"
)
console.log(
    getStructureConstructionTime({
        structureName: "researchLab",
        level: 5,
        roboticsFactory: 3,
        naniteFactory: 0,
    })
)

console.log("getShipConstructionTime({ shipName: 'lightFighter', shipyard: 5, naniteFactory: 1 }):")
console.log(
    getShipConstructionTime({
        shipName: "lightFighter",
        shipyard: 5,
        naniteFactory: 1,
    })
)

console.log(
    "getDefenseConstructionTime({ defenseName: 'rocketLauncher', shipyard: 5, naniteFactory: 1 }):"
)
console.log(
    getDefenseConstructionTime({
        defenseName: "rocketLauncher",
        shipyard: 5,
        naniteFactory: 1,
    })
)

console.log("\n# production")

console.log("getMetalMineProduction(25):")
console.log(getMetalMineProduction(25))

console.log("getCrystalMineProduction(25):")
console.log(getCrystalMineProduction(25))

console.log("getDeuteriumSynthesizerProduction(25):")
console.log(getDeuteriumSynthesizerProduction(25))
console.log(getDeuteriumSynthesizerProduction(25, 0))
console.log(getDeuteriumSynthesizerProduction(25, 60))
console.log(getDeuteriumSynthesizerProduction(25, 110))
console.log(getDeuteriumSynthesizerProduction(25, 360))
console.log(getDeuteriumSynthesizerProduction(25, -130))

console.log("\nMISC")

console.log("formatResourceAmount(1234567):")
console.log(formatResourceAmount(1234567))

console.log("getRandomTempForPosition(15):")
console.table([
    getRandomTempForPosition(15),
    getRandomTempForPosition(15),
    getRandomTempForPosition(15),
    getRandomTempForPosition(15),
    getRandomTempForPosition(15),
])
