import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

/* note: some ships have higher base speed when upgrading to a different engine */

export const starterSpeedByShipName: Record<FleetShipName, number> = {
    lightFighter: 12500,
    heavyFighter: 10000,
    cruiser: 15000,
    battleship: 10000,
    battlecruiser: 10000,
    bomber: 4000, // 5000 with Hyperspace Drive lvl 8
    destroyer: 5000,
    deathstar: 100,
    reaper: 7000,
    pathfinder: 12000,
    smallCargo: 5000, // 10000 with Impulse Drive lvl 5
    largeCargo: 7500,
    colonyShip: 2500,
    recycler: 2000, // 4000 with Impulse Drive lvl 17, // 6000 with Hyperspace Drive lvl 15
    espionageProbe: 100_000_000,
}
