"use strict";

// this is global space
console.log(this); // this in global space represent the global object.
// In case of browser is Window Object.


// this inside a function
function x() {
    // the value depends on strict (this will the undefined) / non-strict mode (window object)
    console.log(this); // this in function will represent the global object (window object) in non-strict mode
}
x();

// this in strict mode - (this subsitution)
// if the value of 'this' keyword is undefined or null 
// this keyword will be replaced with globalObject
// only in non-strict mode.

// this keyword depends on how the function is called (window object)
// if you are calling the function without any references then this become undefined
// window.x(); // if you are calling the function then it will return window object 

// this inside a object's method
const student = {
    name: 'Rishabh',
    printName: function () {
        // this in object's method will represent the object itself
        console.log(this.name);  // this will be the student object log: 'Rishabh'
    }
};

// what is the difference between method and funtion in javascript
// if you are creating a function inside the object (or in other words if your function is a part of object) then it is called as method
// if you are creating a function outside of the object then it is called as funtion

student.printName(); // this will call the method printName of the object student.

// call apply bind methods (sharing methods)
const student2 = {
    name: 'Bakshi'
}
// value of this = student2
student.printName.call(student2); // Bakshi

// this inside arrow function = does not have their own this, 
// it take the value from their lexical scope where they are enclosed
const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
}
obj.x(); // this will be the global object (window object) because arrow function does not have their own this.

const obj2 = {
    a: 20,
    b: 30,
    c: 40,
    p: () => {
        console.log(this); // this will be the global object (window object) because arrow function does not have their own this, it take the value from their lexical scope where they are enclosed
    },
    test() {
        console.log(this); // this will be the obj2 object because test is a method of obj2 object
    },
    x: function () {

        const obj3 = {
            z: () => {
                console.log(this); // this will be the obj2 object because arrow function does not have their own this, it take the value from their lexical scope where they are enclosed
            }
        }
        // enclosing lexical context
        const y = () => {
            console.log(this);
            obj3.z(); // this will be the obj2 object because arrow function does not have their own this, it take the value from their lexical scope where they are enclosed
        }
        y();
    }
}
obj2.x();
obj2.p();


// this inside DOM elements => reference to the HTML element
