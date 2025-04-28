
const GITHUB_API_URL = 'https://api.github.com/users/rishabhkbakshi'
const user = fetch(GITHUB_API_URL);

console.log(user);

user.then(function (data) {
    console.log(data)
});

// Promise is a built-in object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It is used to handle asynchronous operations in a more manageable way than traditional callback functions.
// A Promise is in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, resulting in a resolved value.
// 3. Rejected: The operation failed, resulting in a reason for the failure (an error).
//
// A Promise can be created using the Promise constructor, which takes a function (executor) with two arguments: resolve and reject. 
// The resolve function is called when the operation is successful, and the reject function is called when it fails.
//
// The Promise object has several methods to handle the result of the asynchronous operation:
// 1. then(): Adds a callback to be executed when the Promise is fulfilled. It returns a new Promise, allowing for chaining.
// 2. catch(): Adds a callback to be executed when the Promise is rejected. It also returns a new Promise.
// 3. finally(): Adds a callback to be executed when the Promise is settled (fulfilled or rejected), regardless of the outcome. It does not modify the result or error of the Promise.


const cart = [{
    item: 'shoes',
    price: 2000
}, {
    item: 'kurtas',
    price: 1500
}, {
    item: 'pants',
    price: 1000
}];

let walletBalance = 10000;

createOrder(cart)
    .then(function (orderSummary) {
        if (orderSummary.orderId) {
            console.log('Order created successfully');
        }
        // always use return statement to pass the value to next then block
        // if you are not using return statement then the next then block will not get the value of this block
        return orderSummary;
    }).then(function (orderSummary) {
        return proceedToPayment(orderSummary);
    }).then(function (paymentSummary) {
        return paymentSummary;
    })
    // if you want to handle the error of this block then you can use .catch() method here
    // but still the next .then() block will be executed
    // .catch(function (err) {
    //     console.log('Error', err.message);
    // }) 
    .then(function (paymentSummary) {
        return updateWallet(paymentSummary);
    }).then(function (walletBalance) {
        console.log('Payment successful. Your updated wallet balance is', walletBalance);
        return walletBalance.walletBalance;
    }).catch(function (err) {
        console.log('Error', err.message);
    }); // this .catch will catch any error that occurs in the promise chain


function createOrder(cart) {

    // promise has 2 methods resolve and reject
    // resolve is used to resolve the promise and reject is used to reject the promise
    // resolve and reject are the functions that are passed to the executor function of the promise
    // these methods are provided or desinged by the javascript engine
    const pr = new Promise(function (resolve, reject) {
        // check if the cart is empty or not
        // if the cart is empty then reject the promise with an error message
        if (!validateCart(cart)) {
            const error = new Error('Cart is not valid');
            reject(error)
        }

        // if the cart is not empty then create the order
        // and resolve the promise with the order summary
        // here we are simulating the order creation process with a timeout of 5 seconds
        // In a real-world scenario, you would make an API call to create the order
        const orderId = '1234';
        if (orderId) {
            // Simulate order creation
            // In a real-world scenario, you would make an API call to create the order
            // and resolve the promise with the order summary
            // For this example, we'll assume the order is created successfully
            // and resolve the promise with the order summary
            // setTimeout is used to simulate the delay in order creation
            setTimeout(
                function () {
                    resolve({
                        orderId: orderId,
                        finalAmount: calculateTotalPrice(cart)
                    })
                }
                , 5000);
        }

    });

    return pr;
}

function calculateTotalPrice(cart) {
    // map will return the array of prices of all items in the cart
    let totalPrice = cart.map((elem) => elem.price).reduce(function (acc, curr) {
        return acc + curr
    }, 0);
    return totalPrice;
}

function validateCart(cart) {
    return cart.length > 0;
}

function proceedToPayment(orderSummary) {
    return new Promise(function (resolve, reject) {
        if (orderSummary.orderId) {
            // Simulate payment processing
            setTimeout(function () {
                console.log('Payment processing...');

                // Simulate payment success
                // In a real-world scenario, you would check the payment status here
                // and resolve or reject the promise accordingly.
                // For this example, we'll assume the payment is successful
                resolve({
                    orderId: orderSummary.orderId,
                    info: 'Payment successful',
                    finalAmount: orderSummary.finalAmount
                });
                console.log('Payment successful. Your order ID is', orderSummary.orderId);
            }, 2000);


        } else {
            reject(new Error('Failed to create order'));
        }
    });
}

function updateWallet(paymentInfo) {
    return new Promise(function (resolve, reject) {
        // Simulate wallet update
        // In a real-world scenario, you would update the wallet balance in the database or API
        // For this example, we'll assume the wallet balance is updated successfully
        // and resolve the promise with the updated wallet balance
        if (paymentInfo.info == 'Payment successful') {
            resolve({
                walletBalance: walletBalance - paymentInfo.finalAmount
            })
        } else {
            reject(new Error('Payment failed'));
        }
    });
}
