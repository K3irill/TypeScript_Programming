/*
   task 1 Укажите значения, чтобы не было ошибок компиляции
*/
const a1: number = 12
const a2: boolean = true
const a3: string = 'goal'
const a4: number[] = [1, 2, 3, 4]
const a5: Array<string> = ['str1', 'str2']
const a6: [string] = ['string']
const a7: [boolean, number] = [true, 12]
const a8: [number[], Array<string>] = [[12], ['str1', 'str2']]
const a10: [number, [number], [[number], [[number]]]] = [
	12,
	[11],
	[[11], [[12]]],
]

/*
   task 2 Укажите типы, чтобы не было ошибок компиляции
*/
const b1: number = 70
const b2: boolean = false
const b3: string = 'lalaka'
const b4: boolean[] = [true, false]
const b6: [number, string] = [10, '10']
const b7: Array<boolean> = [...[true]]
const b8: [[number[]], [string[]]] = [[[...[10]]], [[...['10']]]]

const check: boolean = b4[3]

/*
    task 3 Обявите переменные c1-c4, чтобы не было ошибок компиляции
    в этом блоке и блоке с проверками
*/
const c1: number = 5
const c2: string = 'string'
const c3: [boolean, number] = [true, 1]
const c4: string[] = ['str']

/* Блок проверок */
const check_1: number = c1 + 5
const check_2 = c2.substr(0)
const check_3: boolean = c3[0]
const check_4 = c3[1] + 5
const check_5 = c4.push('lalaka')

//

export const digitize = (n: number): number[] => {
	return String(123)
		.split('')
		.reverse()
		.map(function (num) {
			return Number(num)
		})
}

export function basicOp(
	operation: string,
	value1: number,
	value2: number
): number {
	let result: number = 0
	switch (operation) {
		case '+':
			result = value1 + value2
			break
		case '-':
			result = value1 - value2
			break
		case '*':
			result = value1 * value2
			break
		case '/':
			result = value1 / value2
			break
	}
	return result
}
console.log(basicOp('+', 4, 7))

export function grow(arr: number[]): number {
	return arr.length > 0 ? arr.reduce((acc, num) => acc * num) : 0
}
console.log(grow([1, 2, 3, 4]))

function countRepeats(str: string): number {
	let count = 0
	for (let i = 1; i < str.length; i++) {
		if (str[i] === str[i - 1]) {
			count++
		}
	}
	return count
}

function fill(
	arr: [undefined, number],
	method: number = 1
): [undefined, number] {
	const n = arr.length
	if (method == 1) {
		for (let i = n - 2; i >= 0; i--) {
			if (arr[i] === undefined) {
				arr[i] = arr[i + 1]
			}
			console.log('ojk')
		}
	} else {
		for (let i = 1; i < n; i++) {
			if (arr[i] === undefined) {
				arr[i] = arr[i - 1]
			}
		}
	}

	return arr
}
