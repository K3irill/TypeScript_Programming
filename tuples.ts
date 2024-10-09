const a: [number, number] = [1, 2];
const b: [string, boolean] = ["123", true];
const c: [number[]] = [[1,2,3]];
const e: [[string], [number, number], boolean[]]= [["1"], [100, 100], [true, true, false, true]];

//

let exampleT: [string, number] = ["God of War", 2];

exampleT.push(2020);
exampleT.push("immortal");

// exampleT.push(false);// Возникнет ошибка

const coords: [number, number] = [50.5033115, 5.2263673];
const [lat, lng] = coords;

//or

type UserCoords = [number, number];

const coordss: UserCoords = [50.5033115, 5.2263673];
const [latt, lngg] = coordss;

//

type HTTPResponse = [number, string];
const response: HTTPResponse = [404, 'Page is not found'];