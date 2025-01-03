//  Before throttled
const expensive = () => {
    console.log('Expensive');
}

window.addEventListener('resize', expensive);

// Throttled version
const throttle = (fn, limit) => {
    let flag = true;
    return function () {
        console.log(arguments);
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
};

const betterExpensive = throttle(expensive, 5000);

window.addEventListener('resize', betterExpensive);
