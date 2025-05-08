/**
 * Polyfill for bind method
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value,
 * with a given sequence of arguments preceding any provided when the new function is called.
 * It allows you to set the value of this in a function, which is particularly useful when passing a function as a callback.
 * 
 */
let nameObject = {
    firstName: 'Rishabh',
    lastName: 'Bakshi'
}

let printName = function (state, country) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + state + ' (' + country + ')');
}

let printNameWithBind = printName.bind(nameObject, 'Rajasthan', 'India');

printNameWithBind(); // Output: Rishabh Bakshi


// Using custom bind method 
// The custom bind method is a way to create a new function that, when called, has its this keyword set to the provided value,
// with a given sequence of arguments preceding any provided when the new function is called.
// It allows you to set the value of this in a function, which is particularly useful when passing a function as a callback.
Function.prototype.mybind = function (...args) {
    let obj = this; // here 'this' is the function which is calling the mybind method
    // when we have one parameter on function calling
    // return function () {
    //     obj.call(args[0]); // here args[0] is the first parameter which is passed in mybind method
    // }

    // when we have more than one parameter on .custombind (like mybind) method
    // let params = args.slice(1); // .slice(1) - it will return all the elements of array except the first one
    // return function () {
    //     obj.apply(args[0], params); // here args[0] is the first parameter which is passed in mybind method and params are the other parameters which are passed in mybind method
    // }

    // when we have more than one parameter along with passing parameter in method calling which are returned by .custombind (like mybind) method
    let params = args.slice(1); // .slice(1) - it will return all the elements of array except the first one
    /**
     * here ...arg2 represent the all parameters in the calling methods which are returned by .custombind (like mybind) method
     */
    return function (...args2) {
        // Approach 1
        // args2.forEach((param) => {
        //     params.push(param); // here we are pushing the args2 array elements in params array
        // });
        // obj.apply(args[0], params);

        // Approach 2 - using concat method
        // let finalArr = params.concat(args2); // here we are merging the params and args2 array using concat method
        // obj.apply(args[0], finalArr); 

        // Approach 3 - simple and easy to understand - using spread operator
        let finalArr = [...params, ...args2]; // here we are merging the params and args2 array using spread operator
        obj.apply(args[0], finalArr); // here args[0] is the first parameter which is passed in mybind method and finalArr are the other parameters which are passed in mybind method
    }
}

// when we have one parameter on function calling
let printNameWithBind2 = printName.mybind(nameObject, 'Rajasthan');
// when we have more than one parameter on function calling
printNameWithBind2('India'); // Output: Rishabh Bakshi from Rajasthan (India)
