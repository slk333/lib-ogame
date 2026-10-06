export type ProductionModifiers = {
    economySpeed?: number
    plasmaTechnology?: number
    planetTemperature?: number
    // planetPosition?: number
    // geologist?: boolean\
    // boosters?: {
    //     metal?: number
    //     crystal?: number
    //     deuterium?: number
    // }
}

// based on proxyforogame implementation
// plasma bonus is applied on the unfloored base production
// plasma bonus is rounded
export function getMetalMineProduction(level: number, modifiers: ProductionModifiers = {}): number {
    const { economySpeed = 1, plasmaTechnology = 0 } = modifiers
    // 1. base (per hour)
    const base = 30 * level * 1.1 ** level * economySpeed
    // 2. plasma (per hour)
    const plasmaBonus = base * (plasmaTechnology / 100)
    // 3. total production
    const production_h = Math.floor(base) + Math.round(plasmaBonus)
    const production_s = production_h / 3600
    return production_s
}
