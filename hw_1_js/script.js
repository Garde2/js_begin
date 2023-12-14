let tempC = 40;
let tempF = (9 / 5) * tempC + 32;

console.log(tempF);
console.log(`${tempC}  по Цельсию равно ${tempF} по Фаренгейту`);

let uName = "Daria";
const admin = uName;
console.log(admin);

console.log("Hello, world");
let num = 123;
console.log(num);

let aA = 5;
aA = 7;
console.log(aA);

let b;
b = 1 + 2 + 3;
console.log(b);

// Комментарий
/* еще комментарий */

const c = 10;
const d = 2;
let summ = c + d;
let diff = c - d;
let multi = c * d;
let quotient = c / d;

console.log(summ, diff, multi, quotient);

let megaSumm = summ + diff + multi + quotient;

console.log(megaSumm);

// или
//console.log (summ + diff + multi + quotient);

// задание 4 1) 23, 2) 6, 3) 25, 4) 13, 5) 4, 6) 4

let a5 = 1.5;
let b5 = 0.75;

let summ5 = a5 + b5;

console.log(summ5);

let another = -9;
console.log(-another);

let userName = "Daria";
let userSurname = "Voronkova";

console.log(`My name is ${userName}, my surname is ${userSurname}`);

let java = "java";
let script = "script";
console.log(java + script);

let hello = "hello";
let world = "world";

console.log(`${hello} ${world}`);

let smth = "9.1";
console.log(parseFloat(smth));
console.log(parseInt(smth));

if (parseFloat(smth) - parseInt(smth) > 0) {
  console.log("float");
} else {
  console.log("int");
}
