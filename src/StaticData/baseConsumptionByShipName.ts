import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

export const baseConsumptionByShipName: Record<FleetShipName, number> = {
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
    smallCargo: 10,
    largeCargo: 50,
    colonyShip: 1000,
    recycler: 300,
    espionageProbe: 1,
}
