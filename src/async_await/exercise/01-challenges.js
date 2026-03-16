/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: ASYNC/AWAIT
 * Topic: Waiting for things to finish (Automation Focus)
 * 
 * Instructions:
 * 1. Complete each function following the requirements.
 * 2. Use async/await syntax for all asynchronous operations.
 * 3. Always add timeout protection where appropriate.
 * 4. Use try/catch for error handling.
 * 5. Run with 'node src/async-await/exercise/01-challenges.js'
 */

// --- EXERCISE 1 ---
// Create an async function named 'waitAndLog' that takes a message string.
// Wait for 1 second using setTimeout wrapped in a Promise.
// Then print the message to the console.
// Include JSDoc documentation.
// Test: await waitAndLog("Hello after 1 second");


// --- EXERCISE 2 ---
// Create an async function named 'fetchUserData' that takes a userId number.
// Simulate fetching data by waiting 500ms, then return an object { id: userId, name: "User" }.
// Use await to wait for the simulated fetch.
// Include JSDoc documentation.
// Test: const user = await fetchUserData(123); console.log(user);


// --- EXERCISE 3 ---
// Create an async function named 'loadThreeThings' that loads three items sequentially.
// Each item takes 300ms to "load" (simulate with setTimeout + Promise).
// Return an array with all three loaded values in order.
// Use await for each load (one after another, not at the same time).
// Include JSDoc documentation.
// Test: const results = await loadThreeThings(); console.log(results);


// --- EXERCISE 4 ---
// Create an async function named 'loadThreeThingsFast' that loads three items in parallel.
// Each item takes 300ms to "load".
// Use Promise.all to wait for all three at the same time.
// Return an array with all three loaded values.
// Include JSDoc documentation.
// Test: const results = await loadThreeThingsFast(); console.log(results);


// --- EXERCISE 5 ---
// Create an async function named 'safeFetch' that takes a url string and a timeoutMs number.
// Simulate a fetch that might fail: if url includes "fail", reject after 200ms.
// Add timeout protection: if the fetch takes longer than timeoutMs, reject with "Timeout".
// Return the result if successful.
// Include JSDoc documentation.
// Test: await safeFetch("https://api.example.com", 5000);


// --- EXERCISE 6 ---
// Create an async function named 'retryOnFailure' that takes an async function and maxRetries.
// Try to run the function. If it fails, wait 100ms and try again.
// Return the result if successful, or throw error after maxRetries attempts.
// Include JSDoc documentation.
// Test: await retryOnFailure(() => fetchUserData(1), 3);


// --- EXERCISE 7 ---
// Create an async function named 'clickWithWait' that simulates clicking a button.
// First wait for the button to be "ready" (simulate 200ms wait).
// Then simulate the click action (another 100ms wait).
// Return true when complete.
// Include JSDoc documentation.
// Test: const clicked = await clickWithWait(); console.log(clicked);


// --- EXERCISE 8 ---
// Create an async function named 'runTestScenario' that runs a full test flow.
// Steps: 1) Load page (300ms), 2) Fill form (200ms), 3) Submit (400ms), 4) Verify result (100ms).
// Use try/catch to handle any step failing.
// Return { success: true } if all steps pass, or { success: false, error: message } if any fail.
// Include JSDoc documentation.
// Test: const result = await runTestScenario(); console.log(result);


// --- EXERCISE 9 ---
// Create an async function named 'waitForElement' that takes a selector and maxWaitMs.
// Simulate checking for an element every 100ms until it appears or time runs out.
// Return true if element found, false if timeout.
// Include JSDoc documentation.
// Test: const found = await waitForElement("#my-button", 2000); console.log(found);


// --- EXERCISE 10 ---
// Create an async function named 'parallelSetup' that prepares test data.
// Create user, product, and order data in parallel (they do not depend on each other).
// Each "creation" takes 200ms to simulate.
// Return an object with all three created items.
// Include JSDoc documentation.
// Test: const data = await parallelSetup(); console.log(data);


// --- EXERCISE 11 ---
// Create an async function named 'sequentialSetup' that prepares test data.
// Create user first (200ms), then product depends on user (200ms), then order depends on both (200ms).
// Use await one-by-one (not parallel) because each step needs the previous result.
// Return an object with all three created items.
// Include JSDoc documentation.
// Test: const data = await sequentialSetup(); console.log(data);


// --- EXERCISE 12 ---
// Create an async function named 'cleanupAfterTest' that always runs cleanup.
// Use try/finally: try to run test logic (simulate with 100ms wait).
// In finally block, always run cleanup (simulate with 50ms wait) whether test passed or failed.
// Return { testRan: true, cleanupRan: true }.
// Include JSDoc documentation.
// Test: const result = await cleanupAfterTest(); console.log(result);


// --- EXERCISE 13 ---
// Create an async function named 'fetchWithFallback' that tries a primary URL first.
// If primary fails or times out (use safeFetch from Exercise 5), try a backup URL.
// Return data from whichever succeeds, or throw error if both fail.
// Include JSDoc documentation.
// Test: const data = await fetchWithFallback("https://fail.com", "https://backup.com");


// --- EXERCISE 14 ---
// Create an async function named 'measureExecutionTime' that takes an async function.
// Record start time, run the function with await, record end time.
// Return { result: returnValue, durationMs: timeTaken }.
// Include JSDoc documentation.
// Test: const info = await measureExecutionTime(() => waitAndLog("test")); console.log(info);


// --- EXERCISE 15 ---
// Create an async function named 'automationTestTemplate' that follows the complete pattern.
// Structure: async function + try/catch + await actions + timeouts + cleanup in finally.
// Simulate: goto page, click button, verify text, take screenshot on error.
// Return { passed: boolean, message: string }.
// Include complete JSDoc documentation.
// Test: const result = await automationTestTemplate(); console.log(result);