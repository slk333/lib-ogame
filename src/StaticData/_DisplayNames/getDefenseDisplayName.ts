export function getDefenseDisplayName(defenseName: string): string {
    switch (defenseName) {
        case "rocketLauncher":
            return "Rocket Launcher"
        case "lightLaser":
            return "Light Laser"
        case "heavyLaser":
            return "Heavy Laser"
        case "gaussCannon":
            return "Gauss Cannon"
        case "ionCannon":
            return "Ion Cannon"
        case "plasmaTurret":
            return "Plasma Turret"
        default:
            return defenseName
    }
}
