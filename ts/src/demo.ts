
// const student: { name: string; age: number; major: string; school: string } = {
//   name: "Huy Neymar",
//   age: 23,
//   major: "Computer Science",
//   school: "University of Technology",
// }

import { log } from "console";

// console.log(student);

// function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>()

//     for (let i = 0; i < nums.length; i++) {
//         const com = target - nums[i];

//         if (map.has(com)) {
//             return [map.get(com)!, i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]

// function indetify<T>(arg: T): T {
//     return arg;
// }

// console.log(indetify<string>("Hello"));
// console.log(indetify<number>(42));
// console.log(indetify<boolean>(true));

class Person {
    name: string;
    age: number;

    constructor(name: string, age: string) {
        this.name = name;
        this.age = parseInt(age);
    }
}