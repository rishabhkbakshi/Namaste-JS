

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success => p2');
    }, 10000);
});

// // async function always returns a promise
// // if you are returning a value, still the async function consider it as a promise
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
    const val = await promise;
    console.log('Rishabh Bakshi');
    console.log(val);

    const val2 = await promise2;
    console.log('Rishabh Bakshi - 2');
    console.log(val2);
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