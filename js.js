function countRepeats(str) {
	let count = 0
	for (let i = 1; i < str.length; i++) {
		if (str[i] === str[i - 1]) {
			count++
		}
	}
	return count
}
// console.log(countRepeats('abbbbc'))

function fill(arr, method = 0) {
	const n = arr.length

	if (method === -1) {
		// Заполнение по ближайшему правому значению
		for (let i = n - 2; i >= 0; i--) {
			if (arr[i] === undefined) {
				arr[i] = arr[i + 1] // Заменяем на правый элемент
			}
		}
	} else if (method === 1) {
		// Заполнение по ближайшему левому значению
		for (let i = 1; i < n; i++) {
			if (arr[i] === undefined) {
				arr[i] = arr[i - 1] // Заменяем на левый элемент
			}
		}
	} else {
		// Заполнение с выбором ближайшего и меньшего
		const leftValues = new Array(n).fill(undefined)
		const rightValues = new Array(n).fill(undefined)

		// Заполнение ближайшими значениями слева
		for (let i = 0; i < n; i++) {
			if (arr[i] !== undefined) {
				leftValues[i] = arr[i]
			} else if (i > 0) {
				leftValues[i] = leftValues[i - 1] // Копируем значение слева
			}
		}

		// Заполнение ближайшими значениями справа
		for (let i = n - 1; i >= 0; i--) {
			if (arr[i] !== undefined) {
				rightValues[i] = arr[i]
			} else if (i < n - 1) {
				rightValues[i] = rightValues[i + 1] // Копируем значение справа
			}
		}

		// Замена undefined на наименьшее значение из двух массивов
		for (let i = 0; i < n; i++) {
			if (arr[i] === undefined) {
				const leftValue = leftValues[i]
				const rightValue = rightValues[i]

				if (leftValue !== undefined && rightValue !== undefined) {
					arr[i] = Math.min(leftValue, rightValue) // Если оба значения есть, выбираем меньшее
				} else if (leftValue !== undefined) {
					arr[i] = leftValue // Если только слева
				} else if (rightValue !== undefined) {
					arr[i] = rightValue // Если только справа
				}
			}
		}
	}

	return arr
}

// Примеры использования:
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], -1)
) // [1, 1, 2, 2, 2, 2, undefined]
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 0)
) // [1, 1, 1, 1, 2, 2, 2]
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 1)
) // [undefined, 1,

// Примеры использования:
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], -1)
) // [1, 1, 2, 2, 2, 2, undefined]
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 0)
) // [1, 1, 1, 1, 2, 2, 2]
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 1)
) // [undefined, 1, 1, 1, 1, 2, 2]

// Примеры использования:
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], -1)
) // [1, 1, 2, 2, 2, 2, undefined]
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 0)
) // [1, 1, 1, 1, 2, 2, 2]
console.log(
	fill([undefined, 1, undefined, undefined, undefined, 2, undefined], 1)
) // [undefined, 1, 1, 1, 1, 2, 2]

// console.log(fill([undefined, 1, undefined, undefined, undefined, 2, undefined]))

//arr = [None, 1, None, None, None, 2, None]

// fill(arr, -1) == [1, 1, 2, 2, 2, 2, None]  # None replaced by closest int on the right
// fill(arr,  0) == [1, 1, 1, 1, 2, 2, 2]     # None replaced by closest int. If equidistant, choose the smallest int
// fill(arr,  1) == [None, 1, 1, 1, 1, 2, 2]  # None replaced by closest int on the left
