import type { ProductionModifiers } from "./ProductionModifiers.js"

export function getCrystalMineProduction(
    level: number,
    modifiers: ProductionModifiers = {},
): number {
    const { economySpeed = 1, plasmaTechnology = 0 } = modifiers
    const base = 20 * level * 1.1 ** level * economySpeed
    const plasmaBonus = base * (plasmaTechnology * 0.0066)
    const hourlyProduction = Math.floor(base) + Math.round(plasmaBonus)
    return hourlyProduction / 3600
}
