
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>(); // Lưu giá trị và chỉ số của các phần tử đã duyệt qua

    for (let i = 0; i < nums.length; i++) {
        const com = target - nums[i]; // Tìm số cần để đạt target

        if (numMap.has(com)) {
            // Nếu số cần tìm đã tồn tại trong Map, trả về chỉ số
            return [numMap.get(com)!, i];
        }

        // Nếu không, lưu số hiện tại và chỉ số của nó vào Map
        numMap.set(nums[i], i);
    }

    throw new Error("No solution found"); // Trường hợp không tìm thấy (theo đề bài thì không xảy ra)
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]