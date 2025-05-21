// const a = [ { name: 'Dinesh', age: 10 }, {name: 'Jai', age: 14}, {name: 'Shayam', age: 20}];
// let p = a.reduce((acc, curr) => {
//   if (curr.age < 15) {
//     acc.push(curr.name);
//   }
//   return acc;
// },[]) 
// console.log(p)
//-------------------------------------------------------------------------
var i = 10;
console.log(i);
// console.log(i++);
// This is the setTimeout function
// the concept of the setTimeout function is that it will execute the function after the time specified in milliseconds
// but the function will be executed after the time specified in milliseconds
// but the code will be executed before the function is executed
setTimeout(function () {
  console.log('hi');
}, 1000)
var n = 20;
console.log(n);

//-------------------------------------------------------------------------
function setTimeoutEx() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000);
  }
}
setTimeoutEx();


let array1 = [1, 3, 4, 2, 2, 5, 5, 1, 4]
let array2 = [];
for (let i = 0; i < array1.length; i++) {
  if (!array2.includes(array1[i])) {
    array2.push(array1[i]);
  }
}
console.log(array2)

//-------------------------------------------------------------------------
function testArgAndRests(p1, p2, p3, p4) {
  // console.log(arguments.callee(p2))
  // arguments => is an array-like object that contains the arguments passed to the function
  // arguments.callee => is a reference to the currently executing function
  // arguments.callee(p2) => is a reference to the currently executing function with the argument p2 passed to it

  console.log(arguments.length)
  console.log(arguments[0])
  console.log(arguments[2])
}


function testArgAndRests2(p1, p2, ...rest) {
  console.log(p1)
  console.log(p2)
  console.log(rest.push(5))
  console.log(arguments[3])
}

testArgAndRests(1, 2, 3, 4)
testArgAndRests2(1, 2, 4, 5, 6, 7)

//-------------------------------------------------------------------------
const myName = "Oluwatobi Sofela";

function spellName(a, b, c, d) {
  return a + b + c + d;
}
console.log([...myName])

console.log(spellName(...myName));      // returns: "Olu"

console.log(spellName(...myName[0]));   // returns: "Oundefinedundefined"

console.log(spellName([...myName]));    // returns: "O,l,u,w,a,t,o,b,i, ,S,o,f,e,l,aundefinedundefined"

console.log(spellName({ ...myName }));    // returns: "[object Object]undefinedundefined"
//-------------------------------------------------------------------------


let a22 = 10;
{
  // The console.log(a22) statement is outside the block scope where a22 is re-declared. 
  // This could lead to confusion about which a22 is being logged. 
  let a22 = 100;
}
// this is global scope. it will give the error
console.log(a22)
//-------------------------------------------------------------------------

console.log('Testing')
var ttttt = 110;
// here this = window object, both are same in the global scope
// console.log(window.ttttt)
console.log(this.ttttt)
//-------------------------------------------------------------------------

let p = 3
// let is stored in script scope.
// if you are trying to access the variable p in the global scope by using this, it will give an error
console.log(this.p) // this.p => undefined
console.log(typeof (p)) // p => number

function msg() {
  console.log('named function')
}

console.log(msg());

//-------------------------------------------------------------------------

var display = function (p) {
  // This is an anonymous function. 
  // The function is assigned to the variable display.
  // The function can be called using the variable name display.
  console.log('Anonymous Function', 'value of p is => ' + p);
}
display(5);
//-------------------------------------------------------------------------

let num2 = 20;
var num = 10;
console.log('let value => ', num2);
console.log('var value => ', num);
function sum() {
  console.log(num + num);
}
sum();
//-------------------------------------------------------------------------

let str = 'rishabh'
// .chatAt is used to get the character at the specified index in a string
// The index starts from 0, so the first character is at index 0, the second character is at index 1, and so on.
console.log(str.charAt(5))
//-------------------------------------------------------------------------

// this is a string method that returns the index of the first occurrence of the specified value in a string
// The index starts from 0, so the first character is at index 0, the second character is at index 1, and so on.
var add = new Function('num1', 'num2', 'return (num1+num2) + num1/num2');
console.log(add(2, 5));
//-------------------------------------------------------------------------

// Symbol is a built-in object that is used to create unique and immutable values
// The Symbol function is used to create a new symbol.
let symb1 = Symbol('id')
let symb2 = Symbol('firstName')
let testSymbol = {
  [symb1]: 'test',
  [symb2]: 'test2'
}
console.log(testSymbol[symb1])
console.log(testSymbol[symb2])
console.log(symb1 === symb2) // false
console.log(symb1.toString()) // Symbol(id)
console.log(symb1)
//-------------------------------------------------------------------------

// typeof is used to get the type of the variable
console.log(typeof (Infinity)) // number
console.log(typeof (NaN)) // number
console.log(typeof (function name() { })) // function
//-------------------------------------------------------------------------


// Object by object literal
var obj1 = {
  x: 123,
  y: 'Welcome to JavaTpoint',
  z: function () {
    return this.x;
  } // => [Function: z]
  // z: add => NaN
  // z: add(2, 5) // => output => 0.4
}
console.log(obj1.z) // [Function: z]
// but console.log(obj1.z()) // => output => 123
// here this.x is denoting the key of the object obj1
// console.log(obj1.z(2, 5)) // => output => 0.4
console.log('Object by object literal => ', obj1)
//-------------------------------------------------------------------------

// this is the alternate version of the above code
// By using new keyword or you can say creating instance of Object
var obj2 = new Object();
obj2.x = 123
obj2.y = 'Welcome to JavaTpoint'
obj2.z = function () {
  return this.x;
}
console.log('By creating instance of Object =>  ', obj2)
//-------------------------------------------------------------------------


// By using an object constructor
function obj3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}
// this is the constructor function
let o = new obj3(123, 'Welcome to JavaTpoint', function () {
  return this.x;
})
console.log('By using an object constructor => ', o);
//-------------------------------------------------------------------------

const object1 = {
  a: 1,
  b: 2,
  c: 3
};
console.log('object1 => ', object1)
// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// if it got duplicate key then it will take the original value of key from the target object and then it will assign the value of the source object to the target object
// It returns the target object.
const object2 = Object.assign({ c: 4, d: 5 }, object1);
console.log('object2 => ', object2)
const object3 = {
  g: 1,
  h: 2,
  i: 3
};
console.log('object3 => ', object3)
const object4 = Object.assign({ g: 7, h: 9, j: 10 }, object3);
console.log('object4 => ', object4)
//-------------------------------------------------------------------------


console.log(typeof (13e4)) // number


function typedArrayFunc() {
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // arr1.copyWithin(0, 5, 8); // Copy elements from index 5 to 8 to index 0
  arr1.copyWithin(0); // Copy elements from index 0 to the end of the array to index 0
  // arr1.copyWithin(0, 5); // Copy elements from index 5 to the end of the array to index 0
  console.log('------------')
  console.log(arr1);
}
typedArrayFunc();
//-------------------------------------------------------------------------

function weakSet() {
  // WeakSet is a collection of objects, where the objects are weakly referenced.
  // This means that if there are no other references to the object, it can be garbage collected.
  // WeakSet is not iterable, so you cannot use forEach or map on it.
  var ws = new WeakSet();
  var obj1 = {};
  var obj2 = {};
  ws.add(obj1);
  ws.add(obj2);
  //Let's check whether the WeakSet object contains the added object
  console.log(ws.has(obj1) + '<br>');
  console.log(ws.has(obj2));
}
weakSet()
//-------------------------------------------------------------------------

console.log('---------------------')
// here are some falsy values in js
// falsy values are those values which are considered false when encountered in a Boolean context
// falsy values are: '', 0, null, undefined, NaN, false
// here is the catche of the falsy values
// if you are trying to convert the falsy values to boolean then it will give false
// Note that point that Infinity is not a falsy value
// Infinity is a truthy value and typeof Infinity is number
// so if you are trying to convert the Infinity to boolean then it will give true
const falsyValues = ['', 0, null, undefined, NaN, false];
falsyValues.forEach(element => {
  console.log(Boolean(element))
});
//-------------------------------------------------------------------------

console.log(Boolean(''), Boolean(' '))

hoistedVariable = 12;
console.log(hoistedVariable); // outputs 12 even when the variable is declared after it is initialized
var hoistedVariable;

hoistedFunction();  // Outputs ' Welcome to JavaTpoint ' even when the function is declared after calling
function hoistedFunction() {
  console.log(' Welcome to JavaTpoint ');
}
//-------------------------------------------------------------------------

// Hoisting in a local scope
function doSomething() {
  x = 11;
  console.log(x);
  var x;
}
doSomething(); // Outputs 11 since the local variable 'x' is hoisted inside the local scope
//-------------------------------------------------------------------------


var x;
console.log(x); // Outputs 'undefined' since the initialization of 'x' is not hoisted
x = 23;

var y = 10;
console.log(y); //prints 10
var y = 'Hello'; //Redeclaring (works without any error)
console.log(y) //Prints 'Hello'
//-------------------------------------------------------------------------


// Redeclaring a variable using var keyword is allowed in JavaScript
// but redeclaring a variable using let keyword is not allowed in JavaScript
var a = 10;
{
  var a = -10;
}
console.log(a) // prints -10
// var is function scoped, so the value of a is changed to -10 in the global scope
let b = a;
{
  let b = -20;
}
// let is block scoped, so the value of b is not changed in the global scope
console.log(b) // prints -10
//-------------------------------------------------------------------------


let ppp = 1
ppp = 'r'
// let is allowed to reassign the value of the variable with any type
console.log(ppp)
//-------------------------------------------------------------------------


// this is the IIFE function 
// IIFE function is a function that is executed immediately after it is defined
// IIFE function is used to create a new scope for the variables defined inside the function
// (function() {
//   console.log('======')
// })();
//-------------------------------------------------------------------------


function higherOrder(fn) {
  fn();
}
// this is the higher order function
// higher order function is a function that takes another function as an argument or returns a function as a result
// higher order function is used to create a new function that can be used to perform a specific task
higherOrder(function () {
  console.log('Hello world')
});
function higherOrder2() {
  return function () {
    return 'Do something';
  }
}
var x = higherOrder2();
console.log(x())
//-------------------------------------------------------------------------


function doSomething() {
  // here this is the global object
  // in the global scope this is the window object
  console.log(this);
}
doSomething();
//-------------------------------------------------------------------------


var obj7 = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  }
}

var getName = obj7.getName; // this will give undefined because this is not pointing to the object obj7
// as you can see the above code, there is no function parenthesis () after getName
// so it will not execute the function getName.
// it will just assign the function getName to the variable getName
getName(); // undefined

var obj2 = { name: "akshay", getName };
obj2.getName(); // akshay
//-------------------------------------------------------------------------


function saySomething(message) {
  return this.name + " is " + message;
}
var person4 = { name: "John" };
// .apply() method is used to call a function with a given this value and arguments provided as an array (or an array-like object).
// .call() method is used to call a function with a given this value and arguments provided individually
// .bind() method is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
console.log(saySomething.apply(person4, ["awesome"])); // John is awesome
console.log(saySomething.call(person4, "awesome")); // John is awesome
var testBind = saySomething.bind(person4, "awesome"); // this will return a function
// testBind is a function that is bound to the person4 object and has the message "awesome" as an argument
console.log(testBind()); // John is awesome
//-------------------------------------------------------------------------


function multiply(a, b) {
  return a * b;
}
function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    }
  }
}
// currying is a technique of evaluating a function with multiple arguments, into a sequence of functions with a single argument
// currying is a way to transform a function that takes multiple arguments into a series of functions that each take a single argument
// currying is a way to create a new function that takes a single argument and returns a new function that takes the next argument
// and so on until all arguments are provided
var curriedMultiply = currying(multiply);


console.log(multiply(4, 3)); // Returns 12

console.log(curriedMultiply(4)(3)); // Also returns 12

//-------------------------------------------------------------------------

// this is the closure function
// closure is a function that has access to the parent scope, even after the parent function has closed
// closure is a way to create a new function that has access to the variables in the parent scope
// Closures essentially bind a function to its lexical scope.
// closures are used to create private variables and functions
function randomFunc() {
  var obj1 = { name: "Vivian", age: 45 };

  // obj1 is a local variable that is defined inside the randomFunc function
  // obj1 is not accessible outside the randomFunc function
  return function () {
    console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function
initialiseClosure();

//-------------------------------------------------------------------------

// this is the memoization function
// memoization is an optimization technique that is used to speed up the execution of a function by caching the results of expensive function calls and returning the cached result when the same inputs occur again
// memoization is a way to store the results of expensive function calls and return the cached result when the same inputs occur again
// memoization is a way to optimize the performance of a function by caching the results of expensive function calls and returning the cached result when the same inputs occur again
function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num]
    } else {
      cache[num] = num + 256;
      return cache[num];
    }
  }
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

//-------------------------------------------------------------------------


function fun1() {
  const fun2 = () => {
    // fun2: Inside fun1, an arrow function fun2 is defined. 
    // Arrow functions differ from regular functions in that they do not have their own arguments object.
    // Instead, they inherit the arguments object from their enclosing lexical scope. 
    // In this case, the enclosing scope of fun2 is fun1.
    console.log(arguments); // This will log the arguments object of fun1, which contains the arguments passed to fun1.
  }
  fun2('c', 'd');
}
fun1('a', 'b');

//-------------------------------------------------------------------------
function fun() {
  console.log("hello");
}
// fun is a function constructor
// function constructor is a special type of function that is used to create objects
const objNew = new fun(); //valid code
// line no. 491 => it will print hello because here we are creating function construtor object
// At the time of creating the object, the fun function will invoke and it will print hello

console.log(objNew); // It will return an function object


//-------------------------------------------------------------------------
let objTest = {
  a: 100,
  fun1: () => {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    }
    fun2();
  },
  fun3() {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    }
    fun2();
  }
}

objTest.fun1(); // undefined
objTest.fun3(); // 100
// In this case, the value of this inside fun2 refers to the objTest object, not the global object.
// This is because arrow functions do not have their own this context; they inherit it from the enclosing lexical scope, which is fun1 in this case.
// Therefore, this.a refers to objTest.a, which is 100.
//-------------------------------------------------------------------------

let t = 0
{
  let t = 2
}
console.log(t); // 0
//-------------------------------------------------------------------------



var variable1 = 23;
let variable2 = 89;

function catchValues() {
  console.log(variable1);
  console.log(variable2);
  // Both the variables can be accessed anywhere since they are declared in the global scope
}
catchValues()

// window.variable1; // Returns the value 23
// window.variable2; // Returns undefined
// The variable2 is not attached to the window object since it is declared using let keyword
// The variable1 is attached to the window object since it is declared using var keyword
//--------------------------------------------------------------------------

const x2 = { name: "Vivek" };
// x = {address: "India"}; // Throws an error
x2.name = "Nikhil";
console.log(x2) // { name: "Nikhil" }
// The value of the object can be changed but the reference to the object cannot be changed
// The reference to the object cannot be changed because it is declared using const keyword
// The value of the object can be changed because the object is mutable
// You can change the properties of the object but you cannot change the reference to the object

//-------------------------------------------------------------------------


function sumOfThreeElements(...elements) {
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("Only three elements or less are allowed");
    } else {
      let sum = 0;
      let i = 0;
      while (i < elements.length) {
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: " + sum);
    }
  })
}

sumOfThreeElements(4, 5, 6)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// In the code above, the promise is fulfilled so the then() method gets executed

sumOfThreeElements(7, 0, 33, 41)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// In the code above, the promise is rejected hence the catch() method gets executed

//-------------------------------------------------------------------------

// Before ES6 version, using constructor functions
function Student(name, rollNumber, grade, section) {
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;

  // 1 way to add methods to a constructor function
  // this.getDetails1 = function () {
  //   return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
  // }
}

// Way to add methods to a constructor function
// The prototype property allows you to add new properties and methods to an object constructor
// The prototype property is a reference to the object that is used as a prototype for all objects created with the constructor function
// 2 way to add methods using prototype property
Student.prototype.getDetails1 = function () {
  return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}
let student = new Student("Rishabh", 354, "6th", "A");
student.getDetails1(); // Returns Name: Rishabh, Roll no:354, Grade: 6th, Section:A
console.log(student.getDetails1()); // Returns Name: Rishabh, Roll no:354, Grade: 6th, Section:A

//-------------------------------------------------------------------------

// This is the generator function
// Generator functions are a special type of function that can be paused and resumed at any time
// Generator functions are defined using the function* keyword
// Generator functions return a generator object, which is an iterator that can be used to iterate over the values generated by the generator function
function* genFunc() {
  // The yield keyword is used to pause the execution of the generator function and return a value
  yield {
    id: 1,
    name: "Rishabh"
  };
  yield 4;
}
var mygen1 = genFunc();
// .next() method is used to resume the execution of the generator function and return the next value generated by the generator function
// The next() method returns an object with two properties: value and done
console.log(mygen1.next()); // { value: { id: 1, name: 'Rishabh' }, done: false }
console.log(mygen1.next().value); // 4



function* gen() {
  yield 100;
  yield;
  yield 200;
}
// Calling the Generator Function
var mygen = gen();
console.log(mygen.next().value); // 100
console.log(mygen.next().value); // undefined
console.log(mygen.next().value); // 200

//--------------------------------------------------------------------------

let testX = {}
let testY = { name: "Ronny" }
let testZ = { name: "John" };
// Here we are assigning a object as a key of the object testX
testX[testY] = { name: "Vivek" };
testX[testZ] = { name: "Akki" };
console.log(testX[testY]); // { name: 'Akki' }

//--------------------------------------------------------------------------




let studentArr = [{
  id: 1,
  name: 'Rishabh'
}, {
  id: 2,
  name: 'Ramesh'
}, {
  id: 3,
  name: 'Raju'
}]

console.log(studentArr)
studentArr.map(elem => elem['fatherName'] = 'Ram Bahadur')
console.log(studentArr) // { id: 1, name: 'Rishabh', fatherName: 'Ram Bahadur' }, { id: 2, name: 'Ramesh', fatherName: 'Ram Bahadur' }, { id: 3, name: 'Raju', fatherName: 'Ram Bahadur' } }

studentArr.map(x => {
  if (x.name == 'Ramesh') {
    console.log('champak')
  }
}) // champak
//-------------------------------------------------------------------------


let arrTemp1 = [1, 4, 2, 5, 6, 3]

const findMax = function name(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max
}
console.log('find max using non-functional programming', findMax(arrTemp1)) // 6

// find max using functional programming using .reduce method
// .reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The first argument of the reducer function is the accumulator (acc), and 
// the second argument is the current value (curr) being processed in the array.
const findMaxUsingReducer = arrTemp1.reduce(function (max, curr) {
  if (max < curr) {
    max = curr
  }
  return max;
}, arrTemp1[0])
console.log('find max using functional programming (.reduce)', findMaxUsingReducer) // 6

//--------------------------------------------------------------------------

const logic = function fun(elem) {
  return 2 * elem;
}
const doubleTheValue = function (arr) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    output.push(logic(arr[index]));
  }
  return output;
}

Array.prototype.doubleTheValue = function () {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(logic(this[index]));
  }
  return output;
}

let arrTemp2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrTemp2.doubleTheValue(logic) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

console.log('double the all element of the array using functional programming (own logic)', doubleTheValue(arrTemp1));

console.log('double the all element of the array using map function', arrTemp1.map(logic));

console.log('double the all element of the array using array prototype method', arrTemp1.doubleTheValue(logic));

//--------------------------------------------------------------------------


const users = [{
  firstName: 'Ram', lastName: 'Bakshi', age: 34
}, {
  firstName: 'Apurva', lastName: 'Jain', age: 24
}, {
  firstName: 'Suman', lastName: 'Jain', age: 60
}, {
  firstName: 'Khwaab', lastName: 'Jain', age: 24
}]

console.log('All users', users.map((elem) => elem.firstName + ' ' + elem.lastName))

console.log('Find all the different with count', users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1
  }
  return acc;
}, {}))

console.log('Find the user who\'s age is less than 30 with firstName', users.filter((elem) => elem.age < 30).map((elem) => elem.firstName));

console.log('above logic using reducer', users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName)
  }
  return acc
}, []))



//--------------------------------------------------------------------------

const user = fetch('https://restcountries.com/v3.1/all')
console.log(user);
user.then((data) => {
  data.json().then((data) => {
    console.log(data.map((data) => data.name.common + '  => capital => ' + data.capital));
  })
}, (error) => {
  console.log(error)
});

//--------------------------------------------------------------------------


let cart = {
  OrderId: undefined
}

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    const { OrderId: oId } = cart;
    if (oId) {
      setTimeout(() => {
        resolve(oId)
      }, 5000);
    } else {
      const err = new Error('something went wrong with your cart')
      reject(err)
    }
  });
  return pr;
}

createOrder(cart)
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err.message)
  });


function randomFunc() {
  var obj1 = { name: "Vivian", age: 45 };
  return function () {
    console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed
  }
}

var initialiseClosure = randomFunc(); // Returns a function
initialiseClosure();


let nameObj = {
  firstName: 'Rishabh',
  lastName: 'Bakshi'
}

let printName = function (hometown, country) {
  console.log(this.firstName + ' ' + this.lastName + ' , ' + hometown + ' , ' + country)
}

let printMyName = printName.bind(nameObj, 'Jaipur')
printMyName('India'); // Rishabh Bakshi , Jaipur , India

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1)
  return function (...args2) {
    obj.apply(args[0], [...params, args2])
  }
}

let printMyName2 = printName.mybind(nameObj, 'Jaipur')
printMyName2('India'); // Rishabh Bakshi , Jaipur , India


const xyz = function (x) {
  return function (y) {
    console.log(x * y)
  }
}

xyz(5)(6); // 30

//--------------------------------------------------------------------------

x = 6
console.log(x); 
var x;
y = 6 // It will give the error
console.log(y);
let y;

//--------------------------------------------------------------------------
// the smallest javascript code is a empty .js file
// if you are trying to run the empty .js file then it will run without any error
// if you put a debugger statement in the empty .js file then it will stuck over there


