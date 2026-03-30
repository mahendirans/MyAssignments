// Determine if a number is positive, negative, or zero

function determineNumberType(number) {
  // 1. Create a function named `checkNumberType` that takes a number as a parameter
  // 2. Declare and initialize the variable (result)
  let result;
  
  // 3. Use a conditional statement to check if the number is greater than 0, 
  //    less than 0, and handle the case when the number is zero
  if (number > 0) {
    // If the number is greater than 0, it is a positive number
    result = "Positive";
  } else if (number < 0) {
    // If the number is less than 0, it is a negative number
    result = "Negative";
  } else {
    // If the number is 0, then the number is neutral (Zero)
    result = "Zero";
  }
  
  // 4. Return the corresponding string value for each case
  return result;
}
determineNumberType();
console.log(determineNumberType(79));// Pasitive
console.log(determineNumberType(-66));// Negative
console.log(determineNumberType(0)); //Zero