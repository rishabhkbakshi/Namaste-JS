/**
 * Function currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. 
 * This allows for partial application of functions and can lead to more reusable and composable code.
 * 
 * In JavaScript, function currying can be achieved using closures or the bind method.
 */


//-----------------------That is function currying using bind method
// In this example, we will use the bind method to create a new function that takes a single argument and multiplies it by a fixed value.
// This is a simple example of function currying using the bind method.
let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
// basically multiply.bind(this, 2) is equivalent to the below function
// let multiplyByTwo = function (y) {
//     let x = 2;
//     console.log(x * y);
// }
multiplyByTwo(5); // Output: 10  // 2 * 5 = 10

// So if we bind the multiply function like this 
multiplyByTwo = multiply.bind(this, 2, 3); // Output: will be 6 
multiplyByTwo(5);  // it will ignore this 5
// because second parameter will become y.
// So now x = 2 and y = 3

// So if we don't bind the multiply function with any parameter
multiplyByTwo = multiply.bind(this); // Output: will be 6 
multiplyByTwo(2, 3); // passing here both the parameter here
// because second parameter will become y.
// So now x = 2 and y = 3


let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);// Output: 15  // 3 * 5 = 15

//-----------------------Now we will see function currying using closures
// The question is 'What is closure'
// Answer :- when a function return a function then 
// the inner function will have the access the varible of there lexical scope
// even after the returning the function. 

// This actually it is presenting the value of x to their inner function
let multiplyUsingClosure = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwoClosure = multiplyUsingClosure(2);
multiplyByTwoClosure(3); //Output: 6 // 2 * 3 = 6

let multiplyByThreeClosure = multiplyUsingClosure(3);
multiplyByThreeClosure(3); //Output: 9 // 3 * 3 = 9

// we can do like that 
multiplyUsingClosure(2)(3);
multiplyUsingClosure(3)(3);

