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

const camera1 = new Camera<Human>()
const camera2 = new Camera<Carr>()

//

class TypeChecker<T> {
	public getType(value: T): string {
		return typeof value
	}
}
const checker = new TypeChecker<number | string | undefined>()
console.log(checker.getType(1))
