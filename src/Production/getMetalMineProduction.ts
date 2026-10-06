import type { ProductionModifiers } from "./ProductionModifiers.js"

// based on proxyforogame implementation
// plasma bonus is applied on the unfloored base production
// plasma bonus is rounded
export function getMetalMineProduction(level: number, modifiers: ProductionModifiers = {}): number {
    const { economySpeed = 1, plasmaTechnology = 0 } = modifiers
    // components
    const base = 30 * level * 1.1 ** level * economySpeed
    const plasmaBonus = base * (plasmaTechnology / 100)
    // total
    const production_h = Math.floor(base) + Math.round(plasmaBonus)
    const production_s = production_h / 3600
    return production_s
}

getMetalMineProduction(35)
getMetalMineProduction(35, { economySpeed: 2, plasmaTechnology: 20 })
