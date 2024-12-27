let radius = [4, 2, 1, 3, 5];

function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function diameter(radius) {
    return 2 * radius;
}

Array.prototype.circleCalculation = function (radius, logic) {
    let result = [];
    for (let i = 0; i < radius.length; i++) {
        result.push(logic(radius[i]));
    }
    return result;
}

// function circleCalculation(radius, logic) {
//     let result = [];
//     for (let i = 0; i < radius.length; i++) {
//         result.push(logic(radius[i]));
//     }
//     return result;
// }

// console.log(circleCalculation(radius, area));
// console.log(circleCalculation(radius, circumference));
// console.log(circleCalculation(radius, diameter));


console.log(radius.circleCalculation(radius, area));
console.log(radius.circleCalculation(radius, circumference));
console.log(radius.circleCalculation(radius, diameter));
