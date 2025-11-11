// class Engine {
//   engineName: string
//   constructor(engineName: string) {
//     this.engineName = engineName
//   }

//   startEngine() {
//     console.log(`Engine ${this.engineName} is starting...`)
//   }
// }

// const engine = new Engine('V12')
// engine.startEngine()

abstract class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void; // Abstraction
}

class Dog extends Animal { // Inheritance
  makeSound(): void { // Polymorphism
    console.log(`${this.name} barks!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} meows!`);
  }
}

// Encapsulation: name chỉ được truy cập qua constructor
const dog = new Dog('Rex');
dog.makeSound(); // Output: Rex barks!