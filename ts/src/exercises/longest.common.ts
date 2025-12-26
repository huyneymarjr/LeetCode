function longestCommonPrefix(strs: string[]): string {
    // Trường hợp đặc biệt: mảng rỗng
    if (strs.length === 0) return "";
    
    // Tìm độ dài chuỗi ngắn nhất (prefix không thể dài hơn chuỗi ngắn nhất)
    const minLength = Math.min(...strs.map(str => str.length));
    
    let prefix = "";
    
    // Lặp qua từng vị trí ký tự
    for (let i = 0; i < minLength; i++) {
        // Lấy ký tự tại vị trí i từ chuỗi đầu tiên
        const char = strs[0][i];
        
        // Kiểm tra xem tất cả chuỗi có ký tự giống nhau tại vị trí i không
        const isCommon = strs.every(str => str[i] === char);
        
        // Nếu không giống, dừng lại
        if (!isCommon) break;
        
        // Nếu giống, thêm vào prefix
        prefix += char;
    }
    
    return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""
console.log(longestCommonPrefix(["interspecies","interstellar","interstate"])); // Output: "inters"
console.log(longestCommonPrefix(["a"])); // Output: "a"
console.log(longestCommonPrefix(["","b"])); // Output: ""