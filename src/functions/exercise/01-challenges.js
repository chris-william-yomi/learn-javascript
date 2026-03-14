/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: FUNCTIONS
 * Topic: Professional Function Engineering
 * 
 * Instructions:
 * 1. Complete each function following the 7-Step Process.
 * 2. Write JSDoc comments for every function.
 * 3. Include input validation (guard clauses).
 * 4. Handle errors appropriately.
 * 5. Run with 'node src/functions/exercise/01-challenges.js'
 */

// --- EXERCISE 1 ---
// Create a function named 'addNumbers' that takes two parameters (a, b).
// It should return the sum of both numbers.
// Include JSDoc documentation.
// Test: console.log(addNumbers(5, 3));


// --- EXERCISE 2 ---
// Create a function named 'greetUser' that takes a 'name' parameter.
// It should return a greeting string: "Hello, [name]!"
// If name is not provided, default to "Guest".
// Include JSDoc documentation.
// Test: console.log(greetUser("Carlos"));


// --- EXERCISE 3 ---
// Create a function named 'isAdult' that takes an 'age' parameter.
// It should return true if age is 18 or older, false otherwise.
// Validate that age is a number and is positive.
// Throw an error if validation fails.
// Include JSDoc with @throws documentation.
// Test: console.log(isAdult(20));


// --- EXERCISE 4 ---
// Create a function named 'calculateArea' that takes 'width' and 'height'.
// It should return the area (width * height).
// Validate both parameters are positive numbers.
// Include JSDoc documentation.
// Test: console.log(calculateArea(10, 5));


// --- EXERCISE 5 ---
// Create a function named 'getFirstElement' that takes an array parameter.
// It should return the first element of the array.
// Validate the parameter is an array and is not empty.
// Throw an error if validation fails.
// Include JSDoc documentation.
// Test: console.log(getFirstElement([1, 2, 3]));


// --- EXERCISE 6 ---
// Create a function named 'formatUserName' that takes a 'user' object.
// The object should have 'firstName' and 'lastName' properties.
// Return a formatted string: "lastName, firstName".
// Validate the user object has required properties.
// Include JSDoc documentation.
// Test: console.log(formatUserName({ firstName: "John", lastName: "Doe" }));


// --- EXERCISE 7 ---
// Create a function named 'calculateDiscount' that takes 'price' and 'discountPercent'.
// Return the final price after applying the discount.
// Validate price is positive and discountPercent is between 0 and 100.
// Round the result to 2 decimal places.
// Include JSDoc documentation.
// Test: console.log(calculateDiscount(100, 20));


// --- EXERCISE 8 ---
// Create a function named 'validateEmail' that takes an 'email' string.
// Check if the email contains "@" and "." characters.
// Return true if valid, false if invalid.
// Validate the input is a non-empty string.
// Include JSDoc documentation.
// Test: console.log(validateEmail("test@example.com"));


// --- EXERCISE 9 ---
// Create a function named 'createCounter' that returns a function.
// The returned function should increment and return a count each time it's called.
// Use closure to maintain the count state privately.
// Include JSDoc documentation.
// Test: const counter = createCounter(); console.log(counter()); console.log(counter());


// --- EXERCISE 10 ---
// Create a function named 'findUserById' that takes 'users' (array) and 'id' (number).
// Return the user object that matches the id, or null if not found.
// Validate inputs (users is array, id is number).
// Include JSDoc documentation.
// Test: const users = [{ id: 1, name: "Ana" }]; console.log(findUserById(users, 1));


// --- EXERCISE 11 ---
// Create a function named 'mergeObjects' that takes two objects as parameters.
// Return a new object that combines properties from both.
// Do not modify the original objects (no side effects).
// Include JSDoc documentation.
// Test: console.log(mergeObjects({ a: 1 }, { b: 2 }));


// --- EXERCISE 12 ---
// Create a function named 'calculateTotal' that takes an 'items' array.
// Each item has 'price' and 'quantity' properties.
// Return the total sum of all items (price * quantity for each).
// Validate the items array structure.
// Include JSDoc documentation.
// Test: const items = [{ price: 10, quantity: 2 }]; console.log(calculateTotal(items));


// --- EXERCISE 13 ---
// Create a function named 'safeJSONParse' that takes a 'jsonString' parameter.
// Use try-catch to parse the string safely.
// Return the parsed object on success, or null on failure.
// Include JSDoc with @throws documentation.
// Test: console.log(safeJSONParse('{"name": "test"}'));


// --- EXERCISE 14 ---
// Create a function named 'filterActiveUsers' that takes a 'users' array.
// Each user has an 'isActive' boolean property.
// Return a new array containing only active users.
// Do not modify the original array (no side effects).
// Include JSDoc documentation.
// Test: const users = [{ name: "A", isActive: true }, { name: "B", isActive: false }];


// --- EXERCISE 15 ---
// Create a function named 'processOrder' that takes an 'order' object.
// The order has 'items' (array), 'taxRate' (number), and 'discount' (number).
// Calculate the final total using helper functions for each step.
// Validate all inputs thoroughly.
// Include complete JSDoc documentation.
// Test: const order = { items: [{ price: 50, quantity: 2 }], taxRate: 0.1, discount: 10 };