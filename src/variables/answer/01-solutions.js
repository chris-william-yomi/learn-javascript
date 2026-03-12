/**
 * JAVASCRIPT LEARNING JOURNEY - DAY 1 (SOLUTIONS)
 * Topic: Variables, Data Types, and Naming Conventions
 */

// --- EXERCISE 1: Constant Declaration ---
const projectName = "Portfolio";
console.log(projectName);

// --- EXERCISE 2: Mutable Variable ---
let currentLevel = 1;
console.log(currentLevel);

// --- EXERCISE 3: Boolean Type ---
const isLoggedIn = true; // Correct naming convention
console.log(isLoggedIn);

// --- EXERCISE 4: Type Verification ---
console.log(typeof projectName); // Output: "string"

// --- EXERCISE 5: Math Operation ---
const price = 50;
const tax = 10;
let total = price + tax;
console.log(total); // Output: 60

// --- EXERCISE 6: String Concatenation ---
const firstName = "John";
const lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"

// --- EXERCISE 7: Reassignment ---
currentLevel = 2;
console.log(currentLevel); // Output: 2

// --- EXERCISE 8: The Null Type ---
const emptyValue = null;
console.log(typeof emptyValue); // Output: "object" (Known JS quirk)

// --- EXERCISE 9: Undefined Type ---
let notDefined;
console.log(notDefined); // Output: undefined
console.log(typeof notDefined); // Output: "undefined"

// --- EXERCISE 10: Template Literals ---
console.log(`User: ${firstName} is logged in`);

// --- EXERCISE 11: Naming Convention (camelCase) ---
let dateOfBirth = "01/01/2000";
console.log(dateOfBirth);

// --- EXERCISE 12: Type Trap ---
const numString = "5";
const numNumber = 5;
console.log(numString + numNumber); // Output: "55" (Concatenation)

// --- EXERCISE 13: Constant Protection ---
// projectName = "New Portfolio"; // ❌ TypeError: Assignment to constant variable.

// --- EXERCISE 14: State Update ---
let score = 0;
score = score + 10;
console.log(score); // Output: 10

// --- EXERCISE 15: Full Profile ---
const name = "John";
let age = 25;
const isMember = false;
console.log(`Profile: ${name}, Age: ${age}, Member: ${isMember}`);