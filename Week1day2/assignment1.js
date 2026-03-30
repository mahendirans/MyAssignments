
//  Check if Number is Odd or Even

function isOddOrEven(number) {
  // 1. Create a function named `isOddOrEven` that takes a number as a parameter
  // 2. Declare and initialize the variable (result)
  let result;
  
  // 3. Use a conditional statement to check if the number is divisible by 2
  // Use the modulo operator (%) to check divisibility by 2
  if (number % 2 === 0) {
    // If the remainder is 0, the number is divisible by 2 (Even)
    result = "Even";
  } else {
    // If the remainder is 1, the number is not divisible by 2 (Odd)
    result = "Odd";
  }
  return result;
}
isOddOrEven();
console.log(isOddOrEven(79));// odd

