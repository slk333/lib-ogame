type getFuelConsumptionParams = {
    distance: number
    baseFuelConsumption: number
}

export function getFuelConsumption({
    distance,
    baseFuelConsumption,
}: getFuelConsumptionParams): number {
    const speedPercentFactor = 2
    const speedExponent = 2
    const distanceNormalization = 35000
    return Math.round(
        (distance
            * baseFuelConsumption
            * Math.pow(speedPercentFactor, speedExponent))
            / distanceNormalization,
    )
}
