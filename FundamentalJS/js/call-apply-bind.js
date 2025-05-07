// -------------------call--------------------------
// you can write a method that can be used on different objects using call
// .call method is used to call a function with a given this value and arguments provided individually.
// It is used to borrow methods from one object to another object.
// It allows you to call a function with a specific this value and arguments.
let nameObj = {
    firstName: "Rishabh",
    lastName: "Bakshi",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

nameObj.printFullName(); // Output: rishabh Bakshi

let nameObj2 = {
    firstName: "Apurva",
    lastName: "Jain",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

// function borrowing
// we can borrow the printFullName method from nameObj and use it in nameObj2
// we can use call method to do that
nameObj.printFullName.call(nameObj2); // Output: Apurva Jain    

// In general we can do like that
let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + ' from ' + hometown + ', ' + state);
}
// we can use call method to do that
printFullName.call(nameObj, 'Merta Road', 'Rajasthan');
printFullName.call(nameObj2, 'Jaipur', 'Rajasthan');


//--------------------------------Apply--------------------------------
// in .apply method, you have to give the object as a first argument and rest all argument will be in array
// .apply method is similar to .call method, but it takes an array of arguments instead of individual arguments.
// It is used to call a function with a given this value and arguments provided as an array.
// It is used to borrow methods from one object to another object.

/**
 * So what is the difference between call and apply?
 * The difference is that in call, you pass the arguments one by one, while in apply, you pass the arguments as an array.
 * So if you have a function that takes multiple arguments, you can use apply to pass them as an array.
 * For example, if you have a function that takes 3 arguments, you can use apply to pass them as an array like this:
 * functionName.apply(this, [arg1, arg2, arg3]);
 * * In call, you would have to pass them one by one like this:
 * functionName.call(this, arg1, arg2, arg3);
 */
printFullName.apply(nameObj, ['Merta Road', 'Rajasthan']);
printFullName.apply(nameObj2, ['Jaipur', 'Rajasthan']);

//--------------------------------Bind--------------------------------
// It is same as call method, only difference is that .bind method return the function
// you can call it sometimes later
// .bind method creates a new function, but it does not call it immediately.
// It allows you to create a new function with a specific this value and arguments, which can be called later.
// It is used to borrow methods from one object to another object.
let printFullNameBound = printFullName.bind(nameObj, 'Merta Road', 'Rajasthan');
printFullNameBound();

let printFullNameBound2 = printFullName.bind(nameObj2, 'Jaipur', 'Rajasthan');
printFullNameBound2();

// So the difference between call, apply and bind is that call and apply are used to call a function immediately, while bind is used to create a new function with a specific this value and arguments, which can be called later.
// call and apply are used to borrow methods from one object to another object, while bind is used to create a new function with a specific this value and arguments.
// call and apply are used to call a function immediately, while bind is used to create a new function with a specific this value and arguments, which can be called later.

function abc() {
    console.log(arguments)
}

abc(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
abc.call(this, 1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
abc.apply(this, [1, 2, 3, 4, 5]); // Output: [1, 2, 3, 4, 5]
abc.bind(this, 1, 2, 3, 4, 5); // this will not work because bind does not call the function immediately, it just creates a new function with a specific this value and arguments.
let test = abc.bind(this, 1, 2, 3, 4, 5);  
test() // or abc.bind(this, 1, 2, 3, 4, 5)(); // Output: [1, 2, 3, 4, 5] 