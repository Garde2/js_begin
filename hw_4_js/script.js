// let arrayOne = [1, 2, 3];

// console.log(arrayOne[0]);
// console.log(arrayOne[1]);
// console.log(arrayOne[2]);

// let arrayTwo = [1, 4, 7, 3, 7];

// console.log(arrayTwo.length);

// let arrayThree = ["a", "b", "c"];

// console.log(arrayThree);

// arrayThree[0] = 1;
// arrayThree[1] = 2;
// arrayThree[2] = -3;

// console.log(arrayThree);

// let arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }

// console.log(arr);

// const arr1 = [];
// arr[3] = "a";
// arr[8] = "b";

// console.log(arr.length);

// const arr2 = [1, 2, 3];

// arr2.push(4);
// arr2.push(5);

// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5];

// arr3.pop();
// arr3.pop();
// console.log(arr3);

// console.log(arr3.length);

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// let num = 1.1;
// let counter = 0;
// while (num < 1000) {
//   num = num * 3;

//   counter++;
// }
// console.log(counter, num);

// const arr = [2, 5, 9, 15, 1, 4];

// arr.map((value) => {
//   if (value > 3 && value < 10) {
//     console.log(value);
//   }
// });

// const array1 = [1, 4, 7, 4, 8, 9];
// const map1 = array1.map((x) => x * 2);

// console.log(map1);

// let sum = 0;
// for (let i = 2; i <= 100; i = i + 2) {
//   sum = sum + i;
// }

// console.log(sum);

// const arr = [2, 5, 9, 3, 1, 4];
// sum = 0;

// arr.forEach(function (value) {
//   sum = sum + value;
// });
// console.log(sum);

// let str = "-";

// for (let i = 1; i <= 9; i++) {
//   str = str + i + "-";
// }

// console.log(str);

// const arr = [2, 5, 9, 0, 3, 1, 4];

// let i = 0;

// while (arr[i] !== 0 && i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// const arr = [2, 5, 9, 10, 3, 1, 4];

// const arrNew = arr.map((value) => {
//   return value % 2 === 0
//     ? Math.pow(value, 2)
//     : value % 3 === 0
//     ? Math.pow(value, 3)
//     : value;
// });

// console.log(arrNew);

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;

// arr.forEach((value) => {
//   if (value === 3) {
//     counter++;
//   }
// });

// console.log(counter);

const arr = [1, 2, 3, 4, 5];

let arr2 = arr.splice(1, 2, 999);

console.log(arr, arr2);
