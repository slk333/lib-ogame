/**
 * Deuterium Synthesizer production in resources per second.
 *
 * Canonical OGame formula (hourly, floored):
 *   floor(10 * level * 1.1^level * (1.36 - 0.004 * avgTemp))
 *
 * This library returns per-second production, so it returns:
 *   floor(hourlyProduction) / 3600
 *
 * Design choice: `avgTemp` is currently assumed to be 0°C.
 */
export function getDeuteriumSynthesizerProduction(
    currentLevel: number,
    maxTemp: number = 0
): number {
    // Temperature factor = (1.44 - 0.004 * maxTemp) is a multiplier applied to the base output.
    // Handy mental model: at 110°C, the factor is exactly 1.00 (so it's a convenient baseline).
    const base = 1.44
    const modifier = 0.004 // equals 1 / 250

    // Quick intuition (linear impact):
    //  100°C  => factor 1.04 => +4% production vs 110°C
    //  10°C => factor 1.40 => +40% production vs 110°C
    //  -130°C => factor 1.96 => +96% production vs 110°C

    // temperatureFactor = 1.44 - 0.004 * maxTemp
    //
    // | maxTemp (°C) | temperatureFactor |
    // |------------:|------------------:|
    // | -130        | 1.960000          |
    // | 0          | 1.440000          |
    // | 60          | 1.200000          |
    // | 110          | 1.000000          |
    // | 360         | 0.000000          |

    // temperatureFactor is at 1 for 110
    const temperatureFactor = base - modifier * maxTemp

    // levelFactor = level * 1.1^level
    // Growth: exponential (geometric) growth with a linear prefactor.
    //
    // | level | 1.1^level | levelFactor | Δ vs prev |
    // |------:|---------:|------------:|----------:|
    // | 1     | 1.100000 | 1.100000    | -         |
    // | 2     | 1.210000 | 2.420000    | 120.00%   |
    // | 3     | 1.331000 | 3.993000    | 65.00%    |
    // | 4     | 1.464100 | 5.856400    | 46.67%    |
    // | 5     | 1.610510 | 8.052550    | 37.50%    |
    // | 6     | 1.771561 | 10.629366   | 32.00%    |
    // | 7     | 1.948717 | 13.641020   | 28.33%    |
    // | 8     | 2.143589 | 17.148710   | 25.71%    |
    // | 9     | 2.357948 | 21.221529   | 23.75%    |
    // | 10    | 2.593742 | 25.937425   | 22.22%    |
    const levelFactor = currentLevel * 1.1 ** currentLevel
    const hourlyProduction = Math.floor(10 * levelFactor * temperatureFactor)
    return hourlyProduction / 3600
}
