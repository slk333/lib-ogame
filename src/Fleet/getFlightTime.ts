import { Coordinates } from "../Types/Coordinates.js"
import { getFlightDistance } from "../index.js"

type getFlightTimeParams = {
    origin: Coordinates
    destination: Coordinates
    fleetSpeed: number
    flightTimeSetting: number
}

export function getFlightTime({
    origin,
    destination,
    fleetSpeed,
    flightTimeSetting,
}: getFlightTimeParams) {
    const minimumBuffer = 10
    /* example: distance 20000 (across one galaxy) for a ship with 20000 speed (heavy fighter with impulse drive 5)*/
    const distance = getFlightDistance({ origin, destination, numberOfGalaxies: 9 })
    const linearTime = distance / fleetSpeed
    /* liner time is 1  */
    const adjustedLinearTime = linearTime * 10
    /* adjusted linear time is 10 */
    const squareRootedTime = Math.sqrt(adjustedLinearTime)
    /* square rooted time is ~3.162277 */
    const normalizedTime = squareRootedTime * 3500
    /* normalizedTime time is ~11068 seconds */
    /* 3 hours 4 minutes 28 seconds */

    /* account for flight time setting */
    /* flightTimeSetting is 1 for 100% */
    /* it would be 0.5 for 50% and should increase the time */
    const adjustedFlightTime = normalizedTime / flightTimeSetting

    /* add the buffer */
    /* 3 hours 4 minutes 38 seconds */
    return minimumBuffer + Math.round(adjustedFlightTime)
}
