/* 1.1  Production */
export function getMetalMineProduction(currentLevel: number): number {
    const metalProduction = Math.trunc(30 * currentLevel * 1.1 ** currentLevel) / 3600
    return metalProduction
}
export function getCrystalMineProduction(currentLevel: number): number {
    const crystalProduction = Math.trunc(20 * currentLevel * 1.1 ** currentLevel) / 3600
    return crystalProduction
}
export function getDeuteriumProduction(currentLevel: number): number {
    /* assumes 0 degree */
    const temperature = 0
    const modifier = -temperature / 250
    // the modifier for 0 degree is 0

    const deuteriumProduction = Math.trunc(
        (10 * currentLevel * 1.1 ** currentLevel * (1.36 + modifier)) / 3600
    )

    return deuteriumProduction
}

/* assuming 90 degrees: */
// const temperature = 90
// const modifier = -temperature / 250 // -0.36
// // final coefficient is 1

/* assuming -130 degrees */
// const temperature = -130
// const modifier = -temperature / 250 // 0.52
// // final coefficient is 1.88
