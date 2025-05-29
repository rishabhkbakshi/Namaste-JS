// Debouncing in JAVASCRIPT
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
// which can cause performance issues. It is commonly used in scenarios where a function is triggered by events that can fire rapidly, such as scrolling, resizing, or typing in an input field.
// The idea is to group a series of sequential calls to a function into a single call.
// This is useful for performance optimization, especially in cases where the function being called is expensive to run or when you want to limit the number of times a function is executed in a given time frame.

/**
 * Debouncing is a technique in JavaScript that limits the rate at which a function can be executed. 
 * It's commonly used to improve website performance and user experience by preventing a function 
 * from firing too frequently in response to events like scrolling, resizing, or typing.
 */
let counter = 0;
// This is a counter to count the number of times the function is called
let getData = (val) => {
    // calls an API and gets the data
    console.log('Fetching data...', counter++, ' times', 'Value => ', val); // Simulating an API call
    // Here we are just simulating the API call by logging the message to the console.
}

// when you are using non-arrow function
// function getData() {
//     // calls an API and gets the data
//     console.log('Fetching data...', counter++, ' times', 'Value => ', arguments[0]); // Simulating an API call
//     // Here we are just simulating the API call by logging the message to the console.
// }

/**
 * This function is used to debounce the getData function.
 * It takes a function and a delay as arguments and returns a new function that will only execute the original function after the specified delay has passed since the last time it was invoked.
 * @param {This function represent the getData function} fn 
 * @param {It represent the specified delay after that the event will trigger } delay 
 * @returns the inner function which actually debounced the event
 */
let debouce = function (fn, delay) {
    let timer; // this will hold the timer ID
    return function () { // this is the inner function which will be returned by the debouce function
        // This function will be called when the event is triggered
        // It will debounce the getData function
        // It means it will wait for the specified delay before executing the getData function
        let context = this; // here this is the window object 
        // as we know that 'this' in arrow function represent the lexical parent object.
        let args = arguments; // arguments => to handle the arguments if it call. arguments is only available in non-arrow function.
        // So here we are using non-arrow function to get the arguments.
        // arguments => is an array-like object accessible inside functions that contains the values of the arguments passed to that function. 
        clearTimeout(timer); // clear the timer
        // If the timer is already set, clear it to prevent the function from executing
        // This will be executed after delay milliseconds
        timer = setTimeout(() => {
            fn.apply(context, args); // getData method will be called
        }, delay);
    }
}

let debounceData = debouce(getData, 300);