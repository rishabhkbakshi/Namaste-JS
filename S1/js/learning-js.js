// const a = [ { name: 'Dinesh', age: 10 }, {name: 'Jai', age: 14}, {name: 'Shayam', age: 20}];
// let p = a.reduce((acc, curr) => {
//   if (curr.age < 15) {
//     acc.push(curr.name);
//   }
//   return acc;
// },[]) 
// console.log(p)

var i = 10;
console.log(i);
setTimeout(function () {
  console.log('hi');
}, 1000)
var n = 20;
console.log(n);

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


function testArgAndRests(p1, p2, p3, p4) {
  // console.log(arguments.callee(p2))
  console.log(arguments.length)
  console.log(arguments[0])
  console.log(arguments[2])
}


function testArgAndRests2(p1, p2, ...rest) {
  console.log(p1)
  console.log(p2)
  console.log(rest.push(5))
}

testArgAndRests(1, 2, 3, 4)
testArgAndRests2(1, 2, 4, 5, 6, 7)

const myName = "Oluwatobi Sofela";

function spellName(a, b, c) {
  return a + b + c;
}
console.log([...myName])

console.log(spellName(...myName));      // returns: "Olu"

console.log(spellName(...myName[0]));   // returns: "wundefinedundefined"

console.log(spellName([...myName]));    // returns: "O,l,u,w,a,t,o,b,i, ,S,o,f,e,l,aundefinedundefined"

console.log(spellName({ ...myName }));    // returns: "[object Object]undefinedundefined"

let a22 = 10;
{
  let a22 = 100;
}

console.log(a22)

console.log('Testing')
var ttttt = 110;
// console.log(window.ttttt)
console.log(this.ttttt)

let p = 3
console.log(this.p)
console.log(typeof (p))

function msg() {
  console.log('named function')
}

console.log(msg());


var display = function (p) {
  console.log('Anonymous Function', 'value of p is => ' + p);
}
display(5);


let num2 = 20;
var num = 10;
console.log('let value => ', num2);
console.log('var value => ', num);
function sum() {
  console.log(num + num);
}
sum();


let str = 'rishabh'
console.log(str.charAt(5))

var add = new Function('num1', 'num2', 'return num1/num2');
console.log(add(2, 5));

var symb1 = Symbol('str')
console.log(symb1)

console.log(typeof (Infinity))
console.log(typeof (function name() { }))


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
console.log('Object by object literal => ', obj1)

// By creating instance of Object
var obj2 = new Object();
obj2.x = 123
obj2.y = 'Welcome to JavaTpoint'
obj2.z = function () {
  return this.x;
}
console.log('By creating instance of Object =>  ', obj2)

// By using an object constructor
function obj3(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}
let o = new obj3(123, 'Welcome to JavaTpoint', function () {
  return this.x;
})
console.log('By using an object constructor => ', o);


const object1 = {
  a: 1,
  b: 2,
  c: 3
};
console.log('object1 => ', object1)
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

console.log(typeof (13e4))


function typedArrayFunc() {
  var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr1.copyWithin(0);
  console.log('------------')
  console.log(arr1);
}
typedArrayFunc();


function weakSet() {
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

console.log('---------------------')
const falsyValues = ['', 0, null, undefined, NaN, false];
falsyValues.forEach(element => {
  console.log(Boolean(element))
});

console.log(Boolean(''), Boolean(' '))

hoistedVariable = 12;
console.log(hoistedVariable); // outputs 12 even when the variable is declared after it is initialized
var hoistedVariable;

hoistedFunction();  // Outputs ' Welcome to JavaTpoint ' even when the function is declared after calling
function hoistedFunction() {
  console.log(' Welcome to JavaTpoint ');
}

// Hoisting in a local scope
function doSomething() {
  x = 11;
  console.log(x);
  var x;
}
doSomething(); // Outputs 11 since the local variable 'x' is hoisted inside the local scope

var x;
console.log(x); // Outputs 'undefined' since the initialization of 'x' is not hoisted
x = 23;

var y = 10;
console.log(y); //prints 10
var y = 'Hello'; //Redeclaring (works without any error)
console.log(y) //Prints 'Hello'

var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}
console.log(b)

let ppp = 1
ppp = 'r'
console.log(ppp)

// (function() {
//   // console.log('======')
// })

function higherOrder(fn) {
  fn();
}
higherOrder(function () { console.log('Hello world') });

function higherOrder2() {
  return function () {
    return 'Do something';
  }
}
var x = higherOrder2();
console.log(x())

function doSomething() {
  console.log(this);
}
doSomething();

var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  }
}

var getName = obj.getName

var obj2 = { name: "akshay", getName };
obj2.getName();


function saySomething(message) {
  return this.name + " is " + message;
}
var person4 = { name: "John" };
console.log(saySomething.apply(person4, ["awesome"]));


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

var curriedMultiply = currying(multiply);

console.log(multiply(4, 3)); // Returns 12

console.log(curriedMultiply(4)(3)); // Also returns 12




function randomFunc() {
  var obj1 = { name: "Vivian", age: 45 };

  return function () {
    console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initialiseClosure = randomFunc(); // Returns a function
initialiseClosure();



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


function fun1() {
  const fun2 = () => {
    console.log(arguments);
  }
  fun2('c', 'd');
}
fun1('a', 'b'); // prints { 0: 'a', 1: 'b' }


function fun() {
  console.log("hello");
}
const objNew = new fun(); //valid code



let objTest = {
  a: 100,
  fun1() {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    }
    fun2();
  }
}

objTest.fun1();


let t = 0
{
  let t = 2
}
console.log(t);



// var variable1 = 23;
// let variable2 = 89;

// function catchValues() {
//   console.log(variable1);
//   console.log(variable2);
//   // Both the variables can be accessed anywhere since they are declared in the global scope
// }
// catchValues()

// window.variable1; // Returns the value 23
// window.variable2; // Returns undefined


const x2 = { name: "Vivek" };
// x = {address: "India"}; // Throws an error
x2.name = "Nikhil";
console.log(x2)


function sumOfThreeElements(...elements) {
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("Only three elements or less are allowed");
    }
    else {
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



// Before ES6 version, using constructor functions
function Student(name, rollNumber, grade, section) {
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails1 = function () {
  return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}

let student1 = new Student("Vivek", 354, "6th", "A");
console.log(student1.getDetails1()); // Returns Name: Vivek, Roll no:354, Grade: 6th, Section:A


function* genFunc() {
  yield 3;
  yield 4;
}
var mygen1 = genFunc();
console.log(mygen1.next());
console.log(mygen1.next());


let testX = {}
let testY = { name: "Ronny" }
let testZ = { name: "John" };
testX[testY] = { name: "Vivek" };
testX[testZ] = { name: "Akki" };
console.log(testX[testY]);


function* gen() {
  yield 100;
  yield;
  yield 200;
}
// Calling the Generator Function
var mygen = gen();
console.log(mygen.next().value);
console.log(mygen.next().value);
console.log(mygen.next().value);


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
studentArr.map(elem => elem['fatherName'] = 'tatti')
console.log(studentArr)

studentArr.map(x => {
  if (x.name == 'Ramesh') {
    console.log('champak')
  }
})


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
console.log('find max using non-functional programming', findMaximum(arrTemp1))

const findMaxUsingReducer = arrTemp1.reduce(function (max, curr) {
  if (max < curr) {
    max = curr
  }
  return max;
}, arrTemp1[0])
console.log('find max using functional programming (.reduce)', findMaxUsingReducer)

const logic = function fun(elem) {
  return 2 * elem;
}
const doubleTheValue = function (arr) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    output.push(logic(arr[index]));
  }
  return output
}

Array.prototype.doubleTheValue = function () {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(logic(this[index]));
  }
  return output
}

console.log('double the all element of the array using functional programming (own logic)', doubleTheValue(arrTemp1));

console.log('double the all element of the array using map function', arrTemp1.map(logic))

console.log('double the all element of the array using array prototype method', arrTemp1.doubleTheValue(logic))

const users = [{
  firstName: 'Ram', lastName: 'Bakshi', age: 34
}, {
  firstName: 'Apurva', lastName: 'Jain', age: 24
}, {
  firstName: 'Suman', lastName: 'Jain', age: 60
}, {
  firstName: 'Khwaab', lastName: 'Jain', age: 24
}]

console.log('All users', usersTemp.map((elem) => elem.firstName + ' ' + elem.lastName))

console.log('Find all the different with count', usersTemp.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1
  }
  return acc;
}, {}))

console.log('Find the user who\'s age is less than 30 with firstName', usersTemp.filter((elem) => elem.age < 30).map((elem) => elem.firstName));

console.log('above logic using reducer', usersTemp.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName)
  }
  return acc
}, []))


// const user = fetch('https://restcountries.com/v3.1/all')
// console.log(user)
// user.then((data) => {
//   data.json().then((data) => {
//     console.log(data.map((data) => data.name.common + '  => capital => ' + data.capital));
//   })
// }, (error) => {
//   console.log(error)
// })


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
printMyName('India');

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1)
  return function (...args2) {
    obj.apply(args[0], [...params, args2])
  }
}

let printMyName2 = printName.mybind(nameObj, 'Jaipur')
printMyName2('India');


const xyz = function (x) {
  return function (y) {
    console.log(x * y)
  }
}

xyz(5)(6);


// x = 6
// console.log(x);
// var x;
// y = 6 // It will give the error
// console.log(y);
// let y;




