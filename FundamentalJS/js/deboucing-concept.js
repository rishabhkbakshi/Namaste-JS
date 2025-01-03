//Debouncing in JAVASCRIPT

let counter = 0;
let getData = () => {
    // calls an API and gets the data
    console.log('Fetching data...', counter++);
}

let debouce = function (fn, delay) {
    let timer;
    return function () {
        // This will be executed after delay milliseconds
        let context = this; // here this is the window object, 
        // as we know that 'this' in arrow function represent the lexical parent object.
        let args = arguments; // 
        // arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function. 
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

let debounceData = debouce(getData, 300);