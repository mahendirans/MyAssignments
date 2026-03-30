//Scoping ---visibility or accessibility of the variable in the code.
//Types of scope:
// Global scope → accessible everywhere
//Function scope → accessible only inside a function
//Block scope → accessible only inside the block { }

funscope()
function funscope(){
if (true){
    var a=70
    console.log("value of a inside the if block",a) //value of a inside the if block 70
}
console.log("value of a outside the if block and inside function block",a)
}                                         //value of a outside the if block and inside function block 70

console.log("value of a outside the function block",a) // ReferenceError: a is not defined

//var- function scoped, we cannot access outside the funtion scope
//let and const- block scoped variable, access only inside the block

/* Named Function
function fun(){

}
fun() */