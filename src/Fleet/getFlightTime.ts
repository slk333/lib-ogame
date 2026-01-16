type getFlightTimeParams = {
    shipSpeed: number
    distance: number
}

export function getFlightTime({ shipSpeed, distance }: getFlightTimeParams): number {
    const baseTimeSeconds = 10
    const baseDistance = 35000
    const speedFactor = 10
    const baseDistancePerSpeed = baseDistance / speedFactor
    return Math.round(
        baseTimeSeconds
            + baseDistancePerSpeed * Math.sqrt((distance * speedFactor) / shipSpeed),
    )
}
