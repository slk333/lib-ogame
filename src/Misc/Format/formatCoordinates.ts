import { Coordinates } from "../../Types/Coordinates.js"

export function formatCoordinates(coordinates: Coordinates): string {
    const { galaxy, solarSystem, planetPosition } = coordinates
    return `${galaxy}:${solarSystem}:${planetPosition}`
}
