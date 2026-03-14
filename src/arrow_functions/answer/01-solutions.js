/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: ARROW FUNCTIONS (SOLUTIONS)
 * Topic: Syntax, This Binding, and Best Practices
 * 
 * Senior Insights:
 * - Use arrows for callbacks to preserve lexical 'this'.
 * - Use regular functions for object methods that need dynamic 'this'.
 * - Never use arrows for constructors.
 * - Use parentheses () when returning object literals implicitly.
 */

// --- EXERCISE 1 ---
/**
 * Adds two numbers using implicit return.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum.
 */
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// --- EXERCISE 2 ---
/**
 * Doubles a number using single parameter syntax.
 * @param {number} n - The number to double.
 * @returns {number} The doubled value.
 */
const doubleNumber = n => n * 2;
console.log(doubleNumber(10)); // Output: 20

// --- EXERCISE 3 ---
/**
 * Combines first and last name.
 * @param {string} firstName - First name.
 * @param {string} lastName - Last name.
 * @returns {string} Full name.
 */
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName("John", "Doe")); // Output: "John Doe"

// --- EXERCISE 4 ---
const numbers = [1, 2, 3, 4, 5];
// Arrow function preserves scope and is concise for array methods
const doubledNumbers = numbers.map(n => n * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// --- EXERCISE 5 ---
const users = [{ name: "Ana" }, { name: "Bob" }, { name: "Alice" }];
const filteredUsers = users.filter(user => user.name.startsWith("A"));
console.log(filteredUsers); // Output: [{ name: "Ana" }, { name: "Alice" }]

// --- EXERCISE 6 ---
const calculator = {
    value: 0,
    // Regular function needed so 'this' refers to 'calculator'
    add: function(num) {
        this.value = this.value + num;
        return this.value;
    }
};
console.log(calculator.add(5)); // Output: 5
console.log(calculator.add(5)); // Output: 10

// --- EXERCISE 7 ---
const timer = {
    seconds: 0,
    // Regular function for method definition
    start: function() {
        // Arrow function preserves 'this' from start() scope
        setTimeout(() => {
            this.seconds++;
            console.log(`Seconds: ${this.seconds}`); // Output: Seconds: 1
        }, 1000);
    }
};
// timer.start(); // Uncomment to test (wait 1 second)

// --- EXERCISE 8 ---
/**
 * Logs all arguments passed using rest parameters.
 * @param {...any} args - Variable number of arguments.
 */
const logArguments = (...args) => {
    console.log(args); // Output: [1, 2, 3]
};
logArguments(1, 2, 3);

// --- EXERCISE 9 ---
/**
 * Returns a user object. Parentheses required for implicit object return.
 * @returns {Object} User object.
 */
const getUser = () => ({ name: "Carlos", age: 30 });
console.log(getUser()); // Output: { name: "Carlos", age: 30 }

// --- EXERCISE 10 ---
const user = {
    name: "Carlos",
    // Arrow function fails here because 'this' is lexical (global), not dynamic
    greet: () => {
        console.log(`Hello ${this.name}`); // Output: Hello undefined
    }
};
user.greet();

// --- EXERCISE 11 ---
/**
 * Creates a multiplier function using closure.
 * @param {number} factor - The multiplication factor.
 * @returns {Function} Function that multiplies by factor.
 */
const createMultiplier = (factor) => (number) => number * factor;
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// --- EXERCISE 12 ---
const values = [10, 20, 30];
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 60

// --- EXERCISE 13 ---
// Regular function required for constructor (needs 'prototype' and dynamic 'this')
function Person(name) {
    this.name = name;
}
const p = new Person("Carlos");
console.log(p.name); // Output: "Carlos"

// --- EXERCISE 14 ---
const api = {
    status: "idle",
    // Regular function for method
    fetchData: function() {
        this.status = "loading";
        // Arrow function preserves 'this' to access api.status
        setTimeout(() => {
            this.status = "complete";
            console.log(`Status: ${this.status}`); // Output: Status: complete
        }, 1000);
    }
};
// api.fetchData(); // Uncomment to test

// --- EXERCISE 15 ---
/**
 * Processes an array of numbers through a pipeline.
 * @param {Array<number>} numbers - Input array.
 * @returns {number} The final calculated sum.
 */
const processData = (numbers) => {
    return numbers
        .map(n => n * 2)          // Double
        .filter(n => n > 10)      // Keep > 10
        .reduce((acc, curr) => acc + curr, 0); // Sum
};
console.log(processData([1, 5, 10])); 
// Logic: [2, 10, 20] -> [20] -> 20
// Output: 20