"use strict";
/*
   task 1 Укажите значения, чтобы не было ошибок компиляции
*/
const a1 = 12;
const a2 = true;
const a3 = 'goal';
const a4 = [1, 2, 3, 4];
const a5 = ['str1', 'str2'];
const a6 = ['string'];
const a7 = [true, 12];
const a8 = [[12], ['str1', 'str2']];
const a10 = [
    12,
    [11],
    [[11], [[12]]],
];
/*
   task 2 Укажите типы, чтобы не было ошибок компиляции
*/
const b1 = 70;
const b2 = false;
const b3 = 'lalaka';
const b4 = [true, false];
const b6 = [10, '10'];
const b7 = [...[true]];
const b8 = [[[...[10]]], [[...['10']]]];
const check = b4[3];
/*
    task 3 Обявите переменные c1-c4, чтобы не было ошибок компиляции
    в этом блоке и блоке с проверками
*/
const c1 = 5;
const c2 = 'string';
const c3 = [true, 1];
const c4 = ['str'];
/* Блок проверок */
const check_1 = c1 + 5;
const check_2 = c2.substr(0);
const check_3 = c3[0];
const check_4 = c3[1] + 5;
const check_5 = c4.push('lalaka');
//
// export const digitize = (n: number): number[] => {
// 	return String(n).split(',').reverse()
// }
