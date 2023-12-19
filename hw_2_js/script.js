// let test = true;
// console.log(test === true ? "+++" : "---");

// let day = parseInt(prompt("Введите число от 1 до 31"));

// if (day >= 1 && day <= 10) {
//   console.log("первая декада");
// } else if (day >= 11 && day <= 20) {
//   console.log("вторая декада");
// } else {
//   console.log("третья декада");
// }

let numNum = parseInt(prompt("Введите число от 0 до 1000"));
let hun = Math.trunc((numNum % 1000) / 100);
let dec = Math.trunc((numNum % 100) / 10);
let pie = Math.trunc(numNum % 10);

console.log(` ${numNum} содержит ${hun} сотен, ${dec} десятков, ${pie} единиц`);

// let userAge = prompt("Каков Ваш возраст?");
// alert(`Вам ${userAge} лет`);
// let userName = prompt("Как Вас зовут?");
// alert(`Добро пожаловать, ${userName}!`);

// let a = 13;
// let b = 5;

// let dim = a % 5;
// console.log(dim);

// let c;
// alert(c); //undefined

// alert("abc" * 3); //Nan

// alert(1 / 0); //infinity

// alert(-1 / 0); //-infinity

// alert("2" * "3"); //6

// //let b-;

// let a1 = "2";
// let b1 = "3";
// console.log(Number(a1) + Number(b1)); // Можем сделать объект
// console.log(parseInt(a1) + parseInt(b1)); //просто число

// let num1 = parseInt(prompt("Введите первое число"));

// let num2 = parseInt(prompt("Введите второе число"));

// console.log(`сумма = ${num1 + num2}`);
// console.log(`разность = ${num1 - num2}`);
// console.log(`произведение = ${num1 * num2}`);
// console.log(`частное = ${num1 / num2}`);
// console.log(`остаток от деления = ${num1 % num2}`);

// console.log(String(true)); //true
// console.log("a" + true); //atrue
// console.log(Number(true)); //1
// console.log(true + 1); //2
// console.log(true + true); //2
// console.log(true - true); //0
// console.log(String(true) + Number(true)); //true1

// 1. Пользователь с клавиатуры вводит число, Необходимо создать
// условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”
// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
// выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа
// a. Необходимо найти какое из двух чисел минимальное
// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная
// переменная больше нуля и меньше 15.

// let userNum = parseInt(prompt("Введите число"));
// let y = 5;
// if (userNum > y) {
//   console.log(`Число больше ${y}`);
// } else if (userNum < y) {
//   console.log(`Число меньше ${y}`);
// } else {
//   console.log(`Число равно ${y}`);
// }

// let test1 = 5;
// let test2 = 6;

// if (test1 > test2) {
//   console.log(`${test1} > ${test2}`);
// } else if (test1 < test2) {
//   console.log(`${test1} < ${test2}`);
// } else {
//   console.log(`${test1} = ${test2}`);
// }

// let num3 = parseInt(prompt("Введите первое число"));

// let num4 = parseInt(prompt("Введите второе число"));

// if (num3 > num4) {
//   console.log(`${num4} - минимальное `);
// } else if (num3 < num4) {
//   console.log(`${num3} - минимальное`);
// } else {
//   console.log(`Числа равны: ${num3} = ${num4}`);
// }

// let num5 = parseInt(prompt("Введите число больше 0 и меньше 15"));

// if (num5 > 0 && num5 < 15) {
//   console.log(`${num5} - Вы - молодец! `);
// } else {
//   console.log(`Попробуйте еще разок!`);
// }
