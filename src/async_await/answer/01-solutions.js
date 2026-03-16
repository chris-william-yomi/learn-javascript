/**
 * JAVASCRIPT LEARNING JOURNEY - THEME: ASYNC/AWAIT (SOLUTIONS)
 * Topic: Waiting for things to finish (Automation Focus)
 * 
 * Senior Insights:
 * - Always use await for actions that take time (page loads, clicks, API calls).
 * - Add timeout protection to prevent tests from hanging forever.
 * - Use try/catch to handle errors gracefully; use finally for cleanup.
 * - Choose sequential (await one-by-one) vs parallel (Promise.all) based on dependencies.
 */

// Helper: Create a promise that resolves after X milliseconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- EXERCISE 1 ---
/**
 * Waits 1 second, then logs a message.
 * 
 * @param {string} message - The message to log after waiting.
 * @returns {Promise<void>}
 */
async function waitAndLog(message) {
    await delay(1000);
    console.log(message);
}

// Test: await waitAndLog("Hello after 1 second");

// --- EXERCISE 2 ---
/**
 * Simulates fetching user data after a short delay.
 * 
 * @param {number} userId - The ID of the user to fetch.
 * @returns {Promise<Object>} User object with id and name.
 */
async function fetchUserData(userId) {
    await delay(500);
    return { id: userId, name: "User" };
}

// Test: const user = await fetchUserData(123); console.log(user);

// --- EXERCISE 3 ---
/**
 * Loads three items one after another (sequential).
 * 
 * @returns {Promise<Array>} Array of loaded values in order.
 */
async function loadThreeThings() {
    const first = await (async () => { await delay(300); return "Item 1"; })();
    const second = await (async () => { await delay(300); return "Item 2"; })();
    const third = await (async () => { await delay(300); return "Item 3"; })();
    return [first, second, third];
}

// Test: const results = await loadThreeThings(); console.log(results);
// Output after ~900ms: ["Item 1", "Item 2", "Item 3"]

// --- EXERCISE 4 ---
/**
 * Loads three items at the same time (parallel).
 * 
 * @returns {Promise<Array>} Array of loaded values.
 */
async function loadThreeThingsFast() {
    const [first, second, third] = await Promise.all([
        (async () => { await delay(300); return "Item 1"; })(),
        (async () => { await delay(300); return "Item 2"; })(),
        (async () => { await delay(300); return "Item 3"; })()
    ]);
    return [first, second, third];
}

// Test: const results = await loadThreeThingsFast(); console.log(results);
// Output after ~300ms: ["Item 1", "Item 2", "Item 3"]

// --- EXERCISE 5 ---
/**
 * Safely fetches data with timeout protection.
 * 
 * @param {string} url - The URL to fetch from.
 * @param {number} timeoutMs - Maximum milliseconds to wait.
 * @returns {Promise<any>} The fetched data.
 * @throws {Error} If fetch fails or times out.
 */
async function safeFetch(url, timeoutMs) {
    const fetchPromise = new Promise((resolve, reject) => {
        if (url.includes("fail")) {
            setTimeout(() => reject(new Error("Fetch failed")), 200);
        } else {
            setTimeout(() => resolve({ data: "Success" }), 200);
        }
    });
    
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), timeoutMs);
    });
    
    return Promise.race([fetchPromise, timeoutPromise]);
}

// Test: await safeFetch("https://api.example.com", 5000);

// --- EXERCISE 6 ---
/**
 * Retries a failing async function up to maxRetries times.
 * 
 * @param {Function} asyncFn - The async function to retry.
 * @param {number} maxRetries - Maximum number of retry attempts.
 * @returns {Promise<any>} The result if successful.
 * @throws {Error} If all retries fail.
 */
async function retryOnFailure(asyncFn, maxRetries) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await asyncFn();
        } catch (error) {
            lastError = error;
            await delay(100); // Wait before retrying
        }
    }
    
    throw new Error(`Failed after ${maxRetries} attempts: ${lastError.message}`);
}

// Test: await retryOnFailure(() => fetchUserData(1), 3);

// --- EXERCISE 7 ---
/**
 * Simulates waiting for a button to be ready, then clicking it.
 * 
 * @returns {Promise<boolean>} True when click is complete.
 */
async function clickWithWait() {
    // Wait for button to be ready
    await delay(200);
    // Simulate click action
    await delay(100);
    return true;
}

// Test: const clicked = await clickWithWait(); console.log(clicked);

// --- EXERCISE 8 ---
/**
 * Runs a complete test scenario with error handling.
 * 
 * @returns {Promise<Object>} Result object with success status and optional error.
 */
async function runTestScenario() {
    try {
        // Step 1: Load page
        await delay(300);
        // Step 2: Fill form
        await delay(200);
        // Step 3: Submit
        await delay(400);
        // Step 4: Verify result
        await delay(100);
        
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Test: const result = await runTestScenario(); console.log(result);

// --- EXERCISE 9 ---
/**
 * Waits for an element to appear, checking every 100ms.
 * 
 * @param {string} selector - The CSS selector to wait for.
 * @param {number} maxWaitMs - Maximum milliseconds to wait.
 * @returns {Promise<boolean>} True if found, false if timeout.
 */
async function waitForElement(selector, maxWaitMs) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWaitMs) {
        // Simulate checking: element appears after 500ms for this demo
        if (Date.now() - startTime >= 500 && selector === "#my-button") {
            return true;
        }
        await delay(100); // Check every 100ms
    }
    
    return false; // Timeout
}

// Test: const found = await waitForElement("#my-button", 2000); console.log(found);

// --- EXERCISE 10 ---
/**
 * Sets up test data in parallel (independent operations).
 * 
 * @returns {Promise<Object>} Object with user, product, and order data.
 */
async function parallelSetup() {
    const [user, product, order] = await Promise.all([
        (async () => { await delay(200); return { id: 1, type: "user" }; })(),
        (async () => { await delay(200); return { id: 2, type: "product" }; })(),
        (async () => { await delay(200); return { id: 3, type: "order" }; })()
    ]);
    
    return { user, product, order };
}

// Test: const data = await parallelSetup(); console.log(data);
// Completes in ~200ms (all run at same time)

// --- EXERCISE 11 ---
/**
 * Sets up test data in sequence (dependent operations).
 * 
 * @returns {Promise<Object>} Object with user, product, and order data.
 */
async function sequentialSetup() {
    // Step 1: Create user
    const user = await (async () => { await delay(200); return { id: 1, type: "user" }; })();
    
    // Step 2: Create product (needs user)
    const product = await (async () => { 
        await delay(200); 
        return { id: 2, type: "product", userId: user.id }; 
    })();
    
    // Step 3: Create order (needs both)
    const order = await (async () => { 
        await delay(200); 
        return { id: 3, type: "order", userId: user.id, productId: product.id }; 
    })();
    
    return { user, product, order };
}

// Test: const data = await sequentialSetup(); console.log(data);
// Completes in ~600ms (one after another)

// --- EXERCISE 12 ---
/**
 * Runs test logic with guaranteed cleanup.
 * 
 * @returns {Promise<Object>} Result showing test and cleanup both ran.
 */
async function cleanupAfterTest() {
    let testRan = false;
    let cleanupRan = false;
    
    try {
        // Test logic
        await delay(100);
        testRan = true;
    } finally {
        // Cleanup ALWAYS runs
        await delay(50);
        cleanupRan = true;
    }
    
    return { testRan, cleanupRan };
}

// Test: const result = await cleanupAfterTest(); console.log(result);

// --- EXERCISE 13 ---
/**
 * Tries primary URL, falls back to backup if primary fails.
 * 
 * @param {string} primaryUrl - The main URL to try first.
 * @param {string} backupUrl - The fallback URL if primary fails.
 * @returns {Promise<any>} Data from whichever URL succeeds.
 * @throws {Error} If both URLs fail.
 */
async function fetchWithFallback(primaryUrl, backupUrl) {
    try {
        return await safeFetch(primaryUrl, 3000);
    } catch (primaryError) {
        console.warn(`Primary failed: ${primaryError.message}, trying backup...`);
        return await safeFetch(backupUrl, 3000);
    }
}

// Test: const data = await fetchWithFallback("https://fail.com", "https://backup.com");

// --- EXERCISE 14 ---
/**
 * Measures how long an async function takes to run.
 * 
 * @param {Function} asyncFn - The async function to measure.
 * @returns {Promise<Object>} Object with result and duration in milliseconds.
 */
async function measureExecutionTime(asyncFn) {
    const start = Date.now();
    const result = await asyncFn();
    const end = Date.now();
    
    return {
        result,
        durationMs: end - start
    };
}

// Test: const info = await measureExecutionTime(() => waitAndLog("test")); console.log(info);

// --- EXERCISE 15 ---
/**
 * Complete automation test template following best practices.
 * 
 * @returns {Promise<Object>} Test result with pass/fail status and message.
 */
async function automationTestTemplate() {
    let page;
    
    try {
        // Setup: Create simulated page object
        page = { loaded: false, clicked: false, verified: false };
        
        // Step 1: Go to page (with timeout)
        await Promise.race([
            (async () => { await delay(300); page.loaded = true; })(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Page load timeout")), 5000))
        ]);
        
        // Step 2: Click button (with timeout)
        await Promise.race([
            (async () => { await delay(200); page.clicked = true; })(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Click timeout")), 3000))
        ]);
        
        // Step 3: Verify text (with timeout)
        await Promise.race([
            (async () => { await delay(100); page.verified = true; })(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Verify timeout")), 2000))
        ]);
        
        return { passed: true, message: "All steps completed successfully" };
        
    } catch (error) {
        // Optional: Take screenshot on error (simulated)
        console.error("Test failed, would capture screenshot here");
        return { passed: false, message: `Test failed: ${error.message}` };
        
    } finally {
        // Cleanup: Always close page if it was created
        if (page) {
            await delay(50); // Simulate cleanup
            console.log("Cleanup completed");
        }
    }
}

// Test: const result = await automationTestTemplate(); console.log(result);