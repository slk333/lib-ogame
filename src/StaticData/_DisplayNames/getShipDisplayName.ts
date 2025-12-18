import { ShipName } from "../../Types/Shipyard/ShipName.js"

const SHIP_DISPLAY_NAMES: Record<ShipName, string> = {
    lightFighter: "Light Fighter",
    heavyFighter: "Heavy Fighter",
    cruiser: "Cruiser",
    battleship: "Battleship",
    battlecruiser: "Battlecruiser",
    bomber: "Bomber",
    destroyer: "Destroyer",
    deathstar: "Deathstar",
    reaper: "Reaper",
    pathfinder: "Pathfinder",
    smallCargo: "Small Cargo",
    largeCargo: "Large Cargo",
    colonyShip: "Colony Ship",
    recycler: "Recycler",
    espionageProbe: "Espionage Probe",
    solarSatellite: "Solar Satellite",
    crawler: "Crawler",
}

export function getShipDisplayName(shipName: ShipName): string {
    return SHIP_DISPLAY_NAMES[shipName]
}
