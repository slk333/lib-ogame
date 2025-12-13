export function getCrystalMineProduction(currentLevel: number): number {
    const crystalProduction = Math.trunc(20 * currentLevel * 1.1 ** currentLevel) / 3600
    return crystalProduction
}
