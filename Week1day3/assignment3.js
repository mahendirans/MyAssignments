// ============================================
// PROBLEM 1: Length of Last Word (Simple Method)
// ============================================
function lengthOfLastWord(s) {
  // 1. Split the string into an array of words
  let words = s.split(" ");
  
  // 2. Find the last word in the array
  let lastWord = words[words.length - 1];
  
  // 3. Calculate the length of this word
  let length = lastWord.length;
  
  return length;
}

// ============================================
// PROBLEM 2: Length of Last Word (Trimmed Method)
// ============================================
function lengthOfLastWordTrimmed(s) {
  // 1. Trim the String (remove leading and trailing spaces)
  let trimmedString = s.trim();
  
  // 2. Split the String into Words
  let words = trimmedString.split(" ");
  
  // 3. Identify the Last Word
  let lastWord = words[words.length - 1];
  
  // 4. Calculate the Length of the Last Word
  let length = lastWord.length;
  
  // 5. Return the length
  return length;
}

// ============================================
// PROBLEM 2 ALTERNATIVE: Using Regular Expressions
// ============================================
function lengthOfLastWordRegex(s) {
  // Use regex to find all words
  let words = s.trim().split(/\s+/);
  
  return words[words.length - 1].length;
}

// ============================================
// PROBLEM 3: Check if Two Strings are Anagrams
// ============================================
function isAnagram(s1, s2) {
  // 1. Remove spaces and convert all letters to the same case
  let str1 = s1.replace(/\s+/g, "").toLowerCase();
  let str2 = s2.replace(/\s+/g, "").toLowerCase();
  
  // If lengths don't match, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  
  // 2. Sort the Characters
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");
  
  // 3. Compare Sorted Strings
  // 4. Return the Result
  return sorted1 === sorted2;
}

// ============================================
// ALTERNATIVE: Check Anagrams Using Character Frequency
// ============================================
function isAnagramFrequency(s1, s2) {
  // 1. Remove spaces and convert to lowercase
  let str1 = s1.replace(/\s+/g, "").toLowerCase();
  let str2 = s2.replace(/\s+/g, "").toLowerCase();
  
  // If lengths don't match, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }
  
  // 2. Create frequency maps
  let freq1 = {};
  let freq2 = {};
  
  // Count character frequency in first string
  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }
  
  // Count character frequency in second string
  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }
  
  // 3. Compare frequency maps
  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) {
      return false;
    }
  }
  
  return true;
}


//if-else program
function launchbrowser(browsername)
{
    //var browsername="webkit"
    if (browsername=="chrome")
    {
        console.log("Launching Chrome");
    }
    else
    {
        console.log("Launching Other Browser", browsername);
    }
}
launchbrowser("chrome");
launchbrowser("firefox");
//launchbrowser();

//if-else program
function launchbrowser(browsername)
{
    //var browsername="webkit"
    if (browsername=="chrome")
    {
        console.log("Launching Chrome");
    }
    else
    {
        console.log("Launching Other Browser", browsername);
    }
}
launchbrowser("chrome");
launchbrowser("firefox");
//launchbrowser();






//switch program
function runTests(testType)
{

switch(testType)
{
case 1:
    console.log("Running Smoke Tests")
    break;
case 2:
    console.log("Running Sanity Tests") 
    break;
case 3:
    console.log("Running Regression Tesets")        
    break;
default:
    console.log("Running Default Smoke Test")   
}
}
runTests(2);
runTests();