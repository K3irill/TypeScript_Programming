let entityOne: number = 1;
//
let entityTwo: string = "something";
//
let entityThree: boolean = true;
//
let entityFour: undefined;
//
let entityFive: null;
//
let entitySix: any;
//
let entitySeven: unknown;
//
let entityEight: void; //empty-пустота
//

enum links {
  youtube = "https://youtube.com/",
  vk = "https://vk.com",
  facebook = "https://facebook.com/",
}

links.youtube;
links.vk;

let bookType: string | null = "Big Ocean";
const books: string[] = ["Tom Sawyer", "Alice", "Home alone"];

let users: { name: string; age: number } = {
  name: "Kail",
  age: 20,
};

// type
// нельзя переопределять свойства после создания.
type ReceiptType = {
  price: number;
  date: string;
  title: string;
  subtitle: string;
  position1: {
    price: number;
    title: string;
    isReady: boolean;
  };
  position2: {
    price: number;
    title: string;
    isReady: boolean;
  };
};

let receipt: ReceiptType = {
  price: 120,
  date: "15.10.2024",
  title: "Order №1",
  subtitle: "Kail's Cafe",
  position1: {
    price: 185,
    title: "mango - bubble tea",
    isReady: false,
  },
  position2: {
    price: 215,
    title: "coffe & one bagel",
    isReady: true,
  },
};
//or

//interface
interface ReceiptTypeIn {
  price: number;
  date: string;
  title: string;
  subtitle: string;
  position1: {
    price: number;
    title: string;
    isReady: boolean;
  };
  position2: {
    price: number;
    title: string;
    isReady: boolean;
  };
}

let receiptIn: ReceiptTypeIn = {
  price: 120,
  date: "15.10.2024",
  title: "Order №1",
  subtitle: "Kail's Cafe",
  position1: {
    price: 185,
    title: "mango - bubble tea",
    isReady: false,
  },
  position2: {
    price: 215,
    title: "coffe & one bagel",
    isReady: true,
  },
};

let book: any = 0;

book = "Game of Thrones";
book = false;
book();
book.what.a.hell = "LOL";

let testUnknown: unknown = 0;

testUnknown = "Game of Thrones";
testUnknown = true;
