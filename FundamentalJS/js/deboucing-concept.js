//Debouncing in JAVASCRIPT

/**
 * Debouncing is a technique in JavaScript that limits the rate at which a function can be executed. 
 * It's commonly used to improve website performance and user experience by preventing a function 
 * from firing too frequently in response to events like scrolling, resizing, or typing.
 */
let counter = 0;
let getData = () => {
    // calls an API and gets the data
    console.log('Fetching data...', counter++);
}

/**
 * 
 * @param {This function represent the getData function} fn 
 * @param {It represent the specified delay after that the event will trigger } delay 
 * @returns the inner function which actually debounced the event
 */
let debouce = function (fn, delay) {
    let timer;
    return function () {
        let context = this; // here this is the window object 
        // as we know that 'this' in arrow function represent the lexical parent object.
        let args = arguments; // arguments => to handle the arguments if it call.
        // arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function. 
        clearTimeout(timer); // clear the timer

        // This will be executed after delay milliseconds
        timer = setTimeout(() => {
            fn.apply(context, args); // getData method will be called
        }, delay);
    }
}

let debounceData = debouce(getData, 300);