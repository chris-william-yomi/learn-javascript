/**
 * JAVASCRIPT LEARNING JOURNEY - DAY 3 (SOLUTIONS)
 * Topic: Arrays
 */

// --- EXERCISE 1 ---
const colors = ["Red", "Green", "Blue"];
console.log(colors);

// --- EXERCISE 2 ---
const firstColor = colors[0];
console.log(firstColor);

// --- EXERCISE 3 ---
console.log(colors[1]);

// --- EXERCISE 4 ---
console.log(colors.length);

// --- EXERCISE 5 ---
const lastColor = colors[colors.length - 1];
console.log(lastColor);

// --- EXERCISE 6 ---
colors.push("Yellow");
console.log(colors);

// --- EXERCISE 7 ---
console.log(colors.length);

// --- EXERCISE 8 ---
colors[1] = "Purple";
console.log(colors);

// --- EXERCISE 9 ---
let scores = [10, 20, 30];
console.log(scores);

// --- EXERCISE 10 ---
let sum = scores[0] + scores[scores.length - 1];
console.log(sum);

// --- EXERCISE 11 ---
const copyColors = colors.slice(0, 2);
console.log(copyColors);

// --- EXERCISE 12 ---
copyColors.push("White");
console.log(colors);
console.log(copyColors);

// --- EXERCISE 13 ---
let index = 10;
if (index < colors.length) {
    console.log(colors[index]);
} else {
    console.log("Index out of bounds");
}

// --- EXERCISE 14 ---
let cart = [];
cart.push("Laptop");
cart.push("Mouse");
cart.push("Charger");
console.log(cart.length);
console.log(cart);

// --- EXERCISE 15 ---
let prices = [10, 20, 30];
prices.push(40);
let total = prices[0] + prices[1] + prices[2] + prices[3];
console.log(total);