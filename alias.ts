//--------------------------------------------
//type alias

type A = string;
type B = number | boolean;
type C = A | B;
const some: C = 10; // type: string | number | boolean

type Q = {
  a: A;
  b: B;
  c: C;
  tuple: [A, B, "lalaka", string];
  array: number[];
  aliasArray: A[];
};

//--------------------------------------------
// typeof

const x = { a: "lalaka", b: 10 };
type X = typeof x;

const y: X = { a: "malaka", b: 15 }; // type: {a: string, b: number}
const z: typeof x = { a: "palaka", b: 30 }; //type: {a: string, b: number}

//--------------------------------------------
//interface alias

interface G {
  a: number;
  b: string;
  q: boolean;
}

const any: G = {
  a: 12,
  b: "str",
  q: true,
};

//--------------------------------------------
// extension
interface P {
    a: number;
}

interface P {
    b: string;
}

const few: P = { a: 10, b: "lalaka" }

// with extends
interface W {
    a: number;
 }
 
 interface E extends W 
 { 
     b: string; 
 }
 
 interface R extends W 
 { 
     c: boolean; 
 }
 
 const map: W = { a: 10 }; 
 const way: E = { a: 15, b: "lalaka" }; 
 const state: R = { a: 20, c: true };

/* 
    Real example
*/

interface DomElement {
    width: number;
    height: number;
}

interface DivElement extends DomElement {
    textContent: string;
}

interface ButtonElement extends DomElement {
    tabIndex: number;
}

const div: DivElement = {textContent: "lalaka", width: 100, height: 15};
const button: ButtonElement = {tabIndex: 0, width: 500, height: 300};

let dom: DomElement = div;
dom = button;

const tree: DomElement[] = [
    dom,
    div,
    button,
    div,
    button
];
//--------------------------------------------
//index signature

type CountPlaysAlbums = {
    [artistName: string]: number;
  }
  
  const albumsCountData: CountPlaysAlbums = {
    'Daft Punk': 1,
    'Deadmau5': 5,
    'Rob Made': 3,
    'Moby': 8
  };

  interface Coords {
    [key: string]: number;
  };
  
  
  interface CoordsOptKey {
    x: number;
    y: number;
    z?: number
  };
  
  interface RequestAPI {
   readonly mainURL: string;
   subURL: string;
  };
  
  const coords2: Coords = { x: 1, y: 2, z: 3 };

  const coordsFirst: CoordsOptKey = { x: 1990, y: 2020 };
  const coordsSecond: CoordsOptKey = { x: 1990, y: 2020, z: 2022 };
  

  let request: RequestAPI = {
   mainURL: "https://skillfactory.ru",
   subURL: "https://zvuk.com"
  };