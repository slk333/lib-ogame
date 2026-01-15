import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

export const baseSpeedByShipName: Record<FleetShipName, number> = {
    lightFighter: 12500,
    heavyFighter: 10000,
    cruiser: 15000,
    battleship: 10000,
    battlecruiser: 10000,
    bomber: 4000,
    destroyer: 5000,
    deathstar: 100,
    reaper: 10000,
    pathfinder: 12000,
    smallCargo: 5000,
    largeCargo: 7500,
    colonyShip: 2500,
    recycler: 2000,
    espionageProbe: 100_000_000,
}
