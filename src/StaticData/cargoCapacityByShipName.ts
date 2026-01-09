import { SendableShipName } from "../Types/FleetMission/SendableShipName.js"

export const cargoCapacityByShipName: Record<SendableShipName, number> = {
    lightFighter: 50,
    heavyFighter: 100,
    cruiser: 800,
    battleship: 1500,
    battlecruiser: 750,
    bomber: 500,
    destroyer: 2000,
    deathstar: 1_000_000,
    reaper: 10000,
    pathfinder: 10000,
    smallCargo: 5000,
    largeCargo: 25000,
    colonyShip: 7500,
    recycler: 20000,
    espionageProbe: 0,
}
