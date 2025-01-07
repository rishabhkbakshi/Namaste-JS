
/**
 * Here explaning what is prototypal inheritance 
 * 
 */
let arr = ['Rishabh', 'Rahul', 'Atul', 'Abhay'];

//  Now let's check the prototype of arr and Array.prototype
console.log(arr.__proto__);
console.log(Array.prototype); // both will print the same prototype

// Now we do like this
console.log(arr.__proto__.__proto__);
console.log(Object.prototype); // both will print the same prototype
// it means arr.__proto__ is the Array prototype and arr.__proto__.__proto__ is the Object prototype

// But we do like that 
console.log(arr.__proto__.__proto__.__proto__); // it will print 'null'. But why ?
// Answer is prototype of Object prototype is null. 

/**
 * In summary 
 * arr.__proto__ is Array.prototype, 
 * Array.prototype's prototype is Object prototype
 * Object.prototype's prototype is null
 * 
 * This is called prototype chain
 */


//  In JavaScript, every object has a prototype property that links to another object.
let object = {
    name: 'Rishabh',
    city: 'Jaipur',
    getIntro: function () {
        console.log(this.name + ' from ' + this.city);
    }
}
// If we do like this
console.log(object.__proto__);
console.log(Object.prototype); // both will print the same prototype
// it means obj.__proto__ is the Object prototype

// But we do like that 
console.log(object.__proto__.__proto__); // it will print 'null'. But why ?
// Answer is prototype of Object prototype is null. 


function fun() {

}
// in case funtion
console.log(fun.__proto__);
console.log(Function.prototype); // both will print the funtion prototype

// But we do like that
console.log(fun.__proto__.__proto__); // it will print 'Object'
console.log(Object.prototype); // it will print 'Object'

/**
 * It means everything in javascript is Object.
 * 
 */
let object2 = {
    name: 'Ram jaane'
}

/**
 * This line of code is not advisable
 * It will severely affect on the performance of your program
 */
// if we do like this 
object2.__proto__ = object;
// it means now object2 has all the properties of object because of prototype

// if you print this
console.log(object2.name); // it will print 'Ram jaane'
console.log(object2.city); // it will print 'Jaipur'
object2.getIntro(); // it will print 'Ram jaane from Jaipur'
// see city is not present initially but after assignning the object to object2 using prototype
// now object2 has all the properties of object





//  We can add a method to array's prototype
Array.prototype.printAll = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}

//  Now we can use this method on any array
arr.printAll(); // It will print all elements in the array

//  Now let's create a new object and try to use the printAll method
let obj2 = Object.create(arr); // arr is the prototype of obj2
obj2.printAll(); // It will also print all elements in the array

//  Now let's create a new array and try to use the printAll method
let arr2 = ['Ramesh', 'Gopal', 'Suresh', 'Mahesh'];
arr2.printAll(); // It will also print all elements in the array

//  We can also add a new method to obj2's prototype
obj2.printNewMethod = function () {
    console.log('This is new method');
}
obj2.printNewMethod(); // It will print 'This is new method'

//  We can also create a new object and try to use the printNewMethod method
let obj3 = Object.create(obj2);
obj3.printNewMethod(); // It will print 'This is new method'

//  Note: In JavaScript, every object has a prototype property that links to another object.
//  The prototype object is used to provide shared properties and methods for all objects created from it.


// in terms of function
Function.prototype.testBind = function () {
    console.log('This is a test method');
}

function fun() {

}
fun.testBind(); // it will print 'This is a test method'

function fun2() {

}
fun2.testBind(); // it will print 'This is a test method

