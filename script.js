//basic function
function myFunction(a, b) {
  console.log(a + b);
}

myFunction(2, 4);

// let a=2;
// let b=4;
//I have two parameters(a,b) and two arguements(2,4)
//parameters are variables and arguements are the values stored

//callback function
//a function as a parameter --> the value is the function call, which does an action
function doAction() {
  console.log("action done");
}

doAction();

function doAnotherAction() {
  console.log("Another action done");
}

doAnotherAction();
//myFunctionParameter is a callback function
//you can call other functions inside a function without adding it as a parameter, but with it beeing a parameter you can reuse the code much better
//can pass in any function you want in the call so you dont need to rewrite the code
function doManyAction(myFunctionParameter) {
  console.log("doing some actios...");
  myFunctionParameter();
}

doManyAction(doAction);
doManyAction(doAnotherAction);

let button = document.querySelector("button");

//callback functions in event listener
button.addEventListener("click", function () {
  //action
});

//simplify how we write functions --> arrow function
button.addEventListener("click", () => {
  //action
});

//example

//callback function in methods
let array = [1, 2, 3];
array.forEach(function () {
  //action
});

//simplify
array.forEach(() => {
  //action
});
