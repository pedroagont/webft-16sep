// PROBLEM:
// Write a node program that takes in an unlimited number of command line arguments
// and prints out the sum of them.
// If any argument is not a whole number, skip it.
// Do not support negative numbers though.

// GROUP NOTES
// Access command line arguments (slice arguments?)
// Iterate through the command line args array
// Convert the numbers properly
// Validate/condition to skip/filter items
// Stretch: Create a function that takes an argument

// console.log('Hello from index! 👋');

// console.log('Command line args:', process.argv);

// for loop c syntax
// for (let i = 0; i < process.argv.length; i++) {
//   console.log(process.argv[i]);
// }

// for of js syntax (used for arrays)
// for (const item of process.argv) {
//   console.log(item);
// }

// for in js syntax (used for objects)
// for (const index in process.argv) {
//   console.log(index);
// }

// forEach
// process.argv.forEach(item => {
//     console.log(item)
// })

const sumItemsInArray = (array) => {
  let total = 0;

  for (const item of array) {
    const converted = Number(item);

    if (converted > 0 && Number.isInteger(converted)) {
      // total = total + item;
      total += converted;
    }
  }

  return total;
};

const result = sumItemsInArray(process.argv);
console.log('Result:', result);
