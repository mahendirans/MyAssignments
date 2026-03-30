
// JavaScript function that accepts a string, reverses it, and checks if the reversed string is a palindrome,

function reverseString(str) {

  // 1. Convert the input into characters using split("")
  let characters = str.split("");
  
  // 2. Loop them in reverse direction
  let reversedString = "";
  for (let i = characters.length - 1; i >= 0; i--) {
    // 3. Concatenate the string
    reversedString += characters[i];
  }
  
  // 4. Print the new string
  console.log("  Original String: " + str);
  console.log("  Reversed String: " + reversedString);
  
  // Return the reversed string
  return reversedString;
}

//  ALTERNATIVE: Reverse using Built-in Methods

function reverseStringShort(str) {
  return str.split("").reverse().join("");
}

// Check if String is a Palindrome

function isPalindrome(str) {
  // Reverse the string using our reverseString function
  let reversedStr = reverseStringShort(str);
  
  // 1. Check if the reverse string and original string are the same
  // 2. Return true if same, else return false
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}







let reversed="";
//let sample="dad"
function reverseString(str) {   
    let reverstr=str.split("");
    //console.log(reverstr);
   
    for (let i=reverstr.length-1;i>=0;i--)
    {
       reversed=reversed+reverstr[i];
    }
    console.log(reversed);
}
reverseString("radar");

function isPalindrome(input)
{
    if (input===reversed)
    {
        console.log("The string is a palindrome");
    }
    else{
        console.log("The string is not a palindrome");
    }
}
isPalindrome("radar");

