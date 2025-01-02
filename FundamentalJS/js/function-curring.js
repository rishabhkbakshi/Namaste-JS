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

//-----------------------That is function curring using bind method
// The question is 'What is closure'
// Answer :- when a function return a function then 
// the inner function will the access the varible of there lexical scope
// even after the returning the function. 
// This actually it is preseting the value of x to their inner function
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

