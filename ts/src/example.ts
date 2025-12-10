interface Person {
  name: string;
  age: number;
  isStudent?: boolean;
}

const john: Person = {
  name: "John Doe",
  age: 25,
  isStudent: true,
};

console.log(`Name: ${john.name}, Age: ${john.age}, Is Student: ${john.isStudent}`);

function sumArr(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(`Sum: ${sumArr([1, 2, 3, 4, 5])}`);

function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i.toString());
  }
  return result;
}
console.log(fizzBuzz(15));

class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log('Woof! Woof!');
  }
}

let dog = new Dog('Buddy');
dog.bark();
dog.move(10);