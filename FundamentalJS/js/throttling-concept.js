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

const betterExpensive = throttle(expensive, 5000);

window.addEventListener('resize', betterExpensive); // This line will execute when window is resized
// betterExpensive will execute throttle function when window is resized
