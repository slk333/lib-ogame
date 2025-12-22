/**
 *
 * Format a resource amount for display in Cost panels. Shorter than for planet resource display or for resources in spy reports.
 * Formats a number with K, M, B suffixes based on the pattern:
 * 60 600 1.2K 51K 300K 1.2M 12M 128M 1.2B 18B 188B
 *
 * @param {number} num - The number to format
 * @return {string} - The formatted number string
 */
export function formatResourceShort(num: number): string {
    // Handle edge cases
    if (num === null || num === undefined || isNaN(num) || num < 0) {
        return "Invalid input"
    }

    // Define breakpoints for different formats
    if (num < 1000) {
        // Numbers less than 1,000 are displayed as is, e.g., 60
        return num.toString()
    } else if (num < 10_000) {
        // Numbers 1,000 to 9,999 are displayed with a decimal and K, e.g., 1.2K
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K"
    } else if (num < 100_000) {
        // Numbers 10,000 to 99,999 are displayed as a whole number with K, e.g., 51K
        return Math.floor(num / 1000) + "K"
    } else if (num < 1_000_000) {
        // Numbers 100,000 to 999,999 are displayed as a whole number with K, e.g., 300K
        return Math.floor(num / 1000) + "K"
    } else if (num < 10_000_000) {
        // Numbers 1,000,000 to 9,999,999 are displayed with a decimal and M, e.g., 1.2M
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"
    } else if (num < 100_000_0000) {
        // Numbers 10,000,000 to 999,999,999 are displayed as a whole number with M, e.g., 12M
        return Math.floor(num / 1_000_000) + "M"
    } else if (num < 10_000_000_000) {
        // Numbers 1,000,000,000 to 9,999,999,999 are displayed with a decimal and B, e.g., 1.2B
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B"
    } else {
        // Numbers 10,000,000,000 and above are displayed as a whole number with B, e.g., 18B
        return Math.floor(num / 1_000_000_000) + "B"
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
