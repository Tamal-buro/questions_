// Functions in Java Script

/* 
    What is a function Declarations?
    Declaring a function like below
    Which is also called Function Statement or Function Defination
*/

function square(num){
    return num * num ;
};



/* 
   What is function Expression?
   When you store a function inside a variable is called 
   Function Expression 

   The o
*/

const square2 = function (num) {  // called anonymous function as it has no name
    return num * num;
};

// console.log(square2(5))  // o/p - 5


/* 
   What are First Class Functions?
   In a language where a function can be treated as variables are called
   First Class Functions
   These cases the functions passed into another functions and can be used
   manipulated and return from  from those functions 
   Similar to what variables can do
*/

function sum(num){
    return num + num;
}

// const sumValue = function(num){
//     return console.log('Value of SUM: ', sum(num))
// }

// sumValue(3)


/* 
  What is IIFE
  Immediately Invode Function Expression 
*/


(function (x){
    return (function (y) {
        console.log(x)
    })(2);
})//(13);


/* 
   What is closures ?

   The ability of a function to access the variables and fucntions that are
   lexically out if its scope are called closures.
   So closures are created when a function is creates coz that function has 
   the reference to the outer scope
*/

/* 
   Function scope ?

   In case of let it creates another block scope each time
   But var doesn't has a block scope
*/

for(var i = 0; i < 5; i++){  // Chnage it to let to see output
    setTimeout(function () {
        // console.log(i);
    }, i * 1000);
}

/* 
   What is Hoisting ?

   During an execution phase JavaScript engine moves the variables and functions 
   declaration to the top of the code and this is known as hoisting.

   Note - const and let are not hoisted like var, but they are hoisted in temporal dead zone
   Temporal Dead Zone - is the term to describe a state where variables are in the scope 
                        but are not yet declared. They 
*/
var count     // First the var was declared
//console.log(count)   // executes a console // op - undefined
count = 1;          // later initializing it.


//console.log(count2) // o/p - Cannot access 'count2' before initialization
let count2 = 2
var count3 = 3



// Question

function abc() {
    // console.log(c)

    let c = 30
    let b = 20
    var a = 10
}

abc() //Cannot access 'b' before initialization. its hoisted in temporal dead zone

/* 
   Function hoisting vs Variable hoisting

   Functions are hoisted completely. So it prints value even is declared later
   But for variables we get undefined as it is not hoisted completely 


*/

functionName(); // o/p- Road Side coder
console.log(x); // o/p - undefined

function functionName() {
    console.log("Road Side coder")
}

var x = 5;


/* 
    Spread vs Rest operator
    
*/

function multiply (...nums) { // here it is call Rest operator
    return nums[0] * nums[1]
}

let arr = [5,6]

console.log(multiply(...arr)) // here it is call Spread operator

// Output based question on Rest operator

const fn = (a, x, y, ...numbers) => {
    console.log(x,y, numbers)
};

let array = [2,3,4,5,6,7,8,9]
fn(2,3,4,5,6,7,8,9)

// Question 
/* 
    Write a function that accepts one fixed argument operator and any number
    of numerical arguments. 
    It should perform the operation (+, *, etc.) on the numbers.
*/

const calculate = (operator, ...rest) => {
    switch(operator) {
        case '+' : return rest.reduce((a,b) => a + b, 0)
        case '*' : return rest.reduce((a,b) => a * b, 1)
        default: return 'Unsupported operator';
    }
}

console.log(calculate('+',2,3,4)) // 9
console.log(calculate('*',2,3,4)) // 24

//Refactor the following function to use rest parameters:
function logAllArguments() {
    for (let i = 0; i< arguments.length; i++){
        console.log(arguments[i])
    }
}
// logAllArguments(2,3,4)

const allArgs = (...args) => {
    for (const arg of args){
        console.log(arg)
    }
}

allArgs(2,3,4)

// Use spread operator to clone and extend the array below:

const colors = ['red', 'green', 'purpel']
const extend = [...colors, 'blue', 'white']
console.log(extend)

// Merge two arrays using the spread operator.

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(...arr1, ...arr2)

// Use rest to write a multiplyAll function that multiplies any number of arguments.

const multiplyAll = (...nums) => {
    return nums.reduce((a,b) => a*b, 1)
}

console.log(multiplyAll(2,3,4))

// Use spread to convert a string into an array of characters.

const str = "hello";
const chars = [...str]
const split = str.split('')
// console.log('spread : ',chars) //  ['h', 'e', 'l', 'l', 'o']
// console.log('split : ', split) //  ['h', 'e', 'l', 'l', 'o']


/* 
   Callback function 
   It is a function passed onto another fucntion as an argument, which is then invoked
   inside the outer fucntion to complete some kind of routine or action.
*/

function greetings(name){
    alert('Hello ' + name)
}

function processUserInput(callback){
    var name = prompt('Please Enter Your Name')
    callback(name)
}

// processUserInput(greetings)

// setTimeout for callback example
console.log('start')

// setTimeout(() => {
//     console.log("This runs after 2 seconds")
// }, 2000)

// console.log("end")






function foreach(s)
{
    for (let c of s){
        console.log(c)
    }
}

foreach("TEST this program")