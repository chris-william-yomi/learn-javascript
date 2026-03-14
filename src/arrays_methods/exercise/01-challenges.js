/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: ARRAY METHODS
 * Topic: map, filter, find - Functional Programming Patterns
 * 
 * Instructions:
 * 1. Complete each function following the requirements.
 * 2. Use map, filter, or find as specified in each exercise.
 * 3. Write JSDoc comments for every function.
 * 4. Do not mutate the original arrays.
 * 5. Run with 'node src/array-methods/exercise/01-challenges.js'
 */

// --- EXERCISE 1 ---
// Create a function named 'doubleNumbers' that takes an array of numbers.
// Use .map() to return a new array with each number multiplied by 2.
// Do not mutate the original array.
// Include JSDoc documentation.
// Test: console.log(doubleNumbers([1, 2, 3]));


// --- EXERCISE 2 ---
// Create a function named 'getNames' that takes an array of user objects.
// Each user has a 'name' property.
// Use .map() to return an array of just the names (strings).
// Include JSDoc documentation.
// Test: const users = [{ name: "Ana" }, { name: "Bob" }]; console.log(getNames(users));


// --- EXERCISE 3 ---
// Create a function named 'filterEven' that takes an array of numbers.
// Use .filter() to return only the even numbers.
// Include JSDoc documentation.
// Test: console.log(filterEven([1, 2, 3, 4, 5, 6]));


// --- EXERCISE 4 ---
// Create a function named 'filterActiveUsers' that takes an array of user objects.
// Each user has an 'isActive' boolean property.
// Use .filter() to return only users where isActive is true.
// Include JSDoc documentation.
// Test: const users = [{ name: "A", isActive: true }, { name: "B", isActive: false }];


// --- EXERCISE 5 ---
// Create a function named 'findUserById' that takes an array of users and an id number.
// Use .find() to return the user object with the matching id.
// Return null if no user is found.
// Include JSDoc with @throws documentation.
// Test: const users = [{ id: 1, name: "Ana" }]; console.log(findUserById(users, 1));


// --- EXERCISE 6 ---
// Create a function named 'findFirstAdult' that takes an array of user objects.
// Each user has an 'age' property.
// Use .find() to return the first user who is 18 or older.
// Return null if no adult is found.
// Include JSDoc documentation.
// Test: const users = [{ name: "A", age: 15 }, { name: "B", age: 20 }];


// --- EXERCISE 7 ---
// Create a function named 'calculatePricesWithTax' that takes an array of prices and a taxRate.
// Use .map() to return a new array with tax applied to each price.
// Round each result to 2 decimal places.
// Include JSDoc documentation.
// Test: console.log(calculatePricesWithTax([10, 20, 30], 0.1));


// --- EXERCISE 8 ---
// Create a function named 'filterByMinPrice' that takes an array of products and a minPrice.
// Each product has a 'price' property.
// Use .filter() to return only products with price >= minPrice.
// Include JSDoc documentation.
// Test: const products = [{ name: "A", price: 10 }, { name: "B", price: 50 }];


// --- EXERCISE 9 ---
// Create a function named 'findProductByName' that takes an array of products and a name string.
// Use .find() to return the first product with a matching name (case-insensitive).
// Return null if not found.
// Include JSDoc documentation.
// Test: const products = [{ name: "Laptop" }, { name: "Mouse" }];


// --- EXERCISE 10 ---
// Create a function named 'transformAndFilter' that takes an array of numbers.
// Chain .map() and .filter() to:
// 1. Double each number
// 2. Keep only numbers greater than 10
// Return the resulting array.
// Include JSDoc documentation.
// Test: console.log(transformAndFilter([1, 5, 10]));


// --- EXERCISE 11 ---
// Create a function named 'getActiveUserNames' that takes an array of user objects.
// Chain .filter() and .map() to:
// 1. Keep only active users (isActive === true)
// 2. Return an array of their names
// Include JSDoc documentation.
// Test: const users = [{ name: "A", isActive: true }, { name: "B", isActive: false }];


// --- EXERCISE 12 ---
// Create a function named 'findAndTransform' that takes an array of products and a minPrice.
// Chain .filter() and .map() to:
// 1. Keep only products with price >= minPrice
// 2. Return an array of product names only
// Include JSDoc documentation.
// Test: const products = [{ name: "A", price: 10 }, { name: "B", price: 50 }];


// --- EXERCISE 13 ---
// Create a function named 'safeFind' that takes an array, a predicate function, and a defaultValue.
// Use .find() to search the array.
// Return the defaultValue if .find() returns undefined.
// Include JSDoc documentation.
// Test: const nums = [1, 2, 3]; console.log(safeFind(nums, n => n > 10, "Not Found"));


// --- EXERCISE 14 ---
// Create a function named 'processOrders' that takes an array of order objects.
// Each order has: 'total' (number), 'status' (string), 'customerId' (number).
// Chain methods to:
// 1. Filter only completed orders (status === "completed")
// 2. Map to extract only the total values
// 3. Return the array of totals
// Include JSDoc documentation.
// Test: const orders = [{ total: 100, status: "completed" }, { total: 50, status: "pending" }];


// --- EXERCISE 15 ---
// Create a function named 'analyzeUserData' that takes an array of user objects.
// Each user has: 'name', 'age', 'isActive'.
// Return an object with three properties:
// - 'allNames': array of all names (use map)
// - 'adults': array of users 18 or older (use filter)
// - 'firstActive': the first active user (use find)
// Include complete JSDoc documentation.
// Test: const users = [{ name: "A", age: 20, isActive: true }, { name: "B", age: 15, isActive: false }];