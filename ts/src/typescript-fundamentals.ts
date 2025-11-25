/**
 * ========================================
 * TYPESCRIPT FUNDAMENTALS - Đầy Đủ
 * ========================================
 * Tất cả kiến thức cơ bản TypeScript
 */

// ========================================
// 1. KIỂU DỮ LIỆU CƠ BẢN
// ========================================

// Primitive types
const numberType: number = 42;
const stringType: string = "Hello TypeScript";
const booleanType: boolean = true;
const nullType: null = null;
const undefinedType: undefined = undefined;
const symbolType: symbol = Symbol("id");
const bigintType: bigint = 123n;

console.log("=".repeat(60));
console.log("1. KIỂU DỮ LIỆU CƠ BẢN");
console.log("=".repeat(60));
console.log("number:", numberType);
console.log("string:", stringType);
console.log("boolean:", booleanType);

// Any type (tránh sử dụng)
let anyType: any = "Can be anything";
anyType = 123;

// Unknown type (an toàn hơn any)
let unknownType: unknown = "Unknown value";
// unknownType.toUpperCase(); // Error: không biết kiểu
if (typeof unknownType === "string") {
  console.log("Unknown type is string");
}

// ========================================
// 2. UNION TYPES
// ========================================

console.log("\n" + "=".repeat(60));
console.log("2. UNION TYPES");
console.log("=".repeat(60));

type StringOrNumber = string | number;
const value1: StringOrNumber = "hello";
const value2: StringOrNumber = 42;

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id.toFixed(2));
  }
}

printId("ID123");
printId(456);

// ========================================
// 3. LITERAL TYPES
// ========================================

console.log("\n" + "=".repeat(60));
console.log("3. LITERAL TYPES");
console.log("=".repeat(60));

type Direction = "up" | "down" | "left" | "right";
const direction: Direction = "up";

type HttpStatus = 200 | 201 | 400 | 404 | 500;
const status: HttpStatus = 200;

console.log("Direction:", direction);
console.log("HTTP Status:", status);

// ========================================
// 4. TUPLE
// ========================================

console.log("\n" + "=".repeat(60));
console.log("4. TUPLE");
console.log("=".repeat(60));

type Point = [number, number];
const point: Point = [10, 20];

type User = [string, number, boolean];
const user: User = ["John", 30, true];

console.log("Point:", point);
console.log("User:", user);

// Optional elements
type OptionalTuple = [string, number?];
const optional1: OptionalTuple = ["hello"];
const optional2: OptionalTuple = ["hello", 42];

// Rest elements
type StringNumberBooleans = [string, number, ...boolean[]];
const data: StringNumberBooleans = ["hello", 42, true, false, true];

console.log("Optional Tuple:", optional2);
console.log("Rest Elements Tuple:", data);

// ========================================
// 5. INTERFACE
// ========================================

console.log("\n" + "=".repeat(60));
console.log("5. INTERFACE");
console.log("=".repeat(60));

interface Person {
  name: string;
  age: number;
  email?: string; // Optional
  readonly id: number; // Read-only
}

const person: Person = {
  name: "Alice",
  age: 28,
  id: 1
};

interface Student extends Person {
  studentId: string;
  grade: "A" | "B" | "C";
}

const student: Student = {
  name: "Bob",
  age: 20,
  id: 2,
  studentId: "STU123",
  grade: "A"
};

console.log("Person:", person);
console.log("Student:", student);

// Interface với methods
interface Animal {
  name: string;
  makeSound(): void;
  move(distance: number): void;
}

// ========================================
// 6. TYPE
// ========================================

console.log("\n" + "=".repeat(60));
console.log("6. TYPE");
console.log("=".repeat(60));

type UserType = {
  id: number;
  name: string;
  email: string;
};

type Admin = {
  role: "admin" | "moderator";
  permissions: string[];
} & UserType; // Intersection

const admin: Admin = {
  id: 1,
  name: "Charlie",
  email: "charlie@example.com",
  role: "admin",
  permissions: ["read", "write", "delete"]
};

console.log("Admin:", admin);

// Type aliases cho functions
type AddFunc = (a: number, b: number) => number;
const add: AddFunc = (a, b) => a + b;
console.log("Add function:", add(5, 3));

// ========================================
// 7. ENUM
// ========================================

console.log("\n" + "=".repeat(60));
console.log("7. ENUM");
console.log("=".repeat(60));

// String enum
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

const dir: Direction2 = Direction2.Up;
console.log("Direction enum:", dir);

// Numeric enum
enum HttpStatus2 {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  ServerError = 500
}

const status2: HttpStatus2 = HttpStatus2.Ok;
console.log("HTTP Status enum:", status2);

// Enum with const
const enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
}

const color: Color = Color.Red;

// ========================================
// 8. GENERIC
// ========================================

console.log("\n" + "=".repeat(60));
console.log("8. GENERIC");
console.log("=".repeat(60));

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");

console.log("Identity number:", num);
console.log("Identity string:", str);

// Generic với constraint
function logLength<T extends { length: number }>(arg: T): T {
  console.log("Length:", arg.length);
  return arg;
}

logLength([1, 2, 3]);
logLength("hello");

// Generic array
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const numArray = getArray<number>([1, 2, 3]);
const strArray = getArray<string>(["a", "b", "c"]);

// Generic class
class Container<T> {
  private contents: T[] = [];

  add(item: T): void {
    this.contents.push(item);
  }

  get(): T[] {
    return this.contents;
  }
}

const numberContainer = new Container<number>();
numberContainer.add(1);
numberContainer.add(2);
console.log("Number Container:", numberContainer.get());

const stringContainer = new Container<string>();
stringContainer.add("hello");
stringContainer.add("world");
console.log("String Container:", stringContainer.get());

// Generic interface
interface Repository<T> {
  findById(id: number): T | undefined;
  save(item: T): void;
  delete(id: number): void;
}

// ========================================
// 9. CLASS
// ========================================

console.log("\n" + "=".repeat(60));
console.log("9. CLASS");
console.log("=".repeat(60));

class Vehicle {
  private engineType: string;
  protected manufacturer: string;
  public model: string;

  constructor(engineType: string, manufacturer: string, model: string) {
    this.engineType = engineType;
    this.manufacturer = manufacturer;
    this.model = model;
  }

  public getInfo(): string {
    return `${this.manufacturer} ${this.model}`;
  }

  protected getEngineInfo(): string {
    return `Engine: ${this.engineType}`;
  }
}

// Inheritance
class Car extends Vehicle {
  private doors: number;

  constructor(engineType: string, manufacturer: string, model: string, doors: number) {
    super(engineType, manufacturer, model);
    this.doors = doors;
  }

  public getFullInfo(): string {
    return `${this.getInfo()} - ${this.doors} doors - ${this.getEngineInfo()}`;
  }
}

const car = new Car("V8", "Toyota", "Camry", 4);
console.log("Car info:", car.getFullInfo());

// Abstract class
abstract class Shape {
  abstract area(): number;

  describe(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
circle.describe();

// Static members
class MathHelper {
  static PI: number = Math.PI;

  static calculateCircleArea(radius: number): number {
    return MathHelper.PI * radius ** 2;
  }
}

console.log("Static method result:", MathHelper.calculateCircleArea(3));

// Getter and Setter
class Temperature {
  private celsius: number = 0;

  get fahrenheit(): number {
    return (this.celsius * 9) / 5 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = ((value - 32) * 5) / 9;
  }

  get celsiusValue(): number {
    return this.celsius;
  }
}

const temp = new Temperature();
temp.fahrenheit = 98.6;
console.log("Celsius:", temp.celsiusValue);
console.log("Fahrenheit:", temp.fahrenheit);

// ========================================
// 10. MODIFIER
// ========================================

console.log("\n" + "=".repeat(60));
console.log("10. MODIFIER (public, private, protected, readonly)");
console.log("=".repeat(60));

class BankAccount {
  private balance: number = 0;
  protected accountNumber: string;
  public accountHolder: string;
  readonly id: number;

  constructor(accountHolder: string, accountNumber: string, id: number) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.id = id;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  protected getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("John", "123456", 1);
account.deposit(1000);
console.log("Account holder:", account.accountHolder);

// ========================================
// 11. FUNCTION OVERLOADING
// ========================================

console.log("\n" + "=".repeat(60));
console.log("11. FUNCTION OVERLOADING");
console.log("=".repeat(60));

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return a.toString() + b.toString();
}

console.log("Add numbers:", add(5, 3));
console.log("Add strings:", add("Hello", "World"));

// ========================================
// 12. MAPPED TYPES
// ========================================

console.log("\n" + "=".repeat(60));
console.log("12. MAPPED TYPES");
console.log("=".repeat(60));

// Make all properties optional
type Partial2<T> = {
  [K in keyof T]?: T[K];
};

interface User2 {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial2<User2>;

// Make all properties readonly
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadOnlyUser = ReadOnly<User2>;

// Getters
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

console.log("Mapped types defined");

// ========================================
// 13. CONDITIONAL TYPES
// ========================================

console.log("\n" + "=".repeat(60));
console.log("13. CONDITIONAL TYPES");
console.log("=".repeat(60));

type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<123>; // false

// Flatten type
type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number

console.log("Conditional types defined");

// ========================================
// 14. UTILITY TYPES
// ========================================

console.log("\n" + "=".repeat(60));
console.log("14. UTILITY TYPES");
console.log("=".repeat(60));

// Partial - make all optional
type PartialUser2 = Partial<User2>;

// Required - make all required
type RequiredUser = Required<PartialUser2>;

// Readonly - make all readonly
type ReadonlyUser2 = Readonly<User2>;

// Pick - select specific properties
type UserPreview = Pick<User2, "id" | "name">;

// Omit - exclude specific properties
type UserWithoutId = Omit<User2, "id">;

// Record - create object type
type UserRole = "admin" | "user" | "moderator";
type UserRolePermissions = Record<UserRole, string[]>;

const permissions: UserRolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read"],
  moderator: ["read", "write"]
};

console.log("Permissions:", permissions);

// Exclude, Extract
type T = string | number | boolean;
type U = Exclude<T, boolean>; // string | number
type V = Extract<T, string>; // string

// ReturnType
function getUser(): User2 {
  return { id: 1, name: "Alice", email: "alice@example.com" };
}
type UserType2 = ReturnType<typeof getUser>;

console.log("Utility types defined");

// ========================================
// 15. DECORATOR (experimental)
// ========================================

console.log("\n" + "=".repeat(60));
console.log("15. DECORATOR (experimental)");
console.log("=".repeat(60));

// Note: Decorators require experimentalDecorators in tsconfig.json

// Class decorator
function Logger(target: Function) {
  console.log(`Logged: ${target.name}`);
}

@Logger
class User3 {
  name: string = "John";
}

// Method decorator
function Deprecated(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Warning: ${propertyKey} is deprecated`);
    return originalMethod.apply(this, args);
  };
}

class MyClass {
  @Deprecated
  oldMethod() {
    console.log("This is an old method");
  }
}

const instance = new MyClass();
// instance.oldMethod(); // Will show deprecation warning

// ========================================
// 16. ASYNC/AWAIT
// ========================================

console.log("\n" + "=".repeat(60));
console.log("16. ASYNC/AWAIT");
console.log("=".repeat(60));

async function fetchUserData(userId: number): Promise<User2> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "Bob", email: "bob@example.com" });
    }, 500);
  });
}

async function main() {
  try {
    const user = await fetchUserData(1);
    console.log("Fetched user:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

// main();

// Promise<T>
function loadData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

// ========================================
// 17. GENERICS WITH CONSTRAINTS
// ========================================

console.log("\n" + "=".repeat(60));
console.log("17. GENERICS WITH CONSTRAINTS");
console.log("=".repeat(60));

// Generic with extends
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person3: Person = {
  name: "Charlie",
  age: 35,
  id: 1
};

const name = getProperty(person3, "name"); // Type-safe
console.log("Property:", name);

// Generic with default type
function createArray<T = string>(length: number, value: T): T[] {
  return new Array(length).fill(value);
}

const strArray2 = createArray(3, "hello");
const numArray2 = createArray<number>(3, 42);

console.log("String array:", strArray2);
console.log("Number array:", numArray2);

// ========================================
// 18. INTERSECTION & UNION
// ========================================

console.log("\n" + "=".repeat(60));
console.log("18. INTERSECTION & UNION");
console.log("=".repeat(60));

// Union
type ResponseData = User2 | string;

function handleResponse(data: ResponseData) {
  if (typeof data === "string") {
    console.log("String response:", data);
  } else {
    console.log("User response:", data.name);
  }
}

handleResponse("Success");
handleResponse({ id: 1, name: "David", email: "david@example.com" });

// Intersection
type AdminUser = User2 & { role: string };

const adminUser: AdminUser = {
  id: 1,
  name: "Eve",
  email: "eve@example.com",
  role: "admin"
};

console.log("Admin user:", adminUser);

// ========================================
// 19. KEYOF & TYPEOF
// ========================================

console.log("\n" + "=".repeat(60));
console.log("19. KEYOF & TYPEOF");
console.log("=".repeat(60));

type UserKeys = keyof User2; // "id" | "name" | "email"

function getUserValue(user: User2, key: UserKeys): any {
  return user[key];
}

// typeof
const obj = { x: 10, y: 20 };
type ObjType = typeof obj; // { x: number; y: number }

console.log("User keys defined");

// ========================================
// 20. NAMESPACES & MODULES
// ========================================

console.log("\n" + "=".repeat(60));
console.log("20. NAMESPACES & MODULES");
console.log("=".repeat(60));

namespace MathUtils {
  export const PI = Math.PI;

  export function calculateArea(radius: number): number {
    return PI * radius ** 2;
  }
}

console.log("Circle area:", MathUtils.calculateArea(5));

// ========================================
// 21. ADVANCED PATTERNS
// ========================================

console.log("\n" + "=".repeat(60));
console.log("21. ADVANCED PATTERNS");
console.log("=".repeat(60));

// Factory pattern
interface IAnimal {
  makeSound(): void;
}

class Dog2 implements IAnimal {
  makeSound(): void {
    console.log("Woof!");
  }
}

class Cat2 implements IAnimal {
  makeSound(): void {
    console.log("Meow!");
  }
}

class AnimalFactory {
  static createAnimal(type: "dog" | "cat"): IAnimal {
    if (type === "dog") {
      return new Dog2();
    } else {
      return new Cat2();
    }
  }
}

const dog = AnimalFactory.createAnimal("dog");
dog.makeSound();

// Singleton pattern
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

console.log("\n" + "=".repeat(60));
console.log("ALL TYPESCRIPT FUNDAMENTALS COVERED!");
console.log("=".repeat(60));
