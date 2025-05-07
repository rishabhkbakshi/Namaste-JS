// Throttling in JAVASCRIPT
// Throttling is a programming practice used to ensure that time-consuming tasks do not fire so often,
// which can cause performance issues. It is commonly used in scenarios where a function is triggered by events that can fire rapidly, such as scrolling, resizing, or typing in an input field.
// The idea is to group a series of sequential calls to a function into a single call.

/**
 * First of all what is throttling in JS => 
 * Throttling is a technique used to control the rate at which a function is executed. 
 * It ensures that the function is called at most once within a specified time interval, 
 * regardless of how many times the event triggering the function is fired
 */

//  Before throttled
const expensive = () => {
    console.log('Expensive');
}

// window.addEventListener('resize', expensive);// This line will execute when window is resized

// Throttled version
/**
 * This function is used to throttle the expensive function.
 * It takes a function and a limit as arguments and returns a new function that will only execute the original function after the specified limit has passed since the last time it was invoked.
 * 
 * @param {This function represent the expensive function} fn 
 * @param {It represent the specified time interval after that the event will trigger } limit 
 * @returns the inner function which actually throttled
 */
const throttle = (fn, limit) => {
    /**
     * we can achieve throttling by using the concept of closure. (Closure basically it will attached the flag variable to the inner function)
     * flag is a boolean variable to check if the function should be executed or not.
     * true means function should be executed.
     * false means function should be ignored.
     */
    let flag = true;
    return function () {
        let context = this; // here this is the window object 
        // as we know that 'this' in arrow function represent the lexical parent object.
        let args = arguments; // arguments => to handle the arguments if it call.
        // arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function. 
        if (flag) {
            fn.apply(context, args); // here expensible method will be called
            flag = false; // flag will be false just after the execution of exepensive method

            /**
             * this code will set the flag value to true 
             * it means now is the time to call the function again after certain limit of time has passed
             */
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
};

// This is the throttled version of the expensive function
// It will only execute the expensive function once every 5000 milliseconds (5 seconds)
// This means that if the event is triggered multiple times within 5 seconds, the expensive function will only be called once.
// This is useful for performance optimization, especially in cases where the function being called is expensive to run or when you want to limit the number of times a function is executed in a given time frame.
const betterExpensive = throttle(expensive, 5000);

window.addEventListener('resize', betterExpensive); // This line will execute when window is resized
// betterExpensive will execute throttle function when window is resized

/**
 * So the difference between debouncing and throttling is that debouncing will wait for a certain amount of time before executing the function,
 * while throttling will execute the function at a fixed interval of time.
 * Debouncing is useful for scenarios where you want to wait for a user to stop typing before sending an API request,
 * while throttling is useful for scenarios where you want to limit the rate at which a function is executed, such as when scrolling or resizing the window.
 * In summary, debouncing and throttling are both techniques used to control the rate at which a function is executed in JavaScript.
 * 
 * in other words we can say that
 * Debouncing is used to delay the execution of a function until a certain amount of time has passed since the last time it was invoked,
 * while throttling is used to limit the rate at which a function is executed to a fixed interval of time.
 * Both techniques can be useful for improving performance and user experience in web applications.
 * 
 * in 'rxjs' we can use debounceTime and throttleTime operators to achieve the same thing.
 */
