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
Function.prototype.mybind = function (...args) {
    let obj = this;
    // when we have one parameter on function calling
    // return function () {
    //     obj.call(args[0]);
    // }

    // when we have more than one parameter on .custombind (like mybind) method
    // let params = args.slice(1); // .slice(1) - it will return all the elements of array except the first one
    // return function () {
    //     obj.apply(args[0], params);
    // }
    
    // when we have more than one parameter along with passing parameter in method calling which are returned by .custombind (like mybind) method
    let params = args.slice(1);
    /**
     * here ...arg2 represent the all parameters in the calling methods which are returned by .custombind (like mybind) method
     */
    return function (...args2) {
        let finalArr = [...params, ...args2];
        obj.apply(args[0], finalArr);
    }
}

let printNameWithBind2 = printName.mybind(nameObject, 'Rajasthan');
printNameWithBind2('India'); // Output: Rishabh