function romanToInt(s: string): number {
    // Bảng ánh xạ giá trị của các ký tự số La Mã
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0; // Tổng giá trị
    let prevValue = 0; // Giá trị của ký tự trước đó

    // Duyệt qua từng ký tự trong chuỗi từ phải sang trái
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]]; // Giá trị của ký tự hiện tại

        if (currentValue < prevValue) {
            // Nếu giá trị hiện tại nhỏ hơn giá trị trước đó, trừ nó khỏi tổng
            total -= currentValue;
        } else {
            // Nếu không, cộng giá trị hiện tại vào tổng
            total += currentValue;
        }

        // Cập nhật giá trị trước đó
        prevValue = currentValue;
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994