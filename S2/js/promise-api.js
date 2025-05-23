const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("p1 resolved successfully")
        // reject("p1 rejected")
    }, 3000);
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("p2 resolved successfully")
        // reject("p2 rejected")
    }, 3000);
})


const p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("p3 resolved successfully")
        // reject("p3 rejected")
    }, 1000);
})

/**
 * Promise.all is failure seeker. If all promises are settled resolve then it will be returned value of all promises
 * But it will take 3sec to return value if any promise is settled reject then immediately it will return error 
 * like if 1st promise is rejected then it will not wait or other to resolve/reject.
 * 
 * it will return the error of 1st promise which is rejected.
 * if all promises are rejected then it will return the error of 1st promise which is rejected.
 * if all promises are resolved then it will return the array of all resolved values.
 * if any promise is rejected then it will return the error of that promise.
 * 
 */
Promise.all([p1, p2, p3]).then(function (result) {
    console.log(`Promise.all ====> `, result);
}).catch(function (error) {
    console.error(`Promise.all ====> `, error);
})

/**
 * Promise.allSettled will wait to settle all the promises whether the promise is resolved or rejected.
 * After setteling all the promises. it will return the array of object which describe the final status of all the promises
 * 
 * if promise is resolved then it will return the object with status 'fulfilled' and value of that promise.
 * if promise is rejected then it will return the object with status 'rejected' and reason of that promise.
 * 
 */
Promise.allSettled([p1, p2, p3]).then(function (result) {
    console.log(`Promise.allSettled ====> `, result);
}).catch(function (error) {
    console.error(`Promise.allSettled ====> `, error);
})

/**
 * Promise.race is settle seeker. 
 * If any promise is settled resolve or resolved then it will be returned result of that promise
 * it will ignore all other promises.
 * 
 * Promise.race => If any promise is settled resolve or rejected then it will be returned result of that promise
 * 
 */
Promise.race([p1, p2, p3]).then(function (result) {
    console.log(`Promise.race ====> `, result);
}).catch(function (error) {
    console.error(`Promise.race ====> `, error);
})

/**
 * Promise.any is success seekar. If any of the all promises is settled success then it wil return value of this promise
 * if other promises are rejected then it will ignore.
 * if all promises are rejected then it will return 'AggregateError: All promises were rejected'
 * AggregateError is basically the combination of errors from all promises.
 * if user wants to access all the errors then he need to use error.errors
 * 
 * Promise.any - If all promises are rejected then it will return AggregateError: All promises were rejected
 * If any promise is resolved then it will return the value of that promise.
 * 
 * 
 */
Promise.any([p1, p2, p3]).then(function (result) {
    console.log(`Promise.any ====> `, result);
}).catch(function (error) {
    console.error(`Promise.any ====> `, error.errors);
})
