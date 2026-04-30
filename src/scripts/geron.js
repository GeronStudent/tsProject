"use strict";
// enum Answer {
//     A = "A",
//     B = "B",
//     C = "C"
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let answer: Answer = Answer.A as Answer
// switch (answer) {
//   case Answer.A:
//   case Answer.B:
//     console.log("2 score");
//     case Answer.C:
//         console.log("3 score");
//         break;
//   default:
//     console.log("Неизвестный ответ");
// }
// Задача:
// // Пользователь вводит день недели → вывести:
// // "Работа" (пн–пт)
// // "Выходной" (сб–вс)
// const seasons: string[] = ["Весна", "Лето", "Осень", "Зима"];
// for (let idx = 0; idx < seasons.length; idx = idx + 1){
//     console.log(seasons[idx])
// }
// const student: string[]=["Алексей",
//   "Мария",
//   "Иван",
//   "Екатерина",
//   "Дмитрий",
//   "Анна",
//   "Сергей",
//   "Ольга",
//   "Андрей",
//   "Наталья",
//   "Максим",
//   "Татьяна",
//   "Владимир",
//   "Юлия",
//   "Павел",
//   "Елена",
//   "Никита",
//   "Ирина",
//   "Артём",
//   "Светлана"
// ];
// for(let idx =0; idx < student.length; idx = idx + 1){
//     console.log (student[idx])
//     if (student[idx] === "Елена") {
//     break;
//     }
// }
// const numbers: number[] = [23, 10, 32, 89, 8, 2, 1, 43, 95, 59];
// const moreTwenty: number [] = []; 
// for (let idx = 0; idx < numbers.length; idx++) {
//     if (numbers[idx] > 20){
//         moreTwenty.push(numbers[idx]);
//     }
// }
// console.log(moreTwenty);
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.unshift(0);
numbers.splice(2, 0, 999); // добавление в определенную позицию, 2 - индекс, 0 - удалить 0 элемент 
const extra = [111, 222, 333]; /// сщздание второго массива
const array = numbers.concat(extra); //// обьединение двух массив не меняя оригинальные массив
console.log(array); // новый массив
console.log(numbers); // пекрвый оригинальный массив
console.log(extra); // второй оригинальный массив
numbers.pop();
console.log(numbers); // удаляет последний элемент массива
numbers.shift(); // удаляет первый элемент массива
console.log(numbers);
numbers.splice(3, 1); // удалить 3 элемент массива, 1 - сколько элементов после удалятся
console.log(numbers);
const asc = [...numbers].sort((a, b) => a - b);
console.log(asc);
