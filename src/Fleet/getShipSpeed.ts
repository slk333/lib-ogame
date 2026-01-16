import { starterSpeedByShipName } from "../StaticData/starterSpeedByShipName.js"
import { starterDriveByShipName } from "../StaticData/starterDriveByShipName.js"
import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

type getShipSpeedProps = {
    shipName: FleetShipName
    combustionDrive: number
    impulseDrive: number
    hyperspaceDrive: number
}

export function getShipSpeed(props: getShipSpeedProps): number {
    const { shipName, combustionDrive, impulseDrive, hyperspaceDrive } = props

    const combustionMultiplier = 1 + combustionDrive * 0.1
    const impulseMultiplier = 1 + impulseDrive * 0.2
    const hyperspaceMultiplier = 1 + hyperspaceDrive * 0.3

    /* A. It is a non-starter drive */
    if (shipName === "smallCargo" && impulseDrive >= 5) return 10000 * impulseMultiplier
    if (shipName === "bomber" && hyperspaceDrive >= 8) return 5000 * hyperspaceMultiplier
    if (shipName === "recycler") {
        if (hyperspaceDrive >= 15) return 6000 * hyperspaceMultiplier
        if (impulseDrive >= 17) return 4000 * impulseMultiplier
    }

    /* it is a starter drive  */
    const starterBaseSpeed = starterSpeedByShipName[shipName]
    const drive = starterDriveByShipName[shipName]

    switch (drive) {
        case "combustionDrive":
            return starterBaseSpeed * combustionMultiplier
        case "impulseDrive":
            return starterBaseSpeed * impulseMultiplier
        case "hyperspaceDrive":
            return starterBaseSpeed * hyperspaceMultiplier
    }
}
