/*
 * Objects, Interfaces, and APIs
 */

// OBJECT ORIENTATED PROGRAMING - a way to represent data and functionality in encapsulated way

// two key features: state (current data and info that describes the object)
// and functionality (actions or changes the object can make to itself or outside world)

//let dog = {
 //   name: "Steve",
  //  color: "brown",
  //  breed: "Pug",
  //  size: "Small",
    //bark: function(typeOfBark) {
      //  console.log("Bark!");
  //  },
//};

//dog.bark();

// interface vs implementation
// interface: function's signature/the name (in the case upper: bark)
// parameters: (in this case) typeOfBark

// -------------------------------------------------------------------------------------------------------------------

// APIs - application programming interface
// these are interfaces written into software to be used by other programmers to interact with the code

// from the example above. API is the bark function

// REST API - allow you to interact with other people's code using URLs instead of functions
// --> it's a way to interact with web application

// -------------------------------------------------------------------------------------------------------------------

// Passing by Value & Passing by Reference
// when sending data though a function via its parameters there are two ways that it can be passed
// by value or by reference

// Passing by value - inside the function only the value of the data is imported/ the data is copied for use
// inside of the function.

// Passing by reference - the parameter being passed in only points to the original data - if you change the data,
// the original data will be affected as well.

function x(y) {
    y = y + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);