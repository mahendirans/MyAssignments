// Declaration : creating variable
var name

// Initialization :assigning value
name = "Sindhu"


// Declaration + Initialization
var age = 25

console.log(name); // Sindhu
console.log(age);  // 25

// variable declarataion with var keyword
//variables declared with var can be redeclared and reassigned

var companyname="Testleaf"
var companyname="Qeagle" //--->redeclared
companyname=12345 // ---reassigned

console.log(companyname); //12345

//let- variables declared with let cannot be redeclared but can be reassigned
let course="Selenium"
course="Playwright"// -->reassigned, cannot be redeclared with let keyword

console.log(course);

//const- variables declared with const cannot be redeclared cannot be reassigned

const pi=3.14
 pi=3.15 // TypeError: Assignment to constant variable.
