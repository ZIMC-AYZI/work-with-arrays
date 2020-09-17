// Задание 1
// Написать функцию которая первым принимает значение, которым заполнять массив,
//  а вторым - сколько элементов должно быть в массиве.
//  Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(element, length) {
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr[i] = element;
//   }
//   console.log(arr);
// }
// arrayFill("x", 4);

// Задание 2
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//  Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [
//   [
//     [1, 2],
//     [3, 4]
//   ],
//   [
//     [5, 6],
//     [7, 8]
//   ]
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let n = 0; n < arr.length; n++) {
//     for (let j = 0; j < arr.length; j++) sum += arr[i][n][j];
//   }
// }
// console.log(sum);

// Задание 3
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(n) {
//   if (n > 0 && n < 10) {
//     console.log(true);
//   } else console.log(false);
// }
// isNumberInRange(11);

// Задание 4
// Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(n) {
//   if (n % 2 === 0) {
//     console.log(true);
//   } else console.log(false);
// }
// isEven(4);

// Задание 5
// Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [2, 3, 5, 6, 7];
// function isEven(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(isEven(arr));

// Задание 6

// Сделайте функцию getDivisors, которая параметром принимает число и
// возвращает массив его делителей (чисел, на которое делится данное число).

// arr = [];
// function getDivisors(n) {
//   for (let j = 0; j < n; j++) {
//     if (n % j === 0) {
//       arr.push(j);
//     }
//   }
//   return arr;
// }
// console.log(getDivisors(30));

// Задание 7
// Создайте функцию, которая получает два параметра – число и степень числа.
// Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

// function boost(element, size) {
//   let sum = element ** size;
//   return sum;
// }
// console.log(boost(2, 7));

// Задание 8
// Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// function checkList(n) {
//   if (n > 16) {
//     console.log("<<добро пожаловать>>");
//   } else console.log("<<вы еще молоды>>");
// }
// checkList(17);

// Задание 9
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//  В таком случае выведите сообщение – “Введите возраст”.
//   Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// function checkList(n) {
//   if (n > 16) {
//     console.log("добро пожаловать");
//   } else if (n == NaN || n == undefined) {
//     console.log("введите возраст");
//   } else console.log("вы еще молоды");
// }
// checkList(17);

// Задание 10
// Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
// Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

// let arr = [1, 2, 3, 4, 5, 6];
// function arrLength(array) {
//   if (array !== undefined) {
//     return array.length;
//   } else console.log("ERROR!");
// }
// console.log(arrLength(arr));

// let arr = [1, 2, 3, 4, 5, 6];
// function arrLength(array) {
//   let length = 0;
//   for (let i = 0; i < array.length; i++) {
//     length = array[i];
//   }
//   return length;
// }
// console.log(arrLength(arr));

// Задание 11
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
// если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.

// function userNumbers(n) {
//   if (n > 10) {
//     return n ** 2;
//   } else if (n < 7) {
//     return "число меньше 7";
//   } else if (n === 8 || 9) {
//     return n;
//   }
// }
// console.log(userNumbers(25));

// Задание 12
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// let someString = "somestring";

// function ucfirst(n) {
//   return n.charAt(0).toUpperCase() + n.slice(1);
// }
// console.log(ucfirst(someString));

// Задание 13
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// function transmod() {
//   let string = "var_text_hello";
//   let arr = string.split("_");
//   let newString = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= 1) {
//       newString += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//   }
//   return newString;
// }
// console.log(transmod());

// Задание 14
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив,
// в котором делается поиск. Функция должна возвращать true или false. Показать решение.

// let myArray = ["vasya", "Petya", "dima", "sasha"];
// function inArray(content, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (content == array[i]) {
//       return true;
//     } else return false;
//   }
// }
// console.log(inArray("vasya", myArray));

// Задание 15
// Дана строка, например, '123456'. Сделайте из нее '214365'.
// let string = "123456";
// function deformString(str) {
//   let makeArr = str.split("", str.length);
//   let count;
//   for (let i = 0; i < makeArr.length; i += 2) {
//     count = makeArr[i];
//     makeArr[i] = makeArr[i + 1];
//     makeArr[i + 1] = count;
//   }
//   str = makeArr.join("");
//   return str;
// }
// console.log(deformString(string));

// Задание 16
// Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор,
//  которая при каждом вызове дает число на 1 больше, и так до бесконечности.
//  Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора.
// Шаг можно не указывать, тогда он будет равен одному.
//  Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

// function sequence(start, step) {
//   let countStart = start || 0;
//   step = step || 1;
//   return function () {
//     let returnValue = countStart;
//     countStart += step;
//     return returnValue;
//   };
// }
// let generator = sequence(3);
// let generator2 = sequence(10, 5);
// console.log(generator());
// console.log(generator());
// console.log(generator2());
// console.log(generator2());

// Задание 17
// Также, нужна функция take(gen, x)
// которая вызывает функцию gen заданное число (x)
// раз и возвращает массив с результатами вызовов.

// function take(gen, x) {
//   let arr = [];
//   for (let i = 0; i < x; i++) {
//     arr.push(gen());
//   }
//   return arr;
// }

// let gen2 = sequence(0, 2);
// console.log(take(gen2, 5));

// Задание 18
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
//  и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

// let arr = [1, 2, 3, 4];
// function map(fn, array) {
//   let newArray = [];
//   if (array.length === 0) {
//     return newArray;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       newArray.push(fn(array[i]));
//     }
//     return newArray;
//   }
// }

// function squere(x) {
//   return x * x;
// }
// console.log(arr);
// console.log(map(squere, arr));

// Задание 19
// Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
//  где gen — функция-генератор вроде той, что была в 17 задании.
// fmap возвращает новую функцию-генератор,
// которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a.
