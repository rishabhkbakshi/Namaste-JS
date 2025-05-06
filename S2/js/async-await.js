

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success => p2');
    }, 10000);
});

// async function always returns a promise
// if you are returning a value, still the async function consider it as a promise
// if the asyc function is returned a promise then it will not wrap it in another promise
// async function getData() {
//     return promise; //'Bakshi';
// }

// const dataPromise = getData();

// dataPromise.then(function (data) {
//     console.log(data);
// });

// // asyns/await combo used to handle promises
// function getData() {
//     promise.then(function (data) {
//         console.log(data)
//     });
//     console.log('Rishabh Bakshi');
// }

// getData();

// // await is a keyword. it will used only inside the async function
async function handlePromise() {
    console.log('-----Testing--------------');
    // JS engine was waiting for promise to resolved
    // in line no. 43 it will wait for 5 sec to resolve the promise
    // then it will print 'Rishabh Bakshi'
    // then it will print the value of promise
    // here the JS engine will suspend the call stack for 5 sec
    // and then it will print the value of promise
    const val = await promise1;
    console.log('Rishabh Bakshi');
    console.log(val);
    
    // in case of these 2 line 
    // the JS engine will for 10 secs (promise1 is taking 5 secs and promise2 is taking 10 secs)
    // it will wait for 5 more seconds to resolve the promise2 and 
    // then it will print 'Rishabh Bakshi - 2'
    const val2 = await promise2;
    console.log('Rishabh Bakshi - 2');
    console.log(val2);


    // if you are mentioning 10 sec to resolve promise1 and 5 sec to resolve promise2
    // then it take 10 sec to resolve the promise1 and 5 sec to resolve the promise2
    // it means both will print at the same time
    // it means the JS engine will wait for 10 sec to resolve the promise1 and 5 sec to resolve the promise2
}

handlePromise();


const GITHUB_API_URL = 'https://api.github.com/users/rishabhkbakshi';

async function handleAPIPromise() {
    try {
        const data = await fetch(GITHUB_API_URL);
        const jsonData = await data.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error)
    }
}

/**
 * You can handle the error by using try/catch 
 * 
 * also you can do the same using .catch() function
 */

handleAPIPromise()
// handleAPIPromise().catch(function(error) {
//     console.log(error)
// });