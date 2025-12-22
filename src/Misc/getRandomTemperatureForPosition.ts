const TEMPERATURES_BY_POSITION: Record<number, { minTemp: number; maxTemp: number }> = {
    1: { minTemp: 220, maxTemp: 260 },
    2: { minTemp: 170, maxTemp: 210 },
    3: { minTemp: 120, maxTemp: 160 },
    4: { minTemp: 70, maxTemp: 110 },
    5: { minTemp: 60, maxTemp: 100 },
    6: { minTemp: 50, maxTemp: 90 },
    7: { minTemp: 40, maxTemp: 80 },
    8: { minTemp: 30, maxTemp: 70 },
    9: { minTemp: 20, maxTemp: 60 },
    10: { minTemp: 10, maxTemp: 50 },
    11: { minTemp: 0, maxTemp: 40 },
    12: { minTemp: -10, maxTemp: 30 },
    13: { minTemp: -50, maxTemp: -10 },
    14: { minTemp: -90, maxTemp: -50 },
    15: { minTemp: -130, maxTemp: -90 },
}

export function getRandomTemperatureForPosition(position: number): number {
    if (position < 1 || position > 15)
        throw new Error(`Invalid planet position: ${position}. Must be between 1 and 15.`)
    const { minTemp, maxTemp } = TEMPERATURES_BY_POSITION[position]
    return pickRandomIntegerWithinRange(minTemp, maxTemp)
}

function pickRandomIntegerWithinRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min

    // Generate a random integer between min and max (inclusive)
    // 1. Determine how many possible numbers there are
    // const rangeSize = max - min + 1 // for example 41

    // 2. Get a random decimal, then scale it to that range size
    // const randomDecimalInRange = Math.random() * rangeSize // for example 0 up to 40.9999

    // 3. Round down to get a whole number index (e.g., 0, 1, 2...)
    // const randomIntegerIndex = Math.floor(randomDecimalInRange) // for example 0 up to 40

    // 4. Add the minimum to shift the range up to the correct starting point
    // const temperature = randomIntegerIndex + min // for example  -130 up to -90
}
