"use strict";
class Human {
    constructor() {
        this.name = 'Ivan';
    }
}
class Carr {
    constructor() {
        this.number = 123;
    }
}
class Dog {
    constructor() {
        this.hasFourLegs = true;
    }
}
class Robot {
    constructor() {
        this.bipbop = true;
    }
}
class Camera {
    constructor() {
        this.objects = [];
    }
    collectObject(object) {
        this.objects.push(object);
    }
}
const human = new Human();
const carr = new Car();
const dog = new Dog();
const robot = new Robot();
const camera = new Camera();
const camera1 = new Camera();
const camera2 = new Camera();
const camera3 = new Camera();
const camera4 = new Camera();
//
class TypeChecker {
    getType(value) {
        return typeof value;
    }
}
const checker = new TypeChecker();
console.log(checker.getType(1));
