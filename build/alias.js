"use strict";
//--------------------------------------------
//type alias
const some = 10; // type: string | number | boolean
//--------------------------------------------
// typeof
const x = { a: 'lalaka', b: 10 };
const y = { a: 'malaka', b: 15 }; // type: {a: string, b: number}
const z = { a: 'palaka', b: 30 }; //type: {a: string, b: number}
const any = {
    a: 12,
    b: 'str',
    q: true,
};
const few = { a: 10, b: 'lalaka' };
const map = { a: 10 };
const way = { a: 15, b: 'lalaka' };
const state = { a: 20, c: true };
const div = { textContent: 'lalaka', width: 100, height: 15 };
const button = { tabIndex: 0, width: 500, height: 300 };
let dom = div;
dom = button;
const tree = [dom, div, button, div, button];
const albumsCountData = {
    'Daft Punk': 1,
    Deadmau5: 5,
    'Rob Made': 3,
    Moby: 8,
};
const coords2 = { x: 1, y: 2, z: 3 };
const coordsFirst = { x: 1990, y: 2020 };
const coordsSecond = { x: 1990, y: 2020, z: 2022 };
let request = {
    mainURL: 'https://skillfactory.ru',
    subURL: 'https://zvuk.com',
};
