/**
 * ========================================
 * JAVASCRIPT FUNDAMENTALS - Đầy Đủ
 * ========================================
 * Tất cả kiến thức cơ bản JavaScript
 */

console.log("=".repeat(60));
console.log("1. BIẾN VÀ KIỂU DỮ LIỆU");
console.log("=".repeat(68));

// var, let, const
var varVariable = "I'm var"; // function-scoped, có thể redeclare
let letVariable = "I'm let"; // block-scoped, không redeclare
const constVariable = "I'm const"; // block-scoped, không thay đổi

console.log("var:", varVariable);
console.log("let:", letVariable);
console.log("const:", constVariable);

// Kiểu dữ liệu primitive
const numberType = 42;
const stringType = "Hello World";
const booleanType = true;
const undefinedType = undefined;
const nullType = null;
const symbolType = Symbol("id");
const bigintType = 123n;

console.log("number:", typeof numberType, numberType);
console.log("string:", typeof stringType, stringType);
console.log("boolean:", typeof booleanType, booleanType);
console.log("undefined:", typeof undefinedType, undefinedType);
console.log("null:", typeof nullType, nullType);
console.log("symbol:", typeof symbolType, symbolType);
console.log("bigint:", typeof bigintType, bigintType);

console.log("\n" + "=".repeat(60));
console.log("2. TOÁN TỬ");
console.log("=".repeat(60));

// Toán tử số học
console.log("Toán tử số học:");
console.log("5 + 2 =", 5 + 2);
console.log("5 - 2 =", 5 - 2);
console.log("5 * 2 =", 5 * 2);
console.log("5 / 2 =", 5 / 2);
console.log("5 % 2 =", 5 % 2);
console.log("2 ** 3 =", 2 ** 3); // Lũy thừa

// Toán tử so sánh
console.log("\nToán tử so sánh:");
console.log("5 > 2:", 5 > 2);
console.log("5 < 2:", 5 < 2);
console.log("5 >= 5:", 5 >= 5);
console.log("5 <= 5:", 5 <= 5);
console.log("5 === '5':", 5 === "5"); // Strict
console.log("5 == '5':", 5 == "5"); // Loose
console.log("5 !== '5':", 5 !== "5");

// Toán tử logic
console.log("\nToán tử logic:");
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);

// Toán tử gán
console.log("\nToán tử gán:");
let num = 10;
console.log("num = 10:", num);
num += 5; // num = num + 5
console.log("num += 5:", num);
num -= 3; // num = num - 3
console.log("num -= 3:", num);
num *= 2; // num = num * 2
console.log("num *= 2:", num);

// Toán tử ternary
console.log("\nToán tử ternary:");
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(`Age ${age}: ${status}`);

console.log("\n" + "=".repeat(60));
console.log("3. HÀM (FUNCTIONS)");
console.log("=".repeat(60));

// Hàm thường
function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Hàm thường:", greet("John"));

// Arrow function
const add = (a, b) => a + b;
console.log("Arrow function:", add(5, 3));

// Arrow function với nhiều dòng
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("Arrow function nhiều dòng:", multiply(4, 5));

// Default parameters
const greetWithTitle = (name, title = "Mr.") => {
  return `Hello, ${title} ${name}!`;
};
console.log("Default parameters:", greetWithTitle("Smith"));
console.log("Default parameters:", greetWithTitle("Smith", "Dr."));

// Rest parameters
const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};
console.log("Rest parameters:", sum(1, 2, 3, 4, 5));

// Callback function
function processData(data, callback) {
  const result = data * 2;
  callback(result);
}
processData(5, (result) => {
  console.log("Callback result:", result);
});

console.log("\n" + "=".repeat(60));
console.log("4. ĐỐI TƯỢNG (OBJECTS)");
console.log("=".repeat(60));

// Object literal
const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
  getInfo() {
    return `${this.name}, ${this.age} years old`;
  }
};

console.log("Object:", person);
console.log("person.name:", person.name);
console.log("person['age']:", person["age"]);
person.greet();
console.log("getInfo():", person.getInfo());

// Destructuring
const { name, age, city } = person;
console.log("\nDestructuring - name:", name, ", age:", age, ", city:", city);

// Nested destructuring
const { name: fullName, age: personAge } = person;
console.log("Renamed destructuring:", fullName, personAge);

// Spread operator trong object
const person2 = { ...person, age: 25, city: "Los Angeles" };
console.log("\nSpread operator:", person2);

// Object.keys, Object.values, Object.entries
console.log("\nObject.keys():", Object.keys(person));
console.log("Object.values():", Object.values(person));
console.log("Object.entries():", Object.entries(person));

// Object.assign
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = Object.assign({}, obj1, obj2);
console.log("Object.assign():", merged);

console.log("\n" + "=".repeat(60));
console.log("5. MẢNG (ARRAYS)");
console.log("=".repeat(60));

// Khai báo mảng
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, { name: "obj" }];

console.log("numbers array:", numbers);
console.log("mixed array:", mixed);
console.log("Độ dài:", numbers.length);

// Truy cập phần tử
console.log("\nTruy cập phần tử:");
console.log("numbers[0]:", numbers[0]);
console.log("numbers[numbers.length - 1]:", numbers[numbers.length - 1]);

// Các phương thức mảng - Thêm/Xóa
let arr = [1, 2, 3];
console.log("\nCác phương thức thêm/xóa:");
console.log("Mảng ban đầu:", arr);
arr.push(4, 5);
console.log("push(4, 5):", arr);
arr.pop();
console.log("pop():", arr);
arr.unshift(0);
console.log("unshift(0):", arr);
arr.shift();
console.log("shift():", arr);

// Splice
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1); // Xóa 1 phần tử từ index 2
console.log("splice(2, 1):", arr2);

// Slice
let arr3 = [1, 2, 3, 4, 5];
const sliced = arr3.slice(1, 4); // Lấy từ index 1 đến 3
console.log("slice(1, 4):", sliced);

// forEach
console.log("\nforEach:");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map
console.log("\nmap - Nhân đôi:");
const doubled = numbers.map(x => x * 2);
console.log("map(x => x * 2):", doubled);

// filter
console.log("\nfilter - Số chẵn:");
const evens = numbers.filter(x => x % 2 === 0);
console.log("filter(x => x % 2 === 0):", evens);

// reduce
console.log("\nreduce - Tổng:");
const total = numbers.reduce((sum, x) => sum + x, 0);
console.log("reduce((sum, x) => sum + x, 0):", total);

// find
console.log("\nfind - Tìm số > 3:");
const found = numbers.find(x => x > 3);
console.log("find(x => x > 3):", found);

// findIndex
console.log("\nfindIndex:");
const foundIndex = numbers.findIndex(x => x > 3);
console.log("findIndex(x => x > 3):", foundIndex);

// some, every
console.log("\nsome, every:");
const hasEven = numbers.some(x => x % 2 === 0);
const allPositive = numbers.every(x => x > 0);
console.log("some(x => x % 2 === 0):", hasEven);
console.log("every(x => x > 0):", allPositive);

// includes, indexOf
console.log("\nincludes, indexOf:");
console.log("includes(3):", numbers.includes(3));
console.log("indexOf(3):", numbers.indexOf(3));

// join, split
console.log("\njoin, split:");
const joined = numbers.join("-");
console.log("join('-'):", joined);
const splitStr = "a,b,c,d";
const splitArray = splitStr.split(",");
console.log("split(','):", splitArray);

// Destructuring
console.log("\nDestructuring:");
const [first, second, ...rest] = numbers;
console.log("first:", first, ", second:", second, ", rest:", rest);

// Spread operator
console.log("\nSpread operator:");
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
const combined = [...arr4, ...arr5];
console.log("combined:", combined);

console.log("\n" + "=".repeat(60));
console.log("6. VÒNG LẶP (LOOPS)");
console.log("=".repeat(60));

// for loop
console.log("for loop:");
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`);
}

// while loop
console.log("\nwhile loop:");
let i = 0;
while (i < 3) {
  console.log(`While iteration ${i}`);
  i++;
}

// do...while loop
console.log("\ndo...while loop:");
let j = 0;
do {
  console.log(`Do-while iteration ${j}`);
  j++;
} while (j < 3);

// for...of (lặp giá trị)
console.log("\nfor...of:");
for (const item of [10, 20, 30]) {
  console.log(item);
}

// for...in (lặp key)
console.log("\nfor...in:");
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

console.log("\n" + "=".repeat(60));
console.log("7. ĐIỀU KIỆN (CONDITIONAL)");
console.log("=".repeat(60));

// if...else
const userAge = 25;
if (userAge >= 18) {
  console.log("User is an adult");
} else if (userAge >= 13) {
  console.log("User is a teenager");
} else {
  console.log("User is a child");
}

// Ternary operator
console.log("\nTernary operator:");
const ageStatus = userAge >= 18 ? "Adult" : "Minor";
console.log(`Age status: ${ageStatus}`);

// Switch
console.log("\nSwitch statement:");
const day = 2;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown";
}
console.log(`Day ${day} is ${dayName}`);

console.log("\n" + "=".repeat(60));
console.log("8. ASYNC/AWAIT & PROMISE");
console.log("=".repeat(60));

// Promise
console.log("Creating a Promise:");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

promise.then(result => {
  console.log("Promise result:", result);
});

// Async/Await
async function fetchData() {
  try {
    // Giả lập fetch data
    const data = await new Promise(resolve => {
      setTimeout(() => resolve({ id: 1, name: "John" }), 500);
    });
    console.log("Async/Await data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Chạy async function
// fetchData();

// Promise.all
console.log("\nPromise.all:");
const p1 = Promise.resolve("First");
const p2 = Promise.resolve("Second");
const p3 = Promise.resolve("Third");

Promise.all([p1, p2, p3]).then(results => {
  console.log("Promise.all results:", results);
});

console.log("\n" + "=".repeat(60));
console.log("9. LỚP (CLASSES) - OOP");
console.log("=".repeat(60));

// Khai báo lớp
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    console.log("Some sound");
  }

  // Static method
  static info() {
    return "This is Animal class";
  }

  // Getter
  get description() {
    return `${this.name} is ${this.age} years old`;
  }

  // Setter
  set nickname(nick) {
    this.nick = nick;
  }
}

const animal = new Animal("Generic", 5);
console.log("animal.name:", animal.name);
console.log("animal.description:", animal.description);
console.log("Animal.info():", Animal.info());

// Kế thừa (Inheritance)
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }

  getFullInfo() {
    return `${this.name} is a ${this.breed} dog`;
  }
}

const dog = new Dog("Rex", 3, "Labrador");
console.log("\nDog instance:");
console.log("dog.name:", dog.name);
console.log("dog.breed:", dog.breed);
dog.makeSound();
console.log("dog.getFullInfo():", dog.getFullInfo());

// Kế thừa - Polymorphism
class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

const cat = new Cat("Whiskers", 2);
cat.makeSound();

console.log("\n" + "=".repeat(60));
console.log("10. TRỪU TƯỢNG, ĐÓNG GÓI, ĐA HÌNH");
console.log("=".repeat(60));

// Encapsulation (Đóng gói) - Private fields
class BankAccount {
  #balance = 0; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. New balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.getBalance());

console.log("\n" + "=".repeat(60));
console.log("11. THIS KEYWORD");
console.log("=".repeat(60));

// This trong object
const person2 = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
person2.greet();

// This trong constructor
class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

const p = new Person("Bob");
p.introduce();

// This trong arrow function (khác)
const obj2 = {
  name: "Charlie",
  regularFunc: function() {
    console.log("Regular function - this.name:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow function - this.name:", this.name); // undefined (không có this riêng)
  }
};
obj2.regularFunc();
obj2.arrowFunc();

// call, apply, bind
console.log("\ncall, apply, bind:");
function introduce2(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person3 = { name: "David" };
introduce2.call(person3, "Hi", "!");
introduce2.apply(person3, ["Hello", "."]);

const boundIntro = introduce2.bind(person3);
boundIntro("Hey", "?");

console.log("\n" + "=".repeat(60));
console.log("12. CLOSURE");
console.log("=".repeat(60));

function outer(x) {
  return function inner(y) {
    return x + y; // inner function có access đến x từ outer
  };
}

const add5 = outer(5);
const add10 = outer(10);
console.log("add5(3):", add5(3)); // 8
console.log("add10(3):", add10(3)); // 13

// Closure trong vòng lặp
const functions = [];
for (let i = 0; i < 3; i++) {
  functions.push(() => i);
}
console.log("Closure results:");
functions.forEach((fn, index) => console.log(`Function ${index}:`, fn()));

console.log("\n" + "=".repeat(60));
console.log("13. HOISTING");
console.log("=".repeat(60));

// Variable hoisting
console.log("Hoisting var before declaration:", hoistedVar);
var hoistedVar = "I'm hoisted";
console.log("hoistedVar:", hoistedVar);

// Function hoisting
function hoistedFunction() {
  return "Functions are hoisted too";
}
console.log("hoistedFunction():", hoistedFunction());

// let, const không hoisting (Temporal Dead Zone)
console.log("let and const are not hoisted (TDZ)");
// console.log(hoistedLet); // ReferenceError
// let hoistedLet = 5;

console.log("\n" + "=".repeat(60));
console.log("14. STRING METHODS");
console.log("=".repeat(60));

const str = "JavaScript";
console.log("Original string:", str);

// String methods
console.log("\nString methods:");
console.log("length:", str.length);
console.log("charAt(0):", str.charAt(0));
console.log("charCodeAt(0):", str.charCodeAt(0));
console.log("toUpperCase():", str.toUpperCase());
console.log("toLowerCase():", str.toLowerCase());
console.log("indexOf('a'):", str.indexOf("a"));
console.log("includes('Java'):", str.includes("Java"));
console.log("startsWith('Java'):", str.startsWith("Java"));
console.log("endsWith('Script'):", str.endsWith("Script"));
console.log("substring(0, 4):", str.substring(0, 4));
console.log("slice(0, 4):", str.slice(0, 4));
console.log("repeat(2):", str.repeat(2));
console.log("trim():", "  hello  ".trim());

// Template literals
const name = "John";
const age2 = 30;
const message = `Hello, ${name}! You are ${age2} years old.`;
console.log("\nTemplate literals:", message);

// Multi-line string
const multiLine = `
  This is a
  multi-line
  string
`;
console.log("Multi-line string:", multiLine);

console.log("\n" + "=".repeat(60));
console.log("15. ERROR HANDLING");
console.log("=".repeat(60));

try {
  throw new Error("This is a custom error");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Finally block always executes");
}

// Try-catch trong async
async function tryCatchAsync() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => reject("Async error"), 100);
    });
  } catch (error) {
    console.log("Caught async error:", error);
  }
}

// tryCatchAsync();

console.log("\n" + "=".repeat(60));
console.log("16. SPREAD & REST");
console.log("=".repeat(60));

// Spread operator
console.log("Spread operator:");
const arr6 = [1, 2, 3];
const arr7 = [...arr6, 4, 5, 6];
console.log("Combined arrays:", arr7);

const obj3 = { a: 1, b: 2 };
const obj4 = { ...obj3, c: 3 };
console.log("Combined objects:", obj4);

// Rest parameters
console.log("\nRest parameters:");
const sumNumbers = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log("sumNumbers(1, 2, 3, 4):", sumNumbers(1, 2, 3, 4));

console.log("\n" + "=".repeat(60));
console.log("17. DESTRUCTURING - ADVANCED");
console.log("=".repeat(60));

// Array destructuring
const [x, y, z] = [10, 20, 30];
console.log("Array destructuring:", x, y, z);

// Object destructuring
const { name: n, age: a } = { name: "Eve", age: 28 };
console.log("Object destructuring - name:", n, ", age:", a);

// Nested destructuring
const nested = {
  user: {
    id: 1,
    profile: {
      firstName: "Jane",
      lastName: "Doe"
    }
  }
};

const { user: { profile: { firstName } } } = nested;
console.log("Nested destructuring - firstName:", firstName);

console.log("\n" + "=".repeat(60));
console.log("18. MODULE - IMPORT/EXPORT");
console.log("=".repeat(60));

console.log("Import/Export (in Node.js or with modules):");
console.log("export const add = (a, b) => a + b;");
console.log("import { add } from './module.js';");

console.log("\n" + "=".repeat(60));
console.log("19. CALLBACK, PROMISE, ASYNC/AWAIT COMPARISON");
console.log("=".repeat(60));

// Callback
function fetchUserCallback(id, callback) {
  setTimeout(() => {
    callback({ id, name: "User " + id });
  }, 500);
}

// Promise
function fetchUserPromise(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: "User " + id });
    }, 500);
  });
}

// Async/Await
async function fetchUserAsync(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: "User " + id });
    }, 500);
  });
}

console.log("All three methods fetch user data asynchronously");

console.log("\n" + "=".repeat(60));
console.log("20. JSON OPERATIONS");
console.log("=".repeat(60));

// JSON.stringify
const data = { name: "John", age: 30, hobbies: ["reading", "gaming"] };
const jsonString = JSON.stringify(data);
console.log("JSON.stringify():", jsonString);

// JSON.parse
const parsed = JSON.parse(jsonString);
console.log("JSON.parse():", parsed);

console.log("\n" + "=".repeat(60));
console.log("ALL FUNDAMENTALS COVERED!");
console.log("=".repeat(60));
