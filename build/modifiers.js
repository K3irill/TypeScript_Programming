"use strict";
//with - private
class CarExample {
    constructor() {
        this.carNumber = 'a123bc12';
    }
    startEngine() {
        this.addFuelToEngine();
        console.log('started');
    }
    addFuelToEngine() {
        console.log('added fuel to engine');
    }
}
const car = new CarExample();
car.startEngine();
// with - protected
class Car {
    constructor() {
        this.carNumber = 'a123bc12';
    }
    startEngine() {
        this.addFuelToEngine();
        console.log('started!');
    }
    addFuelToEngine(fuelType = 'gas') {
        console.log(`added ${fuelType} to engine!`);
    }
}
class electroCar extends Car {
    startEngine() {
        this.addFuelToEngine('electricity');
        console.log('started');
    }
}
//
class Hotel {
    constructor(freeRoomsCount) {
        this.freeRoomsCount = freeRoomsCount;
    }
    takeARoom() {
        this.freeRoomsCount--;
    }
    isRoomAvailable() {
        return this.freeRoomsCount > 0;
    }
}
