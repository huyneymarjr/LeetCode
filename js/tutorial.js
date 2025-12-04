// Tim giá trị lớn nhất trong một mảng số
function findMax(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

console.log("Gía trị lớn nhất là:", findMax([2, 6, 7, 1, 9]));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log('Remove duplicate: ', removeDuplicates([1, 2, 2, 3, 3, 6, 6, 8]));


function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log('Bubble Sort:', bubbleSort([64, 34, 25, 12, 22, 11, 95]));

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
console.log('Selection Sort:', selectionSort([64, 25, 12, 22, 11]));