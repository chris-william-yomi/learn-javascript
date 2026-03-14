/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: FUNCTIONS (SOLUTIONS)
 * Topic: Professional Function Engineering
 * 
 * Senior Insights:
 * - Always document with JSDoc before writing logic.
 * - Validate inputs at the top (guard clauses).
 * - Return consistent types.
 * - Avoid side effects (don't modify input parameters).
 */

// --- EXERCISE 1 ---
/**
 * Adds two numbers together.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function addNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both parameters must be numbers.");
    }
    return a + b;
}

console.log(addNumbers(5, 3)); // Output: 8

// --- EXERCISE 2 ---
/**
 * Creates a greeting message for a user.
 * 
 * @param {string} [name="Guest"] - The user's name.
 * @returns {string} The greeting message.
 */
function greetUser(name = "Guest") {
    if (typeof name !== "string") {
        throw new TypeError("Name must be a string.");
    }
    return `Hello, ${name}!`;
}

console.log(greetUser("Carlos")); // Output: "Hello, Carlos!"
console.log(greetUser()); // Output: "Hello, Guest!"

// --- EXERCISE 3 ---
/**
 * Checks if a person is an adult based on age.
 * 
 * @param {number} age - The person's age.
 * @returns {boolean} True if 18 or older, false otherwise.
 * @throws {TypeError} Throws if age is not a number.
 * @throws {Error} Throws if age is negative.
 */
function isAdult(age) {
    if (typeof age !== "number") {
        throw new TypeError("Age must be a number.");
    }
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }
    return age >= 18;
}

console.log(isAdult(20)); // Output: true
console.log(isAdult(16)); // Output: false

// --- EXERCISE 4 ---
/**
 * Calculates the area of a rectangle.
 * 
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} The calculated area.
 * @throws {Error} Throws if parameters are invalid.
 */
function calculateArea(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
        throw new TypeError("Width and height must be numbers.");
    }
    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be positive.");
    }
    return width * height;
}

console.log(calculateArea(10, 5)); // Output: 50

// --- EXERCISE 5 ---
/**
 * Returns the first element of an array.
 * 
 * @param {Array} arr - The array to get the first element from.
 * @returns {*} The first element of the array.
 * @throws {TypeError} Throws if parameter is not an array.
 * @throws {Error} Throws if array is empty.
 */
function getFirstElement(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Parameter must be an array.");
    }
    if (arr.length === 0) {
        throw new Error("Array cannot be empty.");
    }
    return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // Output: 1

// --- EXERCISE 6 ---
/**
 * Formats a user's name as "lastName, firstName".
 * 
 * @param {Object} user - The user object with firstName and lastName.
 * @returns {string} The formatted name string.
 * @throws {Error} Throws if required properties are missing.
 */
function formatUserName(user) {
    if (typeof user !== "object" || user === null) {
        throw new TypeError("User must be an object.");
    }
    if (!user.firstName || !user.lastName) {
        throw new Error("User must have firstName and lastName properties.");
    }
    return `${user.lastName}, ${user.firstName}`;
}

console.log(formatUserName({ firstName: "John", lastName: "Doe" })); // Output: "Doe, John"

// --- EXERCISE 7 ---
/**
 * Calculates the final price after applying a discount.
 * 
 * @param {number} price - The original price.
 * @param {number} discountPercent - The discount percentage (0-100).
 * @returns {number} The final price rounded to 2 decimal places.
 * @throws {Error} Throws if parameters are out of valid range.
 */
function calculateDiscount(price, discountPercent) {
    if (typeof price !== "number" || price <= 0) {
        throw new Error("Price must be a positive number.");
    }
    if (typeof discountPercent !== "number" || discountPercent < 0 || discountPercent > 100) {
        throw new Error("Discount percent must be between 0 and 100.");
    }
    const finalPrice = price - (price * discountPercent / 100);
    return Math.round(finalPrice * 100) / 100;
}

console.log(calculateDiscount(100, 20)); // Output: 80

// --- EXERCISE 8 ---
/**
 * Validates if an email string contains required characters.
 * 
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if valid, false otherwise.
 * @throws {TypeError} Throws if email is not a string.
 */
function validateEmail(email) {
    if (typeof email !== "string") {
        throw new TypeError("Email must be a string.");
    }
    if (email.trim().length === 0) {
        return false;
    }
    return email.includes("@") && email.includes(".");
}

console.log(validateEmail("test@example.com")); // Output: true
console.log(validateEmail("invalid")); // Output: false

// --- EXERCISE 9 ---
/**
 * Creates a counter function with private state using closure.
 * 
 * @returns {Function} A function that increments and returns the count.
 */
function createCounter() {
    let count = 0;
    return function() {
        count = count + 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// --- EXERCISE 10 ---
/**
 * Finds a user by ID in an array of users.
 * 
 * @param {Array} users - Array of user objects.
 * @param {number} id - The ID to search for.
 * @returns {Object|null} The user object or null if not found.
 * @throws {TypeError} Throws if inputs are invalid.
 */
function findUserById(users, id) {
    if (!Array.isArray(users)) {
        throw new TypeError("Users must be an array.");
    }
    if (typeof id !== "number") {
        throw new TypeError("ID must be a number.");
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return null;
}

const users = [{ id: 1, name: "Ana" }, { id: 2, name: "Carlos" }];
console.log(findUserById(users, 1)); // Output: { id: 1, name: "Ana" }
console.log(findUserById(users, 99)); // Output: null

// --- EXERCISE 11 ---
/**
 * Merges two objects into a new object without modifying originals.
 * 
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Object} A new merged object.
 */
function mergeObjects(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        throw new TypeError("Both parameters must be objects.");
    }
    // Using spread operator to create new object (no side effects)
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1 }, { b: 2 })); // Output: { a: 1, b: 2 }

// --- EXERCISE 12 ---
/**
 * Calculates the total price of all items in an array.
 * 
 * @param {Array} items - Array of items with price and quantity.
 * @returns {number} The total sum rounded to 2 decimal places.
 * @throws {Error} Throws if items array is invalid.
 */
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError("Items must be an array.");
    }
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        if (typeof items[i].price !== "number" || typeof items[i].quantity !== "number") {
            throw new Error("Each item must have price and quantity as numbers.");
        }
        total = total + (items[i].price * items[i].quantity);
    }
    return Math.round(total * 100) / 100;
}

const items = [{ price: 10, quantity: 2 }, { price: 5, quantity: 3 }];
console.log(calculateTotal(items)); // Output: 35

// --- EXERCISE 13 ---
/**
 * Safely parses a JSON string.
 * 
 * @param {string} jsonString - The JSON string to parse.
 * @returns {Object|null} The parsed object or null on failure.
 */
function safeJSONParse(jsonString) {
    if (typeof jsonString !== "string") {
        return null;
    }
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
}

console.log(safeJSONParse('{"name": "test"}')); // Output: { name: "test" }
console.log(safeJSONParse('invalid')); // Output: null

// --- EXERCISE 14 ---
/**
 * Filters an array to return only active users.
 * 
 * @param {Array} users - Array of user objects with isActive property.
 * @returns {Array} A new array with only active users.
 */
function filterActiveUsers(users) {
    if (!Array.isArray(users)) {
        throw new TypeError("Users must be an array.");
    }
    const activeUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive === true) {
            activeUsers.push(users[i]);
        }
    }
    return activeUsers;
}

const allUsers = [
    { name: "A", isActive: true },
    { name: "B", isActive: false },
    { name: "C", isActive: true }
];
console.log(filterActiveUsers(allUsers)); // Output: [{ name: "A", isActive: true }, { name: "C", isActive: true }]

// --- EXERCISE 15 ---
/**
 * Processes an order and calculates the final total.
 * 
 * @param {Object} order - The order object with items, taxRate, and discount.
 * @returns {number} The final order total rounded to 2 decimal places.
 * @throws {Error} Throws if order structure is invalid.
 */
function processOrder(order) {
    // Input Validation
    if (typeof order !== "object" || order === null) {
        throw new TypeError("Order must be an object.");
    }
    if (!Array.isArray(order.items)) {
        throw new Error("Order must have an items array.");
    }
    if (typeof order.taxRate !== "number" || order.taxRate < 0) {
        throw new Error("Tax rate must be a non-negative number.");
    }
    if (typeof order.discount !== "number" || order.discount < 0) {
        throw new Error("Discount must be a non-negative number.");
    }

    // Calculate subtotal using helper logic
    let subtotal = 0;
    for (let i = 0; i < order.items.length; i++) {
        subtotal = subtotal + (order.items[i].price * order.items[i].quantity);
    }

    // Apply discount
    let afterDiscount = subtotal - order.discount;
    if (afterDiscount < 0) {
        afterDiscount = 0;
    }

    // Apply tax
    let taxAmount = afterDiscount * order.taxRate;
    let finalTotal = afterDiscount + taxAmount;

    return Math.round(finalTotal * 100) / 100;
}

const order = {
    items: [{ price: 50, quantity: 2 }],
    taxRate: 0.1,
    discount: 10
};
console.log(processOrder(order)); // Output: 99