// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (var each of dairy) {
        console.log(each);
    }
}
// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (var kv of Object.keys(bird)) {
        console.log(`${kv}: ${bird[kv]}`);
    }
}

// Task 3
function animalCan() {
    for (var kv of Object.keys(bird)) {
        console.log(`${kv}: ${bird[kv]}`);
    }
    for (var kv of Object.keys(Object.getPrototypeOf(bird))) {
        console.log(`${kv}: ${bird[kv]}`);
    }
}