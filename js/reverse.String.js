// function reverseString(str) {
//   // Check if the input is a string
//   if (typeof str !== 'string') {
//     return 'Input must be a string';
//   }

//   // Split the string into an array of characters, reverse it, and join it back into a string
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("world")); // Output: "dlrow"


// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data fetched successfully');
//     }, 1000);
//     setTimeout(() => {
//       reject('Error fetching data');
//     }, 1000);
//   });
// }

// async function fetchDataAsync() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
