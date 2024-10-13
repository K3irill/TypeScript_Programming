"use strict";
let entityOne = 1;
//
let entityTwo = 'something';
//
let entityThree = true;
//
let entityFour;
//
let entityFive;
//
let entitySix;
//
let entitySeven;
//
let entityEight; //empty-пустота
//
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));
links.youtube;
links.vk;
let bookType = 'Big Ocean';
const books = ['Tom Sawyer', 'Alice', 'Home alone'];
let users = {
    name: 'Kail',
    age: 20,
};
let receipt = {
    price: 120,
    date: '15.10.2024',
    title: 'Order №1',
    subtitle: "Kail's Cafe",
    position1: {
        price: 185,
        title: 'mango - bubble tea',
        isReady: false,
    },
    position2: {
        price: 215,
        title: 'coffee & one bagel',
        isReady: true,
    },
};
let receiptIn = {
    price: 120,
    date: '15.10.2024',
    title: 'Order №1',
    subtitle: "Kail's Cafe",
    position1: {
        price: 185,
        title: 'mango - bubble tea',
        isReady: false,
    },
    position2: {
        price: 215,
        title: 'coffe & one bagel',
        isReady: true,
    },
};
let book = 0;
book = 'Game of Thrones';
book = false;
book();
book.what.a.hell = 'LOL';
let testUnknown = 0;
testUnknown = 'Game of Thrones';
testUnknown = true;
