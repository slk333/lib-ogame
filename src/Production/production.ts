/* 1.1  Production */
export function getMetalMineProduction_s(currentLevel: number) {
    const metalProduction_s = Math.trunc(30 * currentLevel * 1.1 ** currentLevel) / 3600
    return metalProduction_s
}
export function getCrystalMineProduction_s(currentLevel: number) {
    const crystalProduction_s = Math.trunc(20 * currentLevel * 1.1 ** currentLevel) / 3600
    return crystalProduction_s
}
export function getDeuteriumProduction_s(currentLevel: number) {
    const deuteriumProduction_s = Math.trunc(10 * currentLevel * 1.1 ** currentLevel * 1.44) / 3600
    return deuteriumProduction_s
}
