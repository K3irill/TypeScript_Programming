"use strict";
var ZipCode;
(function (ZipCode) {
    ZipCode[ZipCode["Moscow"] = 127000] = "Moscow";
    ZipCode[ZipCode["NewYork"] = 345890] = "NewYork";
    ZipCode[ZipCode["Berlin"] = 490678] = "Berlin";
    ZipCode[ZipCode["Paris"] = 141237] = "Paris";
})(ZipCode || (ZipCode = {}));
console.log(ZipCode.Moscow); // 127000
//
var Direction;
(function (Direction) {
    Direction[Direction["South"] = 0] = "South";
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["West"] = 145] = "West";
    Direction[Direction["East"] = 146] = "East";
})(Direction || (Direction = {}));
console.log(Direction.North); // 1
console.log(Direction.West); // 145
console.log(Direction.East); // 146
