/* 1.1  Production */
export function getMetalMineProduction(currentLevel: number): number {
    const metalProduction = Math.trunc(30 * currentLevel * 1.1 ** currentLevel) / 3600
    return metalProduction
}
