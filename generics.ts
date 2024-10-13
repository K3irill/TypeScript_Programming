class Human {
	public name: string = 'Ivan'
}
class Carr {
	public number: number = 123
}
class Dog {
	public hasFourLegs: boolean = true
}
class Robot {
	public bipbop: boolean = true
}
class Camera<T> {
	private objects: Array<T> = []
	public collectObject(object: T): void {
		this.objects.push(object)
	}
}

const human = new Human()
const carr = new Car()
const dog = new Dog()
const robot = new Robot()

const camera = new Camera<Car | Human | Robot >()
const camera1 = new Camera<Human>()
const camera2 = new Camera<Carr>()
const camera3 = new Camera<Robot>()
const camera4 = new Camera<Dog>()
//

class TypeChecker<T> {
	public getType(value: T): string {
		return typeof value
	}
}
const checker = new TypeChecker<number | string | undefined>()
console.log(checker.getType(1))
