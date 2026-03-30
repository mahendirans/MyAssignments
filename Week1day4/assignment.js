// 1. Declare a global variable browser and assign it the value "Chrome"
let browser = "Chrome";

// 2. Create a function named checkBrowserVersion that accepts a callback function
function checkBrowserVersion(callback) {
  // Use setTimeout to simulate a delay (like waiting for data from a server)
  setTimeout(() => {
    // After the delay (2 seconds), invoke the callback function
    // and pass the browser value to it
    callback(browser);
  }, 2000); // 2 second delay
}

// 3. Write a callback function that logs the browser version to the console
function displayBrowserVersion(version) {
  console.log("Browser version using callback: " + version);
}

// 4. Call checkBrowserVersion and pass the callback function to it
checkBrowserVersion(displayBrowserVersion);