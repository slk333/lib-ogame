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
    /* assumes 90 degree */
    // const temperature = 90
    // const modifier = -temperature / 250 // -0.36
    // // final coefficient is 1

    /* assumes -130 degree */
    // const temperature = -130
    // const modifier = -temperature / 250 // 0.52
    // // final coefficient is 1.88

    /* assumes 0 degree */
    const temperature = 0
    const modifier = -temperature / 250
    // the modifier for 0 degree is 0

    const deuteriumProduction_s = Math.trunc(
        (10 * currentLevel * 1.1 ** currentLevel * (1.36 + modifier)) / 3600
    )

    return deuteriumProduction_s
}
