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

// Workshop
// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);

//We can also pass what's known as an "anonymous function" as a callback - this is what we often do when using JavaScript event handlers
myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

//We can also use an arrow function as a callback
myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

function myAwesomeFunction4(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction4... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

myAwesomeFunction4(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);

// function that accepts three arguments: two numbers, and a callback function that handles performing the mathematical operation using the two numbers.

function add(a, b) {
  console.log("Adding numbers: ");
  return a + b;
}

function multiply(a, b) {
  console.log("Multiplying numbers: ");
  return a * b;
}

function subtract(a, b) {
  console.log("Subtracting numbers: ");
  return a - b;
}

function divide(a, b) {
  console.log("Dividing numbers: ");
  return a / b;
}

function compare(a, b) {
  console.log("Comparing numbers: ");
  if (a === b) {
    return "They are the same!";
  } else {
    return "They are different!";
  }
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

// Workshop
const result3 = myCalculatorFunction(3, 2, subtract);
console.log(result3); // Output: 1

const result4 = myCalculatorFunction(6, 2, divide);
console.log(result4); // Output: 3

const result5 = myCalculatorFunction(3, 3, compare);
console.log(result5); // Output: They are the same!
