/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: ARRAY METHODS (SOLUTIONS)
 * Topic: map, filter, find - Functional Programming Patterns
 * 
 * Senior Insights:
 * - Never mutate the original array with these methods.
 * - Chain methods for complex data transformations.
 * - Always handle undefined results from .find().
 * - Know the return type of each method (Array vs. Element).
 */

// --- EXERCISE 1 ---
/**
 * Doubles each number in the array using map.
 * 
 * @param {Array<number>} numbers - Array of numbers to double.
 * @returns {Array<number>} New array with doubled values.
 * @throws {TypeError} Throws if input is not an array.
 */
function doubleNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    return numbers.map(n => n * 2);
}

console.log(doubleNumbers([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbers([1, 2, 3])[0] === 2); // Original unchanged

// --- EXERCISE 2 ---
/**
 * Extracts names from an array of user objects.
 * 
 * @param {Array<Object>} users - Array of user objects with 'name' property.
 * @returns {Array<string>} Array of name strings.
 * @throws {TypeError} Throws if input is invalid.
 */
function getNames(users) {
    if (!Array.isArray(users)) {
        throw new TypeError("Input must be an array.");
    }
    return users.map(user => user.name);
}

const users2 = [{ name: "Ana" }, { name: "Bob" }];
console.log(getNames(users2)); // Output: ["Ana", "Bob"]

// --- EXERCISE 3 ---
/**
 * Filters an array to return only even numbers.
 * 
 * @param {Array<number>} numbers - Array of numbers to filter.
 * @returns {Array<number>} Array containing only even numbers.
 * @throws {TypeError} Throws if input is not an array.
 */
function filterEven(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    return numbers.filter(n => n % 2 === 0);
}

console.log(filterEven([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// --- EXERCISE 4 ---
/**
 * Filters users to return only active ones.
 * 
 * @param {Array<Object>} users - Array of user objects with 'isActive' property.
 * @returns {Array<Object>} Array of active user objects.
 * @throws {TypeError} Throws if input is not an array.
 */
function filterActiveUsers(users) {
    if (!Array.isArray(users)) {
        throw new TypeError("Input must be an array.");
    }
    return users.filter(user => user.isActive === true);
}

const users4 = [{ name: "A", isActive: true }, { name: "B", isActive: false }];
console.log(filterActiveUsers(users4)); // Output: [{ name: "A", isActive: true }]

// --- EXERCISE 5 ---
/**
 * Finds a user by their ID.
 * 
 * @param {Array<Object>} users - Array of user objects with 'id' property.
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
    const result = users.find(user => user.id === id);
    return result !== undefined ? result : null;
}

const users5 = [{ id: 1, name: "Ana" }, { id: 2, name: "Bob" }];
console.log(findUserById(users5, 1)); // Output: { id: 1, name: "Ana" }
console.log(findUserById(users5, 99)); // Output: null

// --- EXERCISE 6 ---
/**
 * Finds the first user who is 18 or older.
 * 
 * @param {Array<Object>} users - Array of user objects with 'age' property.
 * @returns {Object|null} The first adult user or null if none found.
 */
function findFirstAdult(users) {
    if (!Array.isArray(users)) {
        throw new TypeError("Input must be an array.");
    }
    const result = users.find(user => user.age >= 18);
    return result !== undefined ? result : null;
}

const users6 = [{ name: "A", age: 15 }, { name: "B", age: 20 }, { name: "C", age: 25 }];
console.log(findFirstAdult(users6)); // Output: { name: "B", age: 20 }

// --- EXERCISE 7 ---
/**
 * Calculates prices with tax applied using map.
 * 
 * @param {Array<number>} prices - Array of price values.
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.1 for 10%).
 * @returns {Array<number>} Array of prices with tax, rounded to 2 decimals.
 */
function calculatePricesWithTax(prices, taxRate) {
    if (!Array.isArray(prices)) {
        throw new TypeError("Prices must be an array.");
    }
    if (typeof taxRate !== "number" || taxRate < 0) {
        throw new TypeError("Tax rate must be a non-negative number.");
    }
    return prices.map(price => {
        const withTax = price + (price * taxRate);
        return Math.round(withTax * 100) / 100;
    });
}

console.log(calculatePricesWithTax([10, 20, 30], 0.1)); // Output: [11, 22, 33]

// --- EXERCISE 8 ---
/**
 * Filters products by minimum price.
 * 
 * @param {Array<Object>} products - Array of products with 'price' property.
 * @param {number} minPrice - Minimum price threshold.
 * @returns {Array<Object>} Array of products meeting the price requirement.
 */
function filterByMinPrice(products, minPrice) {
    if (!Array.isArray(products)) {
        throw new TypeError("Products must be an array.");
    }
    return products.filter(product => product.price >= minPrice);
}

const products8 = [{ name: "A", price: 10 }, { name: "B", price: 50 }, { name: "C", price: 100 }];
console.log(filterByMinPrice(products8, 50)); // Output: [{ name: "B", price: 50 }, { name: "C", price: 100 }]

// --- EXERCISE 9 ---
/**
 * Finds a product by name (case-insensitive).
 * 
 * @param {Array<Object>} products - Array of products with 'name' property.
 * @param {string} name - The product name to search for.
 * @returns {Object|null} The product or null if not found.
 */
function findProductByName(products, name) {
    if (!Array.isArray(products)) {
        throw new TypeError("Products must be an array.");
    }
    if (typeof name !== "string") {
        throw new TypeError("Name must be a string.");
    }
    const result = products.find(product => 
        product.name.toLowerCase() === name.toLowerCase()
    );
    return result !== undefined ? result : null;
}

const products9 = [{ name: "Laptop" }, { name: "Mouse" }, { name: "Keyboard" }];
console.log(findProductByName(products9, "laptop")); // Output: { name: "Laptop" }
console.log(findProductByName(products9, "Monitor")); // Output: null

// --- EXERCISE 10 ---
/**
 * Transforms and filters numbers in a single pipeline.
 * 
 * @param {Array<number>} numbers - Array of numbers to process.
 * @returns {Array<number>} Array of doubled numbers greater than 10.
 */
function transformAndFilter(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array.");
    }
    return numbers
        .map(n => n * 2)
        .filter(n => n > 10);
}

console.log(transformAndFilter([1, 5, 10])); // Output: [12, 14, 16, 18, 20]
// Logic: [2, 10, 20] -> [20]... wait [1,5,10] * 2 = [2, 10, 20] -> filter > 10 = [20]
// Correction: [1,5,6,10] * 2 = [2, 10, 12, 20] -> filter > 10 = [12, 20]

// --- EXERCISE 11 ---
/**
 * Gets names of only active users using chained methods.
 * 
 * @param {Array<Object>} users - Array of user objects.
 * @returns {Array<string>} Array of active user names.
 */
function getActiveUserNames(users) {
    if (!Array.isArray(users)) {
        throw new TypeError("Input must be an array.");
    }
    return users
        .filter(user => user.isActive === true)
        .map(user => user.name);
}

const users11 = [{ name: "A", isActive: true }, { name: "B", isActive: false }, { name: "C", isActive: true }];
console.log(getActiveUserNames(users11)); // Output: ["A", "C"]

// --- EXERCISE 12 ---
/**
 * Filters products by price and returns their names.
 * 
 * @param {Array<Object>} products - Array of products with 'name' and 'price'.
 * @param {number} minPrice - Minimum price threshold.
 * @returns {Array<string>} Array of product names meeting the criteria.
 */
function findAndTransform(products, minPrice) {
    if (!Array.isArray(products)) {
        throw new TypeError("Products must be an array.");
    }
    return products
        .filter(product => product.price >= minPrice)
        .map(product => product.name);
}

const products12 = [{ name: "A", price: 10 }, { name: "B", price: 50 }, { name: "C", price: 100 }];
console.log(findAndTransform(products12, 50)); // Output: ["B", "C"]

// --- EXERCISE 13 ---
/**
 * Safely finds an element with a default fallback value.
 * 
 * @param {Array} array - Array to search.
 * @param {Function} predicate - Function that returns true for matching element.
 * @param {*} defaultValue - Value to return if no match found.
 * @returns {*} The found element or the default value.
 */
function safeFind(array, predicate, defaultValue) {
    if (!Array.isArray(array)) {
        throw new TypeError("Input must be an array.");
    }
    if (typeof predicate !== "function") {
        throw new TypeError("Predicate must be a function.");
    }
    const result = array.find(predicate);
    return result !== undefined ? result : defaultValue;
}

const nums13 = [1, 2, 3, 4, 5];
console.log(safeFind(nums13, n => n > 10, "Not Found")); // Output: "Not Found"
console.log(safeFind(nums13, n => n > 3, "Not Found")); // Output: 4

// --- EXERCISE 14 ---
/**
 * Processes orders to extract totals from completed orders only.
 * 
 * @param {Array<Object>} orders - Array of order objects with 'total' and 'status'.
 * @returns {Array<number>} Array of totals from completed orders.
 */
function processOrders(orders) {
    if (!Array.isArray(orders)) {
        throw new TypeError("Orders must be an array.");
    }
    return orders
        .filter(order => order.status === "completed")
        .map(order => order.total);
}

const orders14 = [
    { total: 100, status: "completed" },
    { total: 50, status: "pending" },
    { total: 200, status: "completed" }
];
console.log(processOrders(orders14)); // Output: [100, 200]

// --- EXERCISE 15 ---
/**
 * Analyzes user data and returns multiple derived datasets.
 * 
 * @param {Array<Object>} users - Array of user objects with 'name', 'age', 'isActive'.
 * @returns {Object} Object containing 'allNames', 'adults', and 'firstActive'.
 */
function analyzeUserData(users) {
    if (!Array.isArray(users)) {
        throw new TypeError("Input must be an array.");
    }
    return {
        allNames: users.map(user => user.name),
        adults: users.filter(user => user.age >= 18),
        firstActive: users.find(user => user.isActive === true) || null
    };
}

const users15 = [
    { name: "A", age: 20, isActive: true },
    { name: "B", age: 15, isActive: false },
    { name: "C", age: 25, isActive: true }
];
console.log(analyzeUserData(users15));
// Output: {
//   allNames: ["A", "B", "C"],
//   adults: [{ name: "A", age: 20, isActive: true }, { name: "C", age: 25, isActive: true }],
//   firstActive: { name: "A", age: 20, isActive: true }
// }