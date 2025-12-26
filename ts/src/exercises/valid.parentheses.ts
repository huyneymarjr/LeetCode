
function isValidParentheses(s: string): boolean {
    const stack: string[] = [];
    const parenthesesMap: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (const char of s) {
        if (char in parenthesesMap) {
            // Nếu là dấu mở, đẩy vào stack
            stack.push(char);
        } else {
            // Nếu là dấu đóng, kiểm tra stack
            const lastOpen = stack.pop();
            if (parenthesesMap[lastOpen!] !== char) {
                return false; // Không khớp
            }
        }
    }
    return stack.length === 0; // Nếu stack rỗng, tất cả đều khớp
}

console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
console.log(isValidParentheses("([)]")); // Output: false
console.log(isValidParentheses("{[]}")); // Output: true