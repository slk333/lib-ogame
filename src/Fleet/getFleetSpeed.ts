import { FleetShips } from "../Types/FleetMission/FleetShips.js"
import { getShipSpeed } from "./getShipSpeed.js"

type getFleetSpeedParams = {
    fleetShips: FleetShips
    combustionDrive: number
    impulseDrive: number
    hyperspaceDrive: number
}

export function getFleetSpeed({
    fleetShips,
    combustionDrive,
    impulseDrive,
    hyperspaceDrive,
}: getFleetSpeedParams): number {
    let slowestSpeed = Infinity

    Object.values(fleetShips).forEach((shipInfo) => {
        if (shipInfo.count === 0) return

        const shipSpeed = getShipSpeed({
            shipName: shipInfo.name,
            combustionDrive,
            impulseDrive,
            hyperspaceDrive,
        })
        if (shipSpeed < slowestSpeed) {
            slowestSpeed = shipSpeed
        }
    })
    if (slowestSpeed === Infinity) {
        throw new Error("Error calculating fleet speed, the fleet was probably empty")
    }
    return slowestSpeed
}
