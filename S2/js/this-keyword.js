"use strict";

// this is global space
console.log(this); // this in global space represent the global object.In case of browser is Window Object.


// this inside a function
function x() {
    // the value depends on strict (this will the undefined) / non-strict mode (window object)
    console.log(this);
}
x();

// this in strict mode - (this subsitution)
// if the value of this keyword is undefined or null 
// this keyword will be replaced with globalObject
// only in non-strict mode.

// this keyword depends on how the function is called (window object)
// if you are the function without any references then this become undefined
window.x(); // if you are calling this function then it will return window object 

// this inside a object's method
const student = {
    name: 'Rishabh',
    printName: function () {
        console.log(this.name); // this in object's method will represent the object itself
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
student.printName.call(student2); // value of this = student2

// this inside arrow function = does not have their own this, 
// they take the value from their lexical scope where they are enclosed
const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
}
obj.x();

const obj2 = {
    a: 20,
    x: function () {

        const obj3 = {
            z: () => {
                console.log(this); // this in obj3 will represent obj3
            }
        }
        // enclosing lexical context
        const y = () => {
            console.log(this);
            obj3.z(); // this will call the method z of the object obj3.
        }
        y();
    }
}
obj2.x();


// this inside DOM elements => reference to the HTML element
 