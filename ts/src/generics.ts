function identify<T>(arg: T): T {
    return arg;
}

const output1 = identify("Hello, Generics!");
const output2 = identify(42);

console.log(output1);
console.log(output2);