let radius = [4, 2, 1, 3, 5];

function calculateArea(radius) {
    let areas = [];
    for (let i = 0; i < radius.length; i++) {
        areas.push(Math.PI * radius[i] * radius[i]);
    }
    return areas;
}

console.log(calculateArea(radius));

function calculateCircumference(radius) {
    let circumference = [];
    for (let i = 0; i < radius.length; i++) {
        circumference.push(2 * Math.PI * radius[i]);
    }
    return circumference;
}

console.log(calculateCircumference(radius));

function calculateDiameter(radius) {
    let diameter = [];
    for (let i = 0; i < radius.length; i++) {
        diameter.push(2 * radius[i]);
    }
    return diameter;
}

console.log(calculateDiameter(radius));