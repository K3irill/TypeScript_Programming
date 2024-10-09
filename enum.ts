enum ZipCode {
	Moscow = 127000,
	NewYork = 345890,
	Berlin = 490678,
	Paris = 141237,
}

console.log(ZipCode.Moscow) // 127000

//

enum Direction {
	South,
	North,
	West = 145,
	East,
}
console.log(Direction.North) // 1
console.log(Direction.West) // 145
console.log(Direction.East) // 146
