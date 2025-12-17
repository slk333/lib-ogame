export function getShipDisplayName(shipName: string): string {
    switch (shipName) {
        case "lightFighter":
            return "Light Fighter"
        case "heavyFighter":
            return "Heavy Fighter"
        case "cruiser":
            return "Cruiser"
        case "battleship":
            return "Battleship"
        case "battlecruiser":
            return "Battlecruiser"
        case "bomber":
            return "Bomber"
        case "destroyer":
            return "Destroyer"
        case "deathstar":
            return "Deathstar"
        case "reaper":
            return "Reaper"
        case "pathfinder":
            return "Pathfinder"
        case "smallCargo":
            return "Small Cargo"
        case "largeCargo":
            return "Large Cargo"
        case "colonyShip":
            return "Colony Ship"
        case "recycler":
            return "Recycler"
        case "espionageProbe":
            return "Espionage Probe"
        case "solarSatellite":
            return "Solar Satellite"
        case "crawler":
            return "Crawler"
        default:
            return shipName
    }
}
