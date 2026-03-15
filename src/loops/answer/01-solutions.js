/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: LOOPS (SOLUTIONS)
 * Topic: for, for...of, while - Iteration Patterns
 * 
 * Senior Insights:
 * - Use for...of for simple array iteration (cleanest syntax).
 * - Use for when you need the index or performance.
 * - Use while for condition-based looping (unknown iterations).
 * - Avoid for...in on arrays (iterates property names as strings).
 * - Avoid .forEach() for async operations (doesn't support await properly).
 */

// --- EXERCISE 1 ---
/**
 * Prints numbers from 0 to max using a traditional for loop.
 * 
 * @param {number} max - The maximum number to print (inclusive).
 * @returns {Array<number>} Array of all printed numbers.
 * @throws {TypeError} Throws if max is not a number.
 */
function printNumbers(max) {
    if (typeof max !== "number") {
        throw new TypeError("Max must be a number.");
    }
    
    const result = [];
    for (let i = 0; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(printNumbers(5)); // Output: [0, 1, 2, 3, 4, 5]

// --- EXERCISE 2 ---
/**
 * Calculates the sum of all elements using for...of loop.
 * 
 * @param {Array<number>} numbers - Array of numbers to sum.
 * @returns {number} The total sum.
 * @throws {TypeError} Throws if input is not an array.
 */
function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    
    let total = 0;
    for (let num of numbers) {
        total = total + num;
    }
    return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// --- EXERCISE 3 ---
/**
 * Finds the index of a target value using traditional for loop.
 * 
 * @param {Array} array - Array to search.
 * @param {*} target - Value to find.
 * @returns {number} Index if found, -1 if not found.
 */
function findIndex(array, target) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([10, 20, 30], 20)); // Output: 1
console.log(findIndex([10, 20, 30], 99)); // Output: -1

// --- EXERCISE 4 ---
/**
 * Filters array to return only odd numbers using for...of.
 * 
 * @param {Array<number>} numbers - Array of numbers to filter.
 * @returns {Array<number>} Array containing only odd numbers.
 */
function filterOdd(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    
    const oddNumbers = [];
    for (let num of numbers) {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }
    return oddNumbers;
}

console.log(filterOdd([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]

// --- EXERCISE 5 ---
/**
 * Counts down from start to 0 using while loop.
 * 
 * @param {number} start - The starting number.
 * @returns {Array<number>} Array of countdown numbers.
 */
function countDown(start) {
    if (typeof start !== "number") {
        throw new TypeError("Start must be a number.");
    }
    
    const result = [];
    let current = start;
    while (current >= 0) {
        result.push(current);
        current--;
    }
    return result;
}

console.log(countDown(5)); // Output: [5, 4, 3, 2, 1, 0]

// --- EXERCISE 6 ---
/**
 * Finds the first even number using for...of with break.
 * 
 * @param {Array<number>} numbers - Array of numbers to search.
 * @returns {number|null} First even number or null if not found.
 */
function findFirstEven(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            return num; // Early exit with break implied by return
        }
    }
    return null;
}

console.log(findFirstEven([1, 3, 5, 8, 10])); // Output: 8
console.log(findFirstEven([1, 3, 5])); // Output: null

// --- EXERCISE 7 ---
/**
 * Skips negative numbers using for...of with continue.
 * 
 * @param {Array<number>} numbers - Array of numbers to filter.
 * @returns {Array<number>} Array of non-negative numbers.
 */
function skipNegatives(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    
    const nonNegative = [];
    for (let num of numbers) {
        if (num < 0) {
            continue; // Skip this iteration
        }
        nonNegative.push(num);
    }
    return nonNegative;
}

console.log(skipNegatives([1, -2, 3, -4, 5])); // Output: [1, 3, 5]

// --- EXERCISE 8 ---
/**
 * Multiplies each element by its index using traditional for loop.
 * 
 * @param {Array<number>} numbers - Array of numbers to transform.
 * @returns {Array<number>} New array with multiplied values.
 */
function multiplyByIndex(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * i);
    }
    return result;
}

console.log(multiplyByIndex([10, 20, 30])); // Output: [0, 20, 60]

// --- EXERCISE 9 ---
/**
 * Simulates retrying an operation using while loop.
 * 
 * @param {number} maxRetries - Maximum number of retry attempts.
 * @param {number} successThreshold - Attempt number at which success occurs.
 * @returns {number} Number of attempts it took to succeed.
 */
function retryOperation(maxRetries, successThreshold) {
    if (typeof maxRetries !== "number" || typeof successThreshold !== "number") {
        throw new TypeError("Parameters must be numbers.");
    }
    
    let attempts = 0;
    let success = false;
    
    while (attempts < maxRetries && !success) {
        attempts++;
        if (attempts >= successThreshold) {
            success = true;
        }
    }
    
    return attempts;
}

console.log(retryOperation(5, 3)); // Output: 3
console.log(retryOperation(5, 10)); // Output: 5 (never succeeded)

// --- EXERCISE 10 ---
/**
 * Extracts all keys from an object using for...in loop.
 * 
 * @param {Object} obj - Object to extract keys from.
 * @returns {Array<string>} Array of object keys.
 * @throws {TypeError} Throws if input is not an object.
 */
function getObjectKeys(obj) {
    if (typeof obj !== "object" || obj === null) {
        throw new TypeError("Input must be an object.");
    }
    
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

console.log(getObjectKeys({ name: "Carlos", age: 30 })); // Output: ["name", "age"]

// --- EXERCISE 11 ---
/**
 * Demonstrates the problem with for...in on arrays.
 * 
 * @param {Array} array - Array to iterate.
 * @returns {Array<Object>} Array showing index types (strings not numbers).
 * @warning This demonstrates why for...in is problematic for arrays.
 */
function warnAboutForIn(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }
    
    const results = [];
    for (let index in array) {
        results.push({
            index: index,
            type: typeof index, // Will be "string", not "number"
            value: array[index]
        });
    }
    return results;
}

console.log(warnAboutForIn([1, 2, 3]));
// Output: [{ index: "0", type: "string", value: 1 }, ...]
// WARNING: Index is a string, not a number!

// --- EXERCISE 12 ---
/**
 * Creates a reversed copy of an array using traditional for loop.
 * 
 * @param {Array} array - Array to reverse.
 * @returns {Array} New reversed array (original unchanged).
 */
function reverseArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }
    
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log([1, 2, 3, 4, 5]); // Original unchanged

// --- EXERCISE 13 ---
/**
 * Finds two numbers that add up to target using nested for loops.
 * 
 * @param {Array<number>} numbers - Array of numbers to search.
 * @param {number} target - Target sum to find.
 * @returns {Array<number>|null} Pair of numbers or null if not found.
 */
function findPairWithSum(numbers, target) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Numbers must be an array.");
    }
    if (typeof target !== "number") {
        throw new TypeError("Target must be a number.");
    }
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [numbers[i], numbers[j]];
            }
        }
    }
    return null;
}

console.log(findPairWithSum([1, 2, 3, 4, 5], 7)); // Output: [2, 5] or [3, 4]
console.log(findPairWithSum([1, 2, 3], 10)); // Output: null

// --- EXERCISE 14 ---
/**
 * Processes values sequentially using for...of (supports async/await).
 * 
 * @param {Array<number>} values - Array of values to process.
 * @returns {Promise<Array>} Promise resolving to processed results.
 */
async function processWithDelay(values) {
    if (!Array.isArray(values)) {
        throw new TypeError("Input must be an array.");
    }
    
    const results = [];
    for (let value of values) {
        // Simulate async operation with delay
        await new Promise(resolve => setTimeout(resolve, 100));
        results.push(value * 2);
    }
    return results;
}

// Test (uncomment to run):
// processWithDelay([1, 2, 3]).then(console.log); // Output: [2, 4, 6]

// --- EXERCISE 15 ---
/**
 * Calculates sum using three different loop types for comparison.
 * 
 * @param {Array<number>} numbers - Array of numbers to sum.
 * @returns {Object} Object with results from each loop type.
 */
function analyzeLoopPerformance(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    
    // Traditional for loop
    let sumFor = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumFor = sumFor + numbers[i];
    }
    
    // for...of loop
    let sumForOf = 0;
    for (let num of numbers) {
        sumForOf = sumForOf + num;
    }
    
    // while loop
    let sumWhile = 0;
    let i = 0;
    while (i < numbers.length) {
        sumWhile = sumWhile + numbers[i];
        i++;
    }
    
    return {
        forLoop: sumFor,
        forOfLoop: sumForOf,
        whileLoop: sumWhile,
        allMatch: sumFor === sumForOf && sumForOf === sumWhile
    };
}

console.log(analyzeLoopPerformance([1, 2, 3, 4, 5]));
// Output: { forLoop: 15, forOfLoop: 15, whileLoop: 15, allMatch: true }