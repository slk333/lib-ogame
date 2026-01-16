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
import { getFlightDistance } from "../Fleet/getFlightDistance.js"
import { FleetShips } from "../Types/FleetMission/FleetShips.js"
import { getFleetSpeed } from "../Fleet/getFleetSpeed.js"
import { getFlightTime } from "../Fleet/getFlightTime.js"

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

console.log("████████████████████████████\nDistance calculation")

console.log("█2:100:8 to 8:200:8, numberOfGalaxies: 9")
console.log(
    getFlightDistance({
        origin: { galaxy: 2, solarSystem: 100, planetPosition: 8 },
        destination: { galaxy: 8, solarSystem: 200, planetPosition: 8 },
        numberOfGalaxies: 9,
    })
) // intergalactic

console.log("█2:100:8 to 2:400:8, numberOfGalaxies: 9")
console.log(
    getFlightDistance({
        origin: { galaxy: 2, solarSystem: 100, planetPosition: 8 },
        destination: { galaxy: 2, solarSystem: 400, planetPosition: 8 },
        numberOfGalaxies: 9,
    })
) // intersystem

console.log("█2:100:5 to 2:100:10, numberOfGalaxies: 9")
console.log(
    getFlightDistance({
        origin: { galaxy: 2, solarSystem: 100, planetPosition: 5 },
        destination: { galaxy: 2, solarSystem: 100, planetPosition: 10 },
        numberOfGalaxies: 9,
    })
) // intrasystem

const fleetShips: FleetShips = {
    smallCargo: { name: "smallCargo", count: 10 },
    largeCargo: { name: "largeCargo", count: 10 },
}
console.log("████████████████████████████\nFleet speed calculation")
console.log("Fleet: smallCargo, largeCargo with 0:0:0. target: 5000 from small cargo")
console.log(
    getFleetSpeed({
        fleetShips,
        combustionDrive: 0,
        impulseDrive: 0,
        hyperspaceDrive: 0,
    })
)
console.log("Fleet: smallCargo, largeCargo with 5:5:5, target: 11250 from large cargo")
console.log(
    getFleetSpeed({
        fleetShips,
        combustionDrive: 5,
        impulseDrive: 5,
        hyperspaceDrive: 5,
    })
)

console.log("████████████████████████████\nFlight time")
console.log(
    "█fleet of 10 smallCargo and 10 largeCargo\nfrom 2:100:8 to 3:200:8\n with 5:0:0 (speed 7500), flight time setting 1"
)
console.log("expected: 18084 seconds (5 hours 1 minute 24 seconds)")
console.log(
    getFlightTime({
        origin: { galaxy: 2, solarSystem: 100, planetPosition: 8 },
        destination: { galaxy: 3, solarSystem: 200, planetPosition: 8 },
        fleetSpeed: getFleetSpeed({
            fleetShips,
            combustionDrive: 5,
            impulseDrive: 0,
            hyperspaceDrive: 0,
        }),
        flightTimeSetting: 1,
    })
)
console.log(
    "█fleet of 10 largeCargo\nfrom 1:3:8 to 1:5:8\n with 5:0:0 (speed 11250), flight time setting 1"
)
console.log("expected: 5620 seconds (1 hour 33 minutes 40 seconds)")
console.log(
    getFlightTime({
        origin: { galaxy: 1, solarSystem: 3, planetPosition: 8 },
        destination: { galaxy: 1, solarSystem: 5, planetPosition: 8 },
        fleetSpeed: getFleetSpeed({
            fleetShips: { largeCargo: { name: "largeCargo", count: 10 } },
            combustionDrive: 5,
            impulseDrive: 0,
            hyperspaceDrive: 0,
        }),
        flightTimeSetting: 1,
    })
)
