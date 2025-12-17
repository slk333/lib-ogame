export function formatTimeInterval(timeInterval: number): string {
    /* Ogame-style time-interval formatting */

    if (timeInterval <= 0) {
        return `Done`
    }

    if (timeInterval >= 86400 * 7) {
        /* 1w 1d */
        const weeksAmount = Math.floor(timeInterval / (86400 * 7))
        const daysAmount = Math.floor((timeInterval % (86400 * 7)) / 86400)
        return `${weeksAmount}w ${daysAmount}d `
    }
    if (timeInterval >= 86400) {
        /* 1d 1h */
        const daysAmount = Math.floor(timeInterval / 86400)
        const hoursAmount = Math.floor((timeInterval % 86400) / 3600)
        return `${daysAmount}d ${hoursAmount}h `
    }
    if (timeInterval >= 3600) {
        /* 1h 1m */
        const hoursAmount = Math.floor(timeInterval / 3600)
        const minutesAmount = Math.floor((timeInterval % 3600) / 60)
        return `${hoursAmount}h ${minutesAmount}m `
    }
    if (timeInterval >= 60) {
        /* 1m 1s */
        const minutesAmount = Math.floor(timeInterval / 60)
        const secondsAmount = Math.floor(timeInterval % 60)
        return `${minutesAmount}m ${secondsAmount}s `
    }
    if (timeInterval < 60) {
        /* 11s */
        const secondsAmount = Math.floor(timeInterval)
        return `${secondsAmount} sec`
    }

    return ""
}
