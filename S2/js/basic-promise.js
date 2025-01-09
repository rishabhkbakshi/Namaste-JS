
// const GITHUB_API_URL = 'https://api.github.com/users/rishabhkbakshi'

// const user = fetch(GITHUB_API_URL);

// console.log(user);

// // user.then(function (data) {
// //     console.log(data)
// // });


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
        return orderSummary;
    }).then(function (orderSummary) {
        return proceedToPayment(orderSummary);
    }).then(function (paymentSummary) {
        return paymentSummary;
    }).then(function (paymentSummary) {
        return updateWallet(paymentSummary);
    }).then(function (walletBalance) {
        console.log('Payment successful. Your updated wallet balance is', walletBalance);
        return walletBalance.walletBalance;
    }).catch(function (err) {
        console.log('Error', err.message);
    });


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const error = new Error('Cart is not valid');
            reject(error)
        }

        const orderId = '1234';
        if (orderId) {
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
            resolve({
                orderId: orderSummary.orderId,
                info: 'Payment successful',
                finalAmount: orderSummary.finalAmount
            });
        } else {
            reject(new Error('Failed to create order'));
        }
    });
}

function updateWallet(paymentInfo) {
    return new Promise(function (resolve, reject) {
        if (paymentInfo.info == 'Payment successful') {
            resolve({
                walletBalance: walletBalance - paymentInfo.finalAmount
            })
        } else {
            reject(new Error('Payment failed'));
        }
    });
}
