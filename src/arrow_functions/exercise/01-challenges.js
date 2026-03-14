/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: ARROW FUNCTIONS
 * Topic: Syntax, This Binding, and Best Practices
 * 
 * Instructions:
 * 1. Complete each function following the requirements.
 * 2. Decide whether to use an Arrow Function or a Regular Function based on the context.
 * 3. Write JSDoc comments for every function.
 * 4. Run with 'node src/arrow-functions/exercise/01-challenges.js'
 */

// --- EXERCISE 1 ---
// Create an arrow function named 'add' that takes two parameters (a, b).
// It should return the sum using implicit return (no curly braces).
// Test: console.log(add(5, 3));


// --- EXERCISE 2 ---
// Create an arrow function named 'double' that takes one parameter (n).
// It should return n multiplied by 2.
// Use implicit return and omit parentheses for the single parameter.
// Test: console.log(double(10));


// --- EXERCISE 3 ---
// Create an arrow function named 'getFullName' that takes 'firstName' and 'lastName'.
// It should return a template literal: "firstName lastName".
// Include JSDoc documentation.
// Test: console.log(getFullName("John", "Doe"));


// --- EXERCISE 4 ---
// Create an array named 'numbers' with values [1, 2, 3, 4, 5].
// Use the '.map()' method with an arrow function to create a new array
// where each number is multiplied by 2.
// Store the result in 'doubledNumbers' and print it.


// --- EXERCISE 5 ---
// Create an array named 'users' with objects: [{ name: "Ana" }, { name: "Bob" }].
// Use '.filter()' with an arrow function to return only users whose name starts with "A".
// Store the result in 'filteredUsers' and print it.


// --- EXERCISE 6 ---
// Create an object named 'calculator' with a property 'value' set to 0.
// Add a method 'add' using a REGULAR function (not arrow) that takes 'num'.
// The method should add 'num' to 'this.value' and return the new value.
// Test: console.log(calculator.add(5));


// --- EXERCISE 7 ---
// Create an object named 'timer' with a property 'seconds' set to 0.
// Add a method 'start' using a REGULAR function.
// Inside 'start', use setTimeout with an ARROW function to increment 'this.seconds' after 1 second.
// Print 'this.seconds' inside the timeout to verify 'this' is bound correctly.
// Test: timer.start();


// --- EXERCISE 8 ---
// Create an arrow function named 'logArguments' that uses rest parameters (...args).
// It should print the array of arguments passed to it.
// Do NOT use the 'arguments' keyword (it does not work in arrows).
// Test: logArguments(1, 2, 3);


// --- EXERCISE 9 ---
// Create an arrow function named 'getUser' that returns an object literal.
// The object should have properties: 'name' and 'age'.
// IMPORTANT: Use parentheses around the object literal to ensure correct syntax.
// Test: console.log(getUser());


// --- EXERCISE 10 ---
// Create an object named 'user' with a property 'name' and a method 'greet'.
// Define 'greet' as an ARROW function.
// Inside 'greet', try to access 'this.name'.
// Print the result and observe if it works or returns undefined.
// Test: user.greet();


// --- EXERCISE 11 ---
// Create a function named 'createMultiplier' that takes 'factor'.
// It should return an arrow function that takes 'number' and returns 'number * factor'.
// Use closure to maintain the 'factor' value.
// Test: const double = createMultiplier(2); console.log(double(5));


// --- EXERCISE 12 ---
// Create an array 'values' with [10, 20, 30].
// Use '.reduce()' with an arrow function to calculate the sum.
// The arrow function should take 'accumulator' and 'currentValue'.
// Test: console.log(sum);


// --- EXERCISE 13 ---
// Create a constructor function named 'Person' using REGULAR function syntax.
// It should take 'name' and assign it to 'this.name'.
// Do NOT use an arrow function (it will fail with 'new').
// Test: const p = new Person("Carlos"); console.log(p.name);


// --- EXERCISE 14 ---
// Create an object 'api' with a method 'fetchData'.
// 'fetchData' should be a REGULAR function.
// Inside it, simulate an async callback using setTimeout with an ARROW function.
// The arrow function should access 'this' to log a status message.
// Test: api.fetchData();


// --- EXERCISE 15 ---
// Create a function named 'processData' that takes an array of numbers.
// Use chain methods (.map, .filter, .reduce) with arrow functions to:
// 1. Double each number.
// 2. Keep only numbers greater than 10.
// 3. Sum the remaining numbers.
// Return the final sum.
// Include JSDoc documentation.
// Test: console.log(processData([1, 5, 10]));