import { Coordinates } from "../Types/Coordinates.js"

/* 1 Disclaimer */
/* WE ASSUME CIRCULAR UNIVERSE AND CIRCULAR GALAXIES, each with 499 solar systems */
type getFlightDistanceParams = {
    origin: Coordinates
    destination: Coordinates
    numberOfGalaxies: number
}

export function getFlightDistance({
    origin,
    destination,
    numberOfGalaxies,
}: getFlightDistanceParams): number {
    // 1. Intergalactic Flight
    if (origin.galaxy !== destination.galaxy) {
        const galaxiesTraveled = getShortestPath(
            origin.galaxy,
            destination.galaxy,
            numberOfGalaxies
        )
        /* Inter Galactic Base Distance: 20000 */
        return 20000 * galaxiesTraveled
    }

    // 2. Inter-System Flight
    if (origin.solarSystem !== destination.solarSystem) {
        const systemsTraveled = getShortestPath(
            origin.solarSystem,
            destination.solarSystem,
            499 // OGame standard solar system count per galaxy
        )
        /* Inter System Base Distance: 2700 */
        /* Additional Distance per System: 95 */
        return 2700 + 95 * systemsTraveled
    }

    // 3. Intra-System Flight
    if (origin.planetPosition !== destination.planetPosition) {
        const slotsTraveled = Math.abs(origin.planetPosition - destination.planetPosition)
        /* Intra System Base Distance: 1000 */
        /* Additional Distance per Slot: 5 */
        return 1000 + 5 * slotsTraveled
    }

    // 4. Same Coordinates (e.g., Moon to Planet on same slot)
    return 5
}

/* Get shortest path, checking linear path vs wrap-around path */
function getShortestPath(origin: number, destination: number, mapSize: number): number {
    const linearPath = Math.abs(origin - destination)
    const wrapAroundPath = mapSize - linearPath
    return Math.min(linearPath, wrapAroundPath)
}
