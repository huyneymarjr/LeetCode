/**
 * ========================================
 * CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT QUAN TRỌNG
 * TypeScript Implementation with Strong Typing
 * ========================================
 */

// ============================================
// 1. ARRAY (Mảng)
// ============================================
console.log('\n=== 1. ARRAY ===');
// Mảng là cấu trúc dữ liệu tuyến tính, lưu trữ các phần tử liên tiếp trong bộ nhớ
// Time: Access O(1), Search O(n), Insert O(n), Delete O(n)

const array: number[] = [1, 2, 3, 4, 5];

// Ví dụ: Tìm phần tử lớn nhất
function findMax(arr: number[]): number {
    if (arr.length === 0) throw new Error('Array is empty');
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log('Max:', findMax([3, 7, 2, 9, 1])); // 9

// ============================================
// 2. LINKED LIST (Danh sách liên kết)
// ============================================
console.log('\n=== 2. LINKED LIST ===');
// Mỗi node chứa data và pointer đến node tiếp theo
// Time: Access O(n), Search O(n), Insert O(1), Delete O(1)

class ListNode<T> {
    val: T;
    next: ListNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Thêm vào đầu: O(1)
    addFirst(val: T): void {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Thêm vào cuối: O(n)
    addLast(val: T): void {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Xóa node: O(n)
    remove(val: T): void {
        if (!this.head) return;
        
        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // In danh sách
    print(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        console.log('LinkedList:', values.join(' -> '));
    }

    getSize(): number {
        return this.size;
    }
}

const list = new LinkedList<number>();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addFirst(0);
list.print(); // 0 -> 1 -> 2 -> 3

// ============================================
// 3. STACK (Ngăn xếp)
// ============================================
console.log('\n=== 3. STACK ===');
// LIFO (Last In First Out) - Vào sau ra trước
// Time: Push O(1), Pop O(1), Peek O(1)

class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | null {
        if (this.isEmpty()) return null;
        return this.items.pop()!;
    }

    peek(): T | null {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

// Ví dụ: Kiểm tra dấu ngoặc hợp lệ
function isValidParentheses(s: string): boolean {
    const stack = new Stack<string>();
    const pairs: { [key: string]: string } = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.isEmpty()) return false;
            const top = stack.pop();
            if (top && pairs[top] !== char) return false;
        }
    }
    return stack.isEmpty();
}
console.log('Valid Parentheses "()[]{}": ', isValidParentheses('()[]{}')); // true
console.log('Valid Parentheses "([)]": ', isValidParentheses('([)]')); // false

// ============================================
// 4. QUEUE (Hàng đợi)
// ============================================
console.log('\n=== 4. QUEUE ===');
// FIFO (First In First Out) - Vào trước ra trước
// Time: Enqueue O(1), Dequeue O(1), Front O(1)

class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | null {
        if (this.isEmpty()) return null;
        return this.items.shift()!;
    }

    front(): T | null {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Dequeue:', queue.dequeue()); // 1
console.log('Front:', queue.front()); // 2

// ============================================
// 5. HASH TABLE / MAP (Bảng băm)
// ============================================
console.log('\n=== 5. HASH TABLE ===');
// Lưu trữ cặp key-value, truy cập nhanh
// Time: Search O(1), Insert O(1), Delete O(1) - average case

const hashMap = new Map<string, number>();
hashMap.set('age', 30);
hashMap.set('score', 100);
console.log('Get age:', hashMap.get('age')); // 30

// Ví dụ: Two Sum problem
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log('Two Sum [2,7,11,15], target 9:', twoSum([2, 7, 11, 15], 9)); // [0, 1]

// ============================================
// 6. SET (Tập hợp)
// ============================================
console.log('\n=== 6. SET ===');
// Lưu trữ các giá trị duy nhất, không trùng lặp
// Time: Add O(1), Delete O(1), Has O(1)

const set = new Set<number>([1, 2, 3, 3, 4, 4, 5]);
console.log('Set:', Array.from(set)); // [1, 2, 3, 4, 5]

// Ví dụ: Loại bỏ duplicate
function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}
console.log('Remove duplicates:', removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// ============================================
// 7. BINARY TREE (Cây nhị phân)
// ============================================
console.log('\n=== 7. BINARY TREE ===');
// Mỗi node có tối đa 2 con (left, right)
// Time: Search O(n), Insert O(n), Delete O(n)

class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Duyệt Pre-order (Root -> Left -> Right)
    preOrder(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (!node) return result;
        result.push(node.val);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }

    // Duyệt In-order (Left -> Root -> Right)
    inOrder(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (!node) return result;
        this.inOrder(node.left, result);
        result.push(node.val);
        this.inOrder(node.right, result);
        return result;
    }

    // Duyệt Post-order (Left -> Right -> Root)
    postOrder(node: TreeNode<T> | null, result: T[] = []): T[] {
        if (!node) return result;
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.val);
        return result;
    }

    // Tính chiều cao cây
    height(node: TreeNode<T> | null): number {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}

// Tạo cây mẫu:     1
//                 / \
//                2   3
//               / \
//              4   5
const tree = new BinaryTree<number>();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log('Pre-order:', tree.preOrder(tree.root));   // [1, 2, 4, 5, 3]
console.log('In-order:', tree.inOrder(tree.root));     // [4, 2, 5, 1, 3]
console.log('Post-order:', tree.postOrder(tree.root)); // [4, 5, 2, 3, 1]
console.log('Height:', tree.height(tree.root));        // 3

// ============================================
// 8. BINARY SEARCH TREE (BST - Cây tìm kiếm nhị phân)
// ============================================
console.log('\n=== 8. BINARY SEARCH TREE ===');
// Left < Root < Right
// Time: Search O(log n), Insert O(log n), Delete O(log n) - balanced

class BST {
    root: TreeNode<number> | null;

    constructor() {
        this.root = null;
    }

    insert(val: number): void {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(val: number): boolean {
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            if (val < current.val) current = current.left;
            else current = current.right;
        }
        return false;
    }

    // Tìm giá trị nhỏ nhất
    findMin(node: TreeNode<number> | null = this.root): number | null {
        if (!node) return null;
        while (node.left) {
            node = node.left;
        }
        return node.val;
    }

    // Tìm giá trị lớn nhất
    findMax(node: TreeNode<number> | null = this.root): number | null {
        if (!node) return null;
        while (node.right) {
            node = node.right;
        }
        return node.val;
    }
}

const bst = new BST();
[5, 3, 7, 2, 4, 6, 8].forEach(val => bst.insert(val));
console.log('BST Search 4:', bst.search(4)); // true
console.log('BST Search 9:', bst.search(9)); // false
console.log('BST Min:', bst.findMin()); // 2
console.log('BST Max:', bst.findMax()); // 8

// ============================================
// 9. HEAP (Min Heap / Max Heap - Đống)
// ============================================
console.log('\n=== 9. HEAP ===');
// Cây nhị phân hoàn chỉnh, Min Heap: parent <= children
// Time: Insert O(log n), Delete O(log n), GetMin O(1)

class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private getParentIndex(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private getLeftChildIndex(i: number): number {
        return 2 * i + 1;
    }

    private getRightChildIndex(i: number): number {
        return 2 * i + 2;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(val: number): void {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    private heapifyUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    extractMin(): number | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!;
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);
        return min;
    }

    private heapifyDown(index: number): void {
        while (true) {
            let smallest = index;
            const left = this.getLeftChildIndex(index);
            const right = this.getRightChildIndex(index);

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;
            
            this.swap(index, smallest);
            index = smallest;
        }
    }

    peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size(): number {
        return this.heap.length;
    }
}

const minHeap = new MinHeap();
[5, 3, 7, 1, 9, 2].forEach(val => minHeap.insert(val));
console.log('Min Heap peek:', minHeap.peek()); // 1
console.log('Extract min:', minHeap.extractMin()); // 1
console.log('Min Heap peek after extract:', minHeap.peek()); // 2

// ============================================
// 10. GRAPH (Đồ thị)
// ============================================
console.log('\n=== 10. GRAPH ===');
// Tập hợp các đỉnh (vertices) và cạnh (edges)

class Graph<T> {
    private adjacencyList: Map<T, T[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: T): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: T, v2: T): void {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // Vô hướng
    }

    // BFS - Duyệt theo chiều rộng
    bfs(start: T): T[] {
        const visited = new Set<T>();
        const queue: T[] = [start];
        const result: T[] = [];

        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    // DFS - Duyệt theo chiều sâu
    dfs(start: T): T[] {
        const visited = new Set<T>();
        const result: T[] = [];

        const dfsHelper = (vertex: T): void => {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(start);
        return result;
    }
}

const graph = new Graph<string>();
['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => graph.addVertex(v));
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log('BFS from A:', graph.bfs('A'));
console.log('DFS from A:', graph.dfs('A'));

// ============================================
// 11. TRIE (Prefix Tree - Cây tiền tố)
// ============================================
console.log('\n=== 11. TRIE ===');
// Dùng để lưu trữ và tìm kiếm chuỗi hiệu quả
// Time: Insert O(m), Search O(m), m = length of word

class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) return false;
            node = node.children.get(char)!;
        }
        return node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children.has(char)) return false;
            node = node.children.get(char)!;
        }
        return true;
    }
}

const trie = new Trie();
['apple', 'app', 'apricot', 'banana'].forEach(word => trie.insert(word));
console.log('Search "app":', trie.search('app')); // true
console.log('Search "appl":', trie.search('appl')); // false
console.log('StartsWith "app":', trie.startsWith('app')); // true

// ============================================
// GIẢI THUẬT SORTING (Sắp xếp)
// ============================================

// 1. BUBBLE SORT - Sắp xếp nổi bọt
console.log('\n=== BUBBLE SORT ===');
// Time: O(n²), Space: O(1)
function bubbleSort(arr: number[]): number[] {
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
console.log('Bubble Sort:', bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 2. SELECTION SORT - Sắp xếp chọn
console.log('\n=== SELECTION SORT ===');
// Time: O(n²), Space: O(1)
function selectionSort(arr: number[]): number[] {
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

// 3. INSERTION SORT - Sắp xếp chèn
console.log('\n=== INSERTION SORT ===');
// Time: O(n²), Space: O(1)
function insertionSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log('Insertion Sort:', insertionSort([12, 11, 13, 5, 6]));

// 4. MERGE SORT - Sắp xếp trộn
console.log('\n=== MERGE SORT ===');
// Time: O(n log n), Space: O(n)
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log('Merge Sort:', mergeSort([38, 27, 43, 3, 9, 82, 10]));

// 5. QUICK SORT - Sắp xếp nhanh
console.log('\n=== QUICK SORT ===');
// Time: O(n log n) average, O(n²) worst
function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): number[] {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
console.log('Quick Sort:', quickSort([10, 7, 8, 9, 1, 5]));

// ============================================
// GIẢI THUẬT SEARCHING (Tìm kiếm)
// ============================================

// 1. LINEAR SEARCH - Tìm kiếm tuyến tính
console.log('\n=== LINEAR SEARCH ===');
// Time: O(n), Space: O(1)
function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
console.log('Linear Search 7:', linearSearch([1, 3, 5, 7, 9], 7));

// 2. BINARY SEARCH - Tìm kiếm nhị phân
console.log('\n=== BINARY SEARCH ===');
// Time: O(log n), Space: O(1)
function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log('Binary Search 7:', binarySearch([1, 3, 5, 7, 9], 7));

// ============================================
// GIẢI THUẬT DYNAMIC PROGRAMMING (Quy hoạch động)
// ============================================

// 1. FIBONACCI - Dãy Fibonacci
console.log('\n=== FIBONACCI (DP) ===');
// Time: O(n), Space: O(n)
function fibonacci(n: number): number {
    if (n <= 1) return n;
    const dp: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log('Fibonacci(10):', fibonacci(10)); // 55

// 2. CLIMBING STAIRS - Leo cầu thang
console.log('\n=== CLIMBING STAIRS ===');
// Time: O(n), Space: O(n)
function climbStairs(n: number): number {
    if (n <= 2) return n;
    const dp: number[] = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log('Climbing Stairs(5):', climbStairs(5)); // 8

// 3. LONGEST COMMON SUBSEQUENCE (LCS)
console.log('\n=== LONGEST COMMON SUBSEQUENCE ===');
// Time: O(m*n), Space: O(m*n)
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;
    const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}
console.log('LCS("abcde", "ace"):', longestCommonSubsequence('abcde', 'ace')); // 3

// 4. KNAPSACK PROBLEM - Bài toán cái túi
console.log('\n=== 0/1 KNAPSACK ===');
// Time: O(n*W), Space: O(n*W)
function knapsack(weights: number[], values: number[], capacity: number): number {
    const n = weights.length;
    const dp: number[][] = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
}
console.log('Knapsack:', knapsack([1, 2, 3], [6, 10, 12], 5)); // 22

// ============================================
// GIẢI THUẬT GREEDY (Tham lam)
// ============================================

// 1. COIN CHANGE - Đổi tiền
console.log('\n=== COIN CHANGE (Greedy) ===');
function coinChangeGreedy(coins: number[], amount: number): number {
    coins.sort((a, b) => b - a);
    let count = 0;
    
    for (let coin of coins) {
        if (amount === 0) break;
        count += Math.floor(amount / coin);
        amount %= coin;
    }
    return amount === 0 ? count : -1;
}
console.log('Coin Change for 93:', coinChangeGreedy([1, 5, 10, 25], 93));

// 2. ACTIVITY SELECTION
console.log('\n=== ACTIVITY SELECTION ===');
interface Activity {
    start: number;
    finish: number;
    index: number;
}

function activitySelection(start: number[], finish: number[]): number[] {
    const n = start.length;
    const activities: Activity[] = [];
    
    for (let i = 0; i < n; i++) {
        activities.push({ start: start[i], finish: finish[i], index: i });
    }
    
    activities.sort((a, b) => a.finish - b.finish);
    
    const selected: number[] = [activities[0].index];
    let lastFinish = activities[0].finish;
    
    for (let i = 1; i < n; i++) {
        if (activities[i].start >= lastFinish) {
            selected.push(activities[i].index);
            lastFinish = activities[i].finish;
        }
    }
    return selected;
}
console.log('Activity Selection:', 
    activitySelection([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));

// ============================================
// GIẢI THUẬT BACKTRACKING (Quay lui)
// ============================================

// 1. N-QUEENS - Bài toán 8 quân hậu
console.log('\n=== N-QUEENS ===');
function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[][] = Array(n).fill(0).map(() => Array(n).fill('.'));
    
    function isValid(row: number, col: number): boolean {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
    
    function backtrack(row: number): void {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
}
console.log('N-Queens (4x4) solutions:', solveNQueens(4).length); // 2

// 2. PERMUTATIONS - Hoán vị
console.log('\n=== PERMUTATIONS ===');
function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(current: number[]): void {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        for (let num of nums) {
            if (current.includes(num)) continue;
            current.push(num);
            backtrack(current);
            current.pop();
        }
    }
    
    backtrack([]);
    return result;
}
console.log('Permutations of [1,2,3]:', permute([1, 2, 3]));

// 3. SUBSETS - Tập con
console.log('\n=== SUBSETS ===');
function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, current: number[]): void {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}
console.log('Subsets of [1,2,3]:', subsets([1, 2, 3]));

// ============================================
// GIẢI THUẬT GRAPH ALGORITHMS
// ============================================

// 1. DIJKSTRA - Đường đi ngắn nhất
console.log('\n=== DIJKSTRA ===');
type GraphWeight = { [key: string]: [string, number][] };

function dijkstra(graph: GraphWeight, start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const visited = new Set<string>();
    const pq: [number, string][] = [[0, start]];
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    
    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDist, currentNode] = pq.shift()!;
        
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        
        for (let [neighbor, weight] of graph[currentNode]) {
            const distance = currentDist + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.push([distance, neighbor]);
            }
        }
    }
    
    return distances;
}

const weightedGraph: GraphWeight = {
    'A': [['B', 4], ['C', 2]],
    'B': [['A', 4], ['C', 1], ['D', 5]],
    'C': [['A', 2], ['B', 1], ['D', 8]],
    'D': [['B', 5], ['C', 8]]
};
console.log('Dijkstra from A:', dijkstra(weightedGraph, 'A'));

// 2. TOPOLOGICAL SORT - Sắp xếp topo
console.log('\n=== TOPOLOGICAL SORT ===');
type GraphTopo = { [key: string]: string[] };

function topologicalSort(graph: GraphTopo): string[] {
    const visited = new Set<string>();
    const stack: string[] = [];
    
    function dfs(node: string): void {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }
    
    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }
    
    return stack.reverse();
}

const dag: GraphTopo = {
    '5': ['2', '0'],
    '4': ['0', '1'],
    '2': ['3'],
    '3': ['1'],
    '0': [],
    '1': []
};
console.log('Topological Sort:', topologicalSort(dag));

// ============================================
// GIẢI THUẬT STRING ALGORITHMS
// ============================================

// 1. KMP - Knuth-Morris-Pratt Pattern Matching
console.log('\n=== KMP PATTERN MATCHING ===');
function KMPSearch(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    
    let i = 0, j = 0;
    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === m) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return result;
}

function computeLPSArray(pattern: string): number[] {
    const m = pattern.length;
    const lps: number[] = Array(m).fill(0);
    let len = 0, i = 1;
    
    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}
console.log('KMP Search "ABABC":', 
    KMPSearch('ABABDABACDABABCABAB', 'ABABC'));

// 2. LONGEST PALINDROMIC SUBSTRING
console.log('\n=== LONGEST PALINDROMIC SUBSTRING ===');
function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    
    let start = 0, maxLen = 1;
    
    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }
    
    return s.substring(start, start + maxLen);
}
console.log('Longest Palindrome in "babad":', longestPalindrome('babad'));

console.log('\n=== END OF DATA STRUCTURES & ALGORITHMS ===');
