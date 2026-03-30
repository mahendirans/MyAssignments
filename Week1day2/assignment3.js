// observe how the same variable name behaves: var vs let


// 1. Declare a global variable named genderType with value "female"
let genderType = "female";

// 2. Create a function named printGender
function printGender() {
    
  // 3. Inside the function, declare a function-scoped variable color with value "brown" using let
  let color = "brown";
   
  // 4. Create an if condition that checks whether genderType starts with "female"
  if (genderType.startsWith("female")) {
    
    
    // 5a. Inside this if-block: Declare a variable age = 30 using var
    var age = 30;
      
    // 5b. Create a block-scoped variable color = "pink" using let
    let color = "pink";
  
  // 6. Outside the if-block but inside the function, print the value of age
  console.log("print the color inside the block: ", color);
  }
  
  
  // Outside the if-block, print color again
  console.log("Outside the if block but inside the function: ", color);
 
}

// 7. Call the function and print the value of genderType globally
printGender();
console.log("print the value of gender type", genderType);
genderType = 'Male';
console.log("print the updated value of gender type is", genderType);

/* output: 
print the color inside the block:  pink
Outside the if block but inside the function:  brown
print the value of gender type female
print the updated value of gender type is Male */