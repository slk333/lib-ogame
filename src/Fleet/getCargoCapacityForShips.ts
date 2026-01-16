import type { FleetShips } from "../Types/FleetMission/FleetShips.js"
import { cargoCapacityForShip } from "../StaticData/cargoCapacityForShip.js"

export function getCargoCapacityForShips(ships: FleetShips): number {
    let cargoCapacity = 0

    for (const shipCategory of Object.values(ships)) {
        /* name and count of the given ship category */
        const { name, count } = shipCategory
        const shipCapacity = cargoCapacityForShip[name]
        cargoCapacity += shipCapacity * count
    }
    return cargoCapacity
}
