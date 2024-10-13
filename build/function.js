"use strict";
// examples
function foo(param1, param2) {
    return param1.length + param2;
}
const fooo = (param1, param2) => {
    return param1 ? param2.slice(0, 1) : param2.slice(1, 2);
};
//--------------------
function reverse(str) {
    if (str === '')
        return str;
    const lastIdx = str.length - 1;
    return str[lastIdx] + reverse(str.slice(0, lastIdx));
}
console.log(reverse('hello'));
// void
function log() {
    console.log('hi everyone!');
}
//never
function error(message) {
    throw new Error(message);
}
//rest
function foooo(...rest) { }
//this
function foo3(b) {
    const c = this + b;
    return c;
}
foo3.call(10, 5);
