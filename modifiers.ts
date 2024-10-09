//with - private

class CarExample {
	public readonly carNumber: string = 'a123bc12'
	public startEngine(): void {
		this.addFuelToEngine()
		console.log('started')
	}
	private addFuelToEngine(): void {
		console.log('added fuel to engine')
	}
}

const car = new CarExample()

car.startEngine()

// with - protected

class Car {
	public readonly carNumber: string = 'a123bc12'
	public startEngine(): void {
		this.addFuelToEngine()
		console.log('started!')
	}

	protected addFuelToEngine(fuelType = 'gas'): void {
		console.log(`added ${fuelType} to engine!`)
	}
}

class electroCar extends Car {
	public startEngine(): void {
		this.addFuelToEngine('electricity')
		console.log('started')
	}
}
