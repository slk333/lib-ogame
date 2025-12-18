import { DefenseName } from "../../Types/Shipyard/DefenseName.js"

const DEFENSE_DISPLAY_NAMES: Record<DefenseName, string> = {
    rocketLauncher: "Rocket Launcher",
    lightLaser: "Light Laser",
    heavyLaser: "Heavy Laser",
    gaussCannon: "Gauss Cannon",
    ionCannon: "Ion Cannon",
    plasmaTurret: "Plasma Turret",
}

export function getDefenseDisplayName(defenseName: DefenseName): string {
    return DEFENSE_DISPLAY_NAMES[defenseName]
}
