export function getDeuteriumSynthesizerProduction(currentLevel: number): number {
    /* assumes 0 degree */
    const temperature = 0
    const modifier = -temperature / 250
    // the modifier for 0 degree is 0
    const deuteriumProduction = Math.trunc(
        (10 * currentLevel * 1.1 ** currentLevel * (1.36 + modifier)) / 3600
    )

    return deuteriumProduction
}
