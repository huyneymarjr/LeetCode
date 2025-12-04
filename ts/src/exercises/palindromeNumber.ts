function isPalindrome(x: number): boolean {
    if (x < 0) return false; // Số âm không thể là Palindrome

    const str = x.toString(); // Chuyển số thành chuỗi
    const reversedStr = str.split('').reverse().join(''); // Đảo ngược chuỗi

    return str === reversedStr; // So sánh chuỗi ban đầu và chuỗi đảo ngược
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false