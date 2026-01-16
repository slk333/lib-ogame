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
import { formatResourceShort } from "../Misc/Format/formatResourceShort.js"
import { getRandomTemperatureForPosition } from "../Misc/getRandomTemperatureForPosition.js"
import { getShipSpeed } from "../Fleet/getShipSpeed.js"

console.log("████████████████████████████\ncosts")

console.log('getStructureCost("crystalMine", 9):')
console.log(getStructureCost("crystalMine", 9))

console.log('getShipCost("lightFighter"):')
console.log(getShipCost("lightFighter"))

console.log('getDefenseCost("rocketLauncher"):')
console.log(getDefenseCost("rocketLauncher"))

console.log('getStructureCompoundedCost("crystalMine", 9):')
console.log(getStructureCompoundedCost("crystalMine", 9))

console.log("████████████████████████████\nConstruction time")

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

console.log("████████████████████████████\nProduction")

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

console.log("████████████████████████████\nMISC")

console.log("formatResourceShort(1234567):")
console.log(formatResourceShort(1234567))

console.log("getRandomTemperatureForPosition(15):")
console.table([
    getRandomTemperatureForPosition(15),
    getRandomTemperatureForPosition(15),
    getRandomTemperatureForPosition(15),
    getRandomTemperatureForPosition(15),
    getRandomTemperatureForPosition(15),
])

console.log("████████████████████████████\nFLEET speed calculation")
console.log("smallCargo with 5:3:3 (combustion drive 5)")
console.log("smallCargo with 5:5:3 (impulse drive 5)")
console.log("smallCargo with 5:9:3 (impulse drive 9)")
console.table([
    getShipSpeed({
        shipName: "smallCargo",
        combustionDrive: 5,
        impulseDrive: 3,
        hyperspaceDrive: 3,
    }),
    getShipSpeed({
        shipName: "smallCargo",
        combustionDrive: 5,
        impulseDrive: 5,
        hyperspaceDrive: 3,
    }),
    getShipSpeed({
        shipName: "smallCargo",
        combustionDrive: 5,
        impulseDrive: 9,
        hyperspaceDrive: 3,
    }),
])
console.log("recycler with 15:10:10 (combustion drive 15)")
console.log("recycler with 15:17:10 (impulse drive 17)")
console.log("recycler with 15:17:15 (hyperspace drive 15)")
console.table([
    getShipSpeed({
        shipName: "recycler",
        combustionDrive: 15,
        impulseDrive: 10,
        hyperspaceDrive: 10,
    }),
    getShipSpeed({
        shipName: "recycler",
        combustionDrive: 15,
        impulseDrive: 17,
        hyperspaceDrive: 10,
    }),
    getShipSpeed({
        shipName: "recycler",
        combustionDrive: 15,
        impulseDrive: 17,
        hyperspaceDrive: 15,
    }),
])
