import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

/* note: small cargos and recyclers switch to a different consumption when upgrading to a different "drive" */

export const starterConsumptionForShip: Record<FleetShipName, number> = {
    lightFighter: 20,
    heavyFighter: 75,
    cruiser: 300,
    battleship: 500,
    battlecruiser: 250,
    bomber: 700,
    destroyer: 1000,
    deathstar: 1,
    reaper: 1100,
    pathfinder: 300,
    smallCargo: 10, // 20 fuel with Impulse Drive lvl 5
    largeCargo: 50,
    colonyShip: 1000,
    recycler: 300, // 600 fuel with Impulse Drive lvl 17, // 900 fuel with Hyperspace Drive lvl 15
    espionageProbe: 1,
}
