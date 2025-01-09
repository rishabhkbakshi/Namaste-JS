let radius = [4, 2, 1, 3, 5];

function circleCalculation(radius, type) {
    let result = [];
    for (let i = 0; i < radius.length; i++) {
        if (type === 'area') {
            result.push(Math.PI * radius[i] * radius[i]);
        } else if (type === 'circumference') {
            result.push(2 * Math.PI * radius[i]);
        } else if (type === 'diameter') {
            result.push(2 * radius[i]);
        }
    }
    return result;
}

console.log(circleCalculation(radius, 'area'));
console.log(circleCalculation(radius, 'circumference'));
console.log(circleCalculation(radius, 'diameter'));