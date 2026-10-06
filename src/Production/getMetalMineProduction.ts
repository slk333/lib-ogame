import type { ProductionModifiers } from "./ProductionModifiers.js"

export function getMetalMineProduction(level: number, modifiers: ProductionModifiers = {}): number {
    const { economySpeed = 1, plasmaTechnology = 0 } = modifiers
    // components
    const base = 30 * level * 1.1 ** level * economySpeed
    const plasmaBonus = base * (plasmaTechnology * 0.01)
    // total
    const hourlyProduction = Math.floor(base) + Math.round(plasmaBonus)
    return hourlyProduction / 3600
}
