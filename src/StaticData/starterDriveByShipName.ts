import { FleetShipName } from "../Types/FleetMission/FleetShipName.js"

/* note: some ships have higher base speed when upgrading to a different engine */

type DriveName = "combustionDrive" | "impulseDrive" | "hyperspaceDrive"

export const starterDriveByShipName: Record<FleetShipName, DriveName> = {
    lightFighter: "combustionDrive",
    heavyFighter: "impulseDrive",
    cruiser: "impulseDrive",
    battleship: "hyperspaceDrive",
    battlecruiser: "hyperspaceDrive",
    bomber: "impulseDrive", // hyperspaceDrive when lvl 8
    destroyer: "hyperspaceDrive",
    deathstar: "hyperspaceDrive",
    reaper: "hyperspaceDrive",
    pathfinder: "hyperspaceDrive",
    smallCargo: "combustionDrive", // impulseDrive when lvl 5
    largeCargo: "combustionDrive",
    colonyShip: "impulseDrive",
    recycler: "combustionDrive", // Impulse Drive when lvl 17, // Hyperspace Drive when lvl 15
    espionageProbe: "combustionDrive",
}
