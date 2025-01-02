// -------------------call--------------------------
// you can write a method that can be used on different objects using call
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

nameObj.printFullName.call(nameObj2); // Output: Apurva Jain    

// In general we can do like that
let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + ' from ' + hometown + ', ' + state);
}
printFullName.call(nameObj, 'Merta Road', 'Rajasthan');
printFullName.call(nameObj2, 'Jaipur', 'Rajasthan');


//--------------------------------Apply--------------------------------
// in .apply method, you have to give the object as a first parameter and rest all parameter will be in array
printFullName.apply(nameObj, ['Merta Road', 'Rajasthan']);
printFullName.apply(nameObj2, ['Jaipur', 'Rajasthan']);

//--------------------------------Bind--------------------------------
//It is same as call method, only difference is that .bind method return the function
// you can call it sometimes later
// .bind method creates a new function, but it does not call it immediately.

let printFullNameBound = printFullName.bind(nameObj, 'Merta Road', 'Rajasthan');
printFullNameBound();

let printFullNameBound2 = printFullName.bind(nameObj2, 'Jaipur', 'Rajasthan');
printFullNameBound2();