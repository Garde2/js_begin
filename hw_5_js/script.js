// const obj = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };

// console.log(obj[2]);

// const user = {
//   'name': 'Vasya',
//   'surname': 'Pupkin',
//   'age' : '56'
// };

// user.fatherName = prompt("Enter fathername");
// delete user.surname;

// console.log(user.name + '-' + user.surname + '-' + user.age);
// console.log(user.name + '-' + user.surname + '-' + user.age + '-' + user.fatherName);

// const arr1 = ["пн", "вт", "ср", "чт", "пт", "c,", "вc"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const arr3 = {};  //// в объекте нет сортировки

// for (let i = 0; i <= arr1.lenght; i++) {
//   arr3[arr1[i]] = arr2[i];
// }

// console.log(arr3);

// const obj = { x: 1, y: 2, z: 3 };

// Object.values(obj).map(function (value) {
//   console.log(value * value);
// });

// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };

// let sum = 0;
// Object.values(obj).map(function (value) {
//   Object.values(value).map(function (value) {
//     sum = sum + value;
//   });
// });

// console.log(sum);

// const riddles = {
//   question: "Сколько лет",
//   answer: "много",
//   counter: 0,
//   askQuestion: function () {
//     let enteredAnswer = prompt(this.question);
//     if (enteredAnswer === this.answer) {
//       console.log("Super!");
//     } else {
//       console.log("u are wrong");
//       this.counter++;
//       if (this.counter < 3) {
//         this.askQuestion();
//       }
//     }
//   },
// };

// riddles.askQuestion();
