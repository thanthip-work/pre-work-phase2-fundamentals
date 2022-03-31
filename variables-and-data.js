/*
 * Variables, Data Types, and Typing
 */

//Variable Example

let wordData;  //declaration

wordData = "Word list"; //wordData referencing Word list (not equal)

console.log(wordData);

//let subTotal = 100;
//let tax = subTotal * .07;
//let totalWithTax = tax + subTotal;

//Data Types
// 6 Major types in JavaScript - 5 primitive and 1 composite

// Primitive types - basic building blocks used to construct more complex representations of data

// 5 primitive types: boolean (2 values: true or false)
// Boolean - generally use to evaluate comparisons
// Null - value set to nothing by user
// Undefined - set by Javascript instead of the programmer
// *** Value should be set to undefined by JavaScript ***
// Number - all numbers which math can be performed
//  int - any whole number
//  float - any number with decimal point
// string - alphanumeric characters; encapsulated by quotation marks ex. phone number or zip code (no math to perform)

// Composite types - comprised of several types

// OBJECT - to define an object, we create variable

let obj = {
    key1: "Value 1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value",
    }
};

console.log(obj.key1);
console.log(obj.key2);
console.log(obj.boolean);
console.log(obj.obj2.obj2Key1);


// TYPING SYSTEMS - handle data types
// 2 primary characteristics - evaluate, compare, convert types
// 2 kinds of evaluation systems: static and dynamic
// static system - require programmer to tell the language what the type of variable or value
// will be in the code

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

// OPERATORS - way to perform mathematical in the case of numbers or concatenation
// operations in the case of strings on our values

/*let add = 1 + 2;
let sub = 2 - 1;
let multi = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2 "

console.log(string);
*/
