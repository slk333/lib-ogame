import type { FleetShips } from "../Types/FleetMission/FleetShips.js"
import { cargoCapacityByShipName } from "../StaticData/cargoCapacityByShipName.js"

export function computeCargoCapacityForShips(ships: FleetShips): number {
    let cargoCapacity = 0

    for (const shipCategory of Object.values(ships)) {
        /* name and count of the given ship category */
        const { name, count } = shipCategory
        const shipCapacity = cargoCapacityByShipName[name]
        cargoCapacity += shipCapacity * count
    }
    return cargoCapacity
}
