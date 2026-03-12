/**
 * JAVASCRIPT LEARNING JOURNEY - DAY 2 (SOLUTIONS)
 * Topic: Operators and Comparisons
 * 
 * Senior Insights:
 * - Always use === for comparisons to avoid type coercion bugs.
 * - Be aware that + behaves differently for strings vs numbers.
 * - Modulus (%) is powerful for cycles and even/odd checks.
 */

// --- EXERCISE 1: Basic Addition ---
const price = 100;
const tax = 20;
let total = price + tax;
console.log(total); // Output: 120

// --- EXERCISE 2: Subtraction (Change) ---
const cash = 50;
const cost = 35;
let change = cash - cost;
console.log(change); // Output: 15

// --- EXERCISE 3: Multiplication (Area) ---
const width = 10;
const height = 5;
let area = width * height;
console.log(area); // Output: 50

// --- EXERCISE 4: Division (Average) ---
const score1 = 80;
const score2 = 90;
let average = (score1 + score2) / 2;
console.log(average); // Output: 85

// --- EXERCISE 5: Modulus (Even or Odd) ---
const number = 7;
let isEven = number % 2 === 0; 
// 7 % 2 is 1. 1 === 0 is false.
console.log(isEven); // Output: false

// --- EXERCISE 6: Modulus (Remainder) ---
const items = 10;
const boxSize = 3;
let remainder = items % boxSize;
// 10 divided by 3 is 3, with 1 left over.
console.log(remainder); // Output: 1

// --- EXERCISE 7: The Concatenation Trap ---
const scoreString = "100";
const bonusNumber = 50;
let totalScore = scoreString + bonusNumber;
console.log(totalScore); // Output: "10050" (String concatenation!)
console.log(typeof totalScore); // Output: "string"

// --- EXERCISE 8: Greater Than ---
const age = 20;
const legalAge = 18;
let isAdult = age > legalAge;
console.log(isAdult); // Output: true

// --- EXERCISE 9: Less Than or Equal ---
const speed = 100;
const limit = 100;
let isSafe = speed <= limit;
console.log(isSafe); // Output: true (Equal is allowed)

// --- EXERCISE 10: Strict Equality (Number vs String) ---
const inputId = "101";
const databaseId = 101;
let isMatch = inputId === databaseId;
console.log(isMatch); // Output: false (Different types)
// Senior Note: This prevents bugs where "101" accidentally equals 101.

// --- EXERCISE 11: Strict Inequality ---
const status = "active";
const bannedStatus = "banned";
let isAllowed = status !== bannedStatus;
console.log(isAllowed); // Output: true

// --- EXERCISE 12: Loose Equality Warning ---
// Comment: I understand that == converts types automatically, which can hide bugs.
// I will always use === to ensure data integrity.

// --- EXERCISE 13: Access Control Logic ---
const balance = 50;
const itemCost = 100;
let canBuy = balance >= itemCost;
console.log(canBuy); // Output: false (Insufficient funds)

// --- EXERCISE 14: Discount Calculation ---
let finalPrice = 100;
const isMember = true;

if (isMember === true) {
    finalPrice = finalPrice - 10;
}
console.log(finalPrice); // Output: 90

// --- EXERCISE 15: Combined Operators ---
const baseSalary = 1000;
const bonus = 200;
const taxRate = 0.1;
// Order of operations: Parentheses first, then multiplication, then subtraction.
let totalSalary = (baseSalary + bonus) - ((baseSalary + bonus) * taxRate);
console.log(totalSalary); // Output: 1080