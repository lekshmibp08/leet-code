function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        if (next > current) {
            total += (next - current);
            i++; // skip the next character
        } else {
            total += current;
        }
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
