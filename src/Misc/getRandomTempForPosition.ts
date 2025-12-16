export function getRandomTempForPosition(position: number): number {
    const { minTemp, maxTemp } = getMinMaxTempsForPosition(position)
    return pickRandomIntegerWithinRange(minTemp, maxTemp)
}

function getMinMaxTempsForPosition(position: number): { minTemp: number; maxTemp: number } {
    let minTemp: number
    let maxTemp: number

    switch (position) {
        case 1:
            minTemp = 220
            maxTemp = 260
            break
        case 2:
            minTemp = 170
            maxTemp = 210
            break
        case 3:
            minTemp = 120
            maxTemp = 160
            break
        case 4:
            minTemp = 70
            maxTemp = 110
            break
        case 5:
            minTemp = 60
            maxTemp = 100
            break
        case 6:
            minTemp = 50
            maxTemp = 90
            break
        case 7:
            minTemp = 40
            maxTemp = 80
            break
        case 8:
            minTemp = 30
            maxTemp = 70
            break
        case 9:
            minTemp = 20
            maxTemp = 60
            break
        case 10:
            minTemp = 10
            maxTemp = 50
            break
        case 11:
            minTemp = 0
            maxTemp = 40
            break
        case 12:
            minTemp = -10
            maxTemp = 30
            break
        case 13:
            minTemp = -50
            maxTemp = -10
            break
        case 14:
            minTemp = -90
            maxTemp = -50
            break
        case 15:
            minTemp = -130
            maxTemp = -90
            break
        default:
            // Default fallback if an invalid position is passed (optional)
            throw new Error("Invalid position. Must be between 1 and 15.")
    }

    return { minTemp, maxTemp }
}

function pickRandomIntegerWithinRange(min: number, max: number): number {
    // Generate a random integer between min and max (inclusive)
    // 1. Determine how many possible numbers there are
    const rangeSize = max - min + 1 // for example 41

    // 2. Get a random decimal, then scale it to that range size
    const randomDecimalInRange = Math.random() * rangeSize // for example 0 up to 40.9999

    // 3. Round down to get a whole number index (e.g., 0, 1, 2...)
    const randomIntegerIndex = Math.floor(randomDecimalInRange) // for example 0 up to 40

    // 4. Add the minimum to shift the range up to the correct starting point
    const temperature = randomIntegerIndex + min // for example  -130 up to -90
    return temperature
}
