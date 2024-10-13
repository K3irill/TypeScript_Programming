"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
exports.basicOp = basicOp;
exports.grow = grow;
/*
   task 1 Укажите значения, чтобы не было ошибок компиляции
*/
var a1 = 12;
var a2 = true;
var a3 = 'goal';
var a4 = [1, 2, 3, 4];
var a5 = ['str1', 'str2'];
var a6 = ['string'];
var a7 = [true, 12];
var a8 = [[12], ['str1', 'str2']];
var a10 = [
    12,
    [11],
    [[11], [[12]]],
];
/*
   task 2 Укажите типы, чтобы не было ошибок компиляции
*/
var b1 = 70;
var b2 = false;
var b3 = 'lalaka';
var b4 = [true, false];
var b6 = [10, '10'];
var b7 = [true];
var b8 = [[[10]], [['10']]];
var check = b4[3];
/*
    task 3 Обявите переменные c1-c4, чтобы не было ошибок компиляции
    в этом блоке и блоке с проверками
*/
var c1 = 5;
var c2 = 'string';
var c3 = [true, 1];
var c4 = ['str'];
/* Блок проверок */
var check_1 = c1 + 5;
var check_2 = c2.substr(0);
var check_3 = c3[0];
var check_4 = c3[1] + 5;
var check_5 = c4.push('lalaka');
//
var digitize = function (n) {
    return String(123)
        .split('')
        .reverse()
        .map(function (num) {
        return Number(num);
    });
};
exports.digitize = digitize;
function basicOp(operation, value1, value2) {
    var result = 0;
    switch (operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
    }
    return result;
}
console.log(basicOp('+', 4, 7));
function grow(arr) {
    return arr.length > 0 ? arr.reduce(function (acc, num) { return acc * num; }) : 0;
}
console.log(grow([1, 2, 3, 4]));
function countRepeats(str) {
    var count = 0;
    for (var i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        }
    }
    return count;
}
function fill(arr, method) {
    if (method === void 0) { method = 1; }
    var n = arr.length;
    if (method == 1) {
        for (var i = n - 2; i >= 0; i--) {
            if (arr[i] === undefined) {
                arr[i] = arr[i + 1];
            }
        }
    }
    else {
        for (var i = 1; i < n; i++) {
            if (arr[i] === undefined) {
                arr[i] = arr[i - 1];
            }
        }
    }
    return arr;
}
