/*
 * Conditionals, Functions, Scope and Loops
 */

// CONDITIONALS - piece of codes that evaluate to true or false or boolean
//      use to build complex pieces of logic or ensure certain code only
//      execute upon a condition
// ----------------------------------------------------------------------------------------------------------
// Several types of conditionals

// EQUALS

//let equals = 1 === 1; //two values are the same
// === standard for equals - prevent converting type

// == to ignore types ex: 1 == '1' --> true
// 1 === '1' --> false

// EX:

//let storeA = 4.40;
//let storeB = 4.40;

//let storeAIsLower = storeA < storeB

//function compareStorePrices (storeA, storeB) {
   // let storeAIsLower = storeA < storeB;
    //if (storeAIsLower) {
        //functions - encapsulate our code in a way that is reusable
        // functions are like variables that contain code
        // there are two main features: Parameters and the code that they execute
        //      parameters - allow passing variables into code
       // console.log("Store A has a lower price.")
   // } else if (storeB < storeA) {
   //     console.log("Store B has a lower price.")
   // } else {
  //      console.log("Their prices are equal.")
  //  }
//}
//compareStorePrices(10,5);
//compareStorePrices(7,9);

// Another Example - functions can give us values

//function squareNum (number) {
   // let squared = number * number;
   // return squared;
//}
//let squareNumber = squareNum(4);
//console.log(squareNumber);
//------------------------------------------------------------------------------------------------------------------

// GREATER THAN

//let greaterThan = 5 > 1;

// Less than
//let lessThan = 2 < 10;

// Greater than or Equals to
//let greaterThanEq = 5>= 5;

// Less Than Equals
//let lessThanEq = 4 <= 9;

// Not Equals
//let notEquals = 5 !== 2;  //only returns true if the values aren't the same

// ------------------------------------------------------------------------------------------------------------------

// SCOPE
// the idea that certain values or variables are only accessible within certain levels of your code

// EX:

let x = 10; // global scope

function addNumber (n,m,x) {  // n & m are on function scope - can't access outside the function
    console.log(x);  // can access global scope with in a function
    // HOWEVER, if "x" is defined in the function, it will override the global scope x value
    return n + m;
}

addNumber(2,3,8);
console.log(x);

// JavaScript has 3 levels of scope - global, function, and block scope

//-----------------------------------------------------------------------------------------------------------------

// ARRAY - a type of data structure - a way to organize pieces of data
//      similar to objects
//      in JavaScript - ARRAYS are a special type of object
//      JavaScript sets keys for us called indexes - reference position within the array

//              0,1,2,3,4,5,6   - indexes
let ourArray = [1,2,3,4,5,6,7]; // [ ] use to create arrays

// for (counter; comp; incr)
// i++ add 1 everytime loop complete

let arrlen = ourArray.length
for (let i = 0; i<arrlen; i++) { //when using < or > it's up to the number we're comparing against not including the number
    //console.log("i is equal to: " + i); //checks value of i in every iteration
    console.log(ourArray[i]);
    for (let j = 0; j<10; j++){
        console.log('j is equal to '+ j);
    }
}
// -------------------------------------------------------------------------------------------------------------------

// WHILE LOOP - runs until conditional is false

let t = 0;
while (t < 10) {
    console.log('Ran');
    t = t + 1;
}


