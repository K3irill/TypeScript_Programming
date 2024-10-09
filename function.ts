// examples
function foo(param1: string, param2: number): number {
	return param1.length + param2
}

const fooo = (param1: boolean, param2: number[]): number[] => {
	return param1 ? param2.slice(0, 1) : param2.slice(1, 2)
}

//--------------------

function reverse(str: string): string {
	if (str === '') return str
	const lastIdx = str.length - 1
	return str[lastIdx] + reverse(str.slice(0, lastIdx))
}
console.log(reverse('hello'))

// void
function log(): void {
	console.log('hi everyone!')
}

//never

function error(message: string): never {
	throw new Error(message)
}

//rest
function foooo(...rest: number[]) {}
//this
function foo3(this: number, b: number): number {
	const c: number = this + b
	return c
}

foo3.call(10, 5)
