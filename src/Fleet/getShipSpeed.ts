import { starterSpeedForShip } from "../StaticData/starterSpeedForShip.js"
import { starterDriveForShip } from "../StaticData/starterDriveForShip.js"
import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

type getShipSpeedProps = {
    shipName: FleetShipName
    combustionDrive: number
    impulseDrive: number
    hyperspaceDrive: number
}

export function getShipSpeed({
    shipName,
    combustionDrive,
    impulseDrive,
    hyperspaceDrive,
}: getShipSpeedProps): number {
    const combustionMultiplier = 1 + combustionDrive * 0.1
    const impulseMultiplier = 1 + impulseDrive * 0.2
    const hyperspaceMultiplier = 1 + hyperspaceDrive * 0.3

    /* A. It is a non-starter drive, return hardcoded values */
    if (shipName === "smallCargo" && impulseDrive >= 5) return 10000 * impulseMultiplier
    if (shipName === "bomber" && hyperspaceDrive >= 8) return 5000 * hyperspaceMultiplier
    if (shipName === "recycler") {
        if (hyperspaceDrive >= 15) return 6000 * hyperspaceMultiplier
        if (impulseDrive >= 17) return 4000 * impulseMultiplier
    }

    /* B. It is a starter drive, use starter values from StaticData */
    const currentDrive = starterDriveForShip[shipName]
    const starterSpeed = starterSpeedForShip[shipName]

    switch (currentDrive) {
        case "combustionDrive":
            return starterSpeed * combustionMultiplier
        case "impulseDrive":
            return starterSpeed * impulseMultiplier
        case "hyperspaceDrive":
            return starterSpeed * hyperspaceMultiplier
    }
}
