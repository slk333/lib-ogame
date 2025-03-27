/**
 * Formats a number with K, M, B suffixes based on the pattern:
 * 60 600 1.2K 51K 300K 1.2M 12M 128M 1.2B 18B 188B
 *
 * @param {number} num - The number to format
 * @return {string} - The formatted number string
 */
export function formatResourceAmount(num: number): string {
    // Handle edge cases
    if (num === null || num === undefined || isNaN(num) || num < 0) {
        return "Invalid input"
    }

    // Define breakpoints for different formats
    if (num < 1000) {
        // Numbers less than 1,000 are displayed as is
        return num.toString()
    } else if (num < 10000) {
        // Numbers 1,000 to 9,999 are displayed with a decimal and K
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K"
    } else if (num < 100000) {
        // Numbers 10,000 to 99,999 are displayed as a whole number with K
        return Math.round(num / 1000) + "K"
    } else if (num < 1000000) {
        // Numbers 100,000 to 999,999 are displayed as a whole number with K
        return Math.round(num / 1000) + "K"
    } else if (num < 10000000) {
        // Numbers 1,000,000 to 9,999,999 are displayed with a decimal and M
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
    } else if (num < 1000000000) {
        // Numbers 10,000,000 to 999,999,999 are displayed as a whole number with M
        return Math.round(num / 1000000) + "M"
    } else if (num < 10000000000) {
        // Numbers 1,000,000,000 to 9,999,999,999 are displayed with a decimal and B
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B"
    } else {
        // Numbers 10,000,000,000 and above are displayed as a whole number with B
        return Math.round(num / 1000000000) + "B"
    }
}

// Examples
// console.log(formatNumber(60));       // "60"
// console.log(formatNumber(600));      // "600"
// console.log(formatNumber(1200));     // "1.2K"
// console.log(formatNumber(51000));    // "51K"
// console.log(formatNumber(300000));   // "300K"
// console.log(formatNumber(1200000));  // "1.2M"
// console.log(formatNumber(12000000)); // "12M"
// console.log(formatNumber(128000000)); // "128M"
// console.log(formatNumber(1200000000)); // "1.2B"
// console.log(formatNumber(18000000000)); // "18B"
// console.log(formatNumber(188000000000)); // "188B"
