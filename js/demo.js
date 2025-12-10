const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

numbers.forEach(num => {
    console.log(num);
}); // Output: 1 2 3 4 5 (each on a new line)

const filtered = numbers.filter(num => num > 2);

console.log(filtered); // Output: [3, 4, 5]

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

const names = ['Alice', 'Bob', 'Charlie'];
names.sort((a, b) => a.localeCompare(b));

function sumArr(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArr([10, 20, 30])); // Output: 60