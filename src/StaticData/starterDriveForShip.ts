import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

/* note: some ships switch to a different drive when that drive technology reaches a certain level */

type DriveName = "combustionDrive" | "impulseDrive" | "hyperspaceDrive"

export const starterDriveForShip: Record<FleetShipName, DriveName> = {
    lightFighter: "combustionDrive",
    heavyFighter: "impulseDrive",
    cruiser: "impulseDrive",
    battleship: "hyperspaceDrive",
    battlecruiser: "hyperspaceDrive",
    bomber: "impulseDrive", // Hyperspace Drive when lvl 8
    destroyer: "hyperspaceDrive",
    deathstar: "hyperspaceDrive",
    reaper: "hyperspaceDrive",
    pathfinder: "hyperspaceDrive",
    smallCargo: "combustionDrive", // Impulse Drive when lvl 5
    largeCargo: "combustionDrive",
    colonyShip: "impulseDrive",
    recycler: "combustionDrive", // Impulse Drive when lvl 17, // Hyperspace Drive when lvl 15
    espionageProbe: "combustionDrive",
}
