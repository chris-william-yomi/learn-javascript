/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: OBJECTS (SOLUTIONS)
 * Topic: Object Engineering, Memory, and Structure
 * 
 * Senior Insights:
 * - Objects are references. Assigning b = a does not copy data.
 * - Objects compare by identity (memory address), not content.
 * - Use bracket notation for dynamic keys or special characters.
 */

// --- EXERCISE 1 ---
const user = {
    name: "Carlos",
    age: 30,
    isActive: true
};
console.log(user);

// --- EXERCISE 2 ---
console.log(user.name);

// --- EXERCISE 3 ---
user.age = user.age + 5;
console.log(user.age);

// --- EXERCISE 4 ---
user.email = "carlos@example.com";
console.log(user);

// --- EXERCISE 5 ---
delete user.isActive;
console.log(user);

// --- EXERCISE 6 ---
const product = {
    name: "Laptop",
    details: {
        price: 1000,
        stock: 5
    }
};
console.log(product);

// --- EXERCISE 7 ---
console.log(product.details.price);

// --- EXERCISE 8 ---
let keyName = "name";
console.log(user[keyName]); // Bracket notation for dynamic access

// --- EXERCISE 9 ---
const config = {
    "debug-mode": true
};
console.log(config["debug-mode"]); // Dot notation would fail here

// --- EXERCISE 10 ---
const original = { value: 10 };
const copy = original; // Copies the reference, not the data
copy.value = 20;
console.log(original.value); // Output: 20 (Original changed!)

// --- EXERCISE 11 ---
const objA = { id: 1 };
const objB = { id: 1 };
console.log(objA === objB); // Output: false (Different memory addresses)

// --- EXERCISE 12 ---
const cart = {
    items: []
};
cart.items.push("Book");
console.log(cart);

// --- EXERCISE 13 ---
const settings = { theme: "dark" };

function changeTheme(obj) {
    obj.theme = "light"; // Modifies the original object reference
}

changeTheme(settings);
console.log(settings); // Output: { theme: "light" }

// --- EXERCISE 14 ---
const profile = { id: 1, name: "Carlos", role: "admin" };
console.log("role" in profile); // Output: true

// --- EXERCISE 15 ---
const data = { count: 0 };

function increment(obj) {
    obj.count = obj.count + 1;
}

increment(data);
increment(data);
increment(data);
console.log(data.count); // Output: 3