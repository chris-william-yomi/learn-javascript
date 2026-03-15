/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: LOOPS
 * Topic: for, for...of, while - Iteration Patterns
 * 
 * Instructions:
 * 1. Complete each function following the requirements.
 * 2. Choose the appropriate loop type for each scenario.
 * 3. Write JSDoc comments for every function.
 * 4. Do not use .forEach() for these exercises (practice explicit loops).
 * 5. Run with 'node src/loops/exercise/01-challenges.js'
 */

// --- EXERCISE 1 ---
// Create a function named 'printNumbers' that takes a max number.
// Use a traditional 'for' loop to print numbers from 0 to max (inclusive).
// Return an array of all printed numbers.
// Include JSDoc documentation.
// Test: console.log(printNumbers(5));


// --- EXERCISE 2 ---
// Create a function named 'sumArray' that takes an array of numbers.
// Use a 'for...of' loop to calculate the sum of all elements.
// Return the total sum.
// Include JSDoc documentation.
// Test: console.log(sumArray([1, 2, 3, 4, 5]));


// --- EXERCISE 3 ---
// Create a function named 'findIndex' that takes an array and a target value.
// Use a traditional 'for' loop to find the index of the target value.
// Return the index if found, or -1 if not found.
// Include JSDoc documentation.
// Test: console.log(findIndex([10, 20, 30], 20));


// --- EXERCISE 4 ---
// Create a function named 'filterOdd' that takes an array of numbers.
// Use a 'for...of' loop to create a new array containing only odd numbers.
// Do not mutate the original array.
// Include JSDoc documentation.
// Test: console.log(filterOdd([1, 2, 3, 4, 5, 6]));


// --- EXERCISE 5 ---
// Create a function named 'countDown' that takes a starting number.
// Use a 'while' loop to count down from start to 0.
// Return an array of all numbers in the countdown.
// Include JSDoc documentation.
// Test: console.log(countDown(5));


// --- EXERCISE 6 ---
// Create a function named 'findFirstEven' that takes an array of numbers.
// Use a 'for...of' loop with 'break' to find the first even number.
// Return the number if found, or null if not found.
// Include JSDoc documentation.
// Test: console.log(findFirstEven([1, 3, 5, 8, 10]));


// --- EXERCISE 7 ---
// Create a function named 'skipNegatives' that takes an array of numbers.
// Use a 'for...of' loop with 'continue' to skip negative numbers.
// Return an array of only non-negative numbers.
// Include JSDoc documentation.
// Test: console.log(skipNegatives([1, -2, 3, -4, 5]));


// --- EXERCISE 8 ---
// Create a function named 'multiplyByIndex' that takes an array of numbers.
// Use a traditional 'for' loop to multiply each element by its index.
// Return a new array with the results (do not mutate original).
// Include JSDoc documentation.
// Test: console.log(multiplyByIndex([10, 20, 30]));


// --- EXERCISE 9 ---
// Create a function named 'retryOperation' that takes maxRetries and a successThreshold.
// Use a 'while' loop to simulate retrying an operation.
// Return the number of attempts it took to succeed (or maxRetries if never succeeded).
// Include JSDoc documentation.
// Test: console.log(retryOperation(5, 3));


// --- EXERCISE 10 ---
// Create a function named 'getObjectKeys' that takes an object.
// Use a 'for...in' loop to extract all keys from the object.
// Return an array of keys.
// Include JSDoc documentation.
// Test: console.log(getObjectKeys({ name: "Carlos", age: 30 }));


// --- EXERCISE 11 ---
// Create a function named 'warnAboutForIn' that takes an array.
// Use a 'for...in' loop to iterate the array and demonstrate the problem.
// Return an array showing that indices are strings, not numbers.
// Include JSDoc documentation explaining why this is problematic.
// Test: console.log(warnAboutForIn([1, 2, 3]));


// --- EXERCISE 12 ---
// Create a function named 'reverseArray' that takes an array.
// Use a traditional 'for' loop to create a reversed copy of the array.
// Do not use .reverse() method.
// Include JSDoc documentation.
// Test: console.log(reverseArray([1, 2, 3, 4, 5]));


// --- EXERCISE 13 ---
// Create a function named 'findPairWithSum' that takes an array and a target sum.
// Use nested 'for' loops to find two numbers that add up to the target.
// Return the pair as an array [num1, num2] or null if not found.
// Include JSDoc documentation.
// Test: console.log(findPairWithSum([1, 2, 3, 4, 5], 7));


// --- EXERCISE 14 ---
// Create a function named 'processWithDelay' that takes an array of values.
// Use a 'for...of' loop (NOT forEach) to process each value.
// This demonstrates why for...of is better for async operations.
// Return a promise that resolves when all values are processed.
// Include JSDoc documentation.
// Test: await processWithDelay([1, 2, 3]);


// --- EXERCISE 15 ---
// Create a function named 'analyzeLoopPerformance' that takes an array of numbers.
// Use THREE different loops (for, for...of, while) to calculate the sum.
// Return an object with results from each loop type to verify they match.
// Include complete JSDoc documentation.
// Test: console.log(analyzeLoopPerformance([1, 2, 3, 4, 5]));