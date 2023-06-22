//1.
//Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!


function smash(words) {
    return words.join(' ')
}


console.log(smash(['hello', 'world']))

//2.
/* Дженни написала функцию, которая возвращает приветствие для пользователя.
 Однако она влюблена в Джонни и хотела бы поприветствовать его немного по-другому.\
  Она добавила к своей функции особый случай, но допустила ошибку.

Вы можете помочь ей? */


function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";

}


///3
//Камень ножницы Бумага
//Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

const rps = (p1, p2) => {
    if (p1 === "scissors" && p2 === 'paper') {
        return "Player 1 won!"
    }

    if (p2 === "scissors" && p1 === 'paper') {
        return "Player 2 won!"
    }

    if (p2 === "rock" && p1 === 'paper') {
        return "Player 1 won!"
    }

    if (p2 === 'paper' && p1 === "rock") {
        return "Player 2 won!"
    }

    if (p2 === "scissors" && p1 === "rock") {
        return "Player 1 won!"
    }

    if (p1 === "scissors" && p2 === "rock") {
        return "Player 2 won!"
    }

    if (p2 === p1) {
        return "Draw!"
    }
};

//  Хорошая альтернатива
const rps2 = (p1, p2) => {
    if (p1 == p2)
        return 'Draw!';

    if (p1 == 'rock' && p2 == 'scissors')
        return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper')
        return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock')
        return 'Player 1 won!'
    else
        return 'Player 2 won!';
};


//4.
//Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
//Верните ответ в виде числа.

function sumMix(x) {

    return x.map(el => +el).reduce((a, b) => a + b, 0);
}


//5.
//You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let tr = arr.filter(el => el > 0)
    if (tr.length !== 0) {
        return tr.reduce((a, b) => a + b)
    }
    return 0

}

console.log(positiveSum([-1, 2, -3, 1, 6]))


//6.
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removeChar = (str) => str.slice(1, -1)

console.log(removeChar('kol'))


//7.
//Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.
//Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1. (81-1-1-81)
//Пример #2: Ввод 765 будет/должен вернуть 493625, потому что 7 2 равно 49, 6 2 равно 36, а 5 2 равно 25. (49-36-25)
//Примечание. Функция принимает целое число и возвращает целое число.
//Удачного кодирования!

function squareDigits(num) {
    const re = String(num).split('')
    const ki = re.map(el => +(el ** 2))
    return Number(ki.map(el => el.toString()).reduce((acc, b) => acc + b))

}

console.log(squareDigits(222))


//8.
//Ваша задача состоит в том, чтобы создать функцию, которая может принимать
// любое неотрицательное целое число в качестве аргумента и возвращать его с
// цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.
// Примеры:
// Вход: 42145 Выход:54421
// Вход: 145263 Выход:654321
// Вход: 123456789 Выход:987654321

const descendingOrder = (n) => Number(n.toString().split('').sort((a, b) => b - a).join(''))


console.log(descendingOrder(3502))


//9.
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    return l.filter((el) => typeof el !== "string")
}

console.log(filter_list([1, 'DA', 3, 4, 'ere']))


//10.
//Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(str) {
    const arrOfWords = str.split(' ');
    const arrOfLengths = arrOfWords.map(item => item.length);
    return Math.min(...arrOfLengths)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


//11.
//Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из
// 4 положительных целых чисел. Не будут переданы числа с плавающей запятой или неположительные целые числа.
// Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
// [10, 343445353, 3453445, 3453545353453]должен вернуться 3453455.
function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b)
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

//12.

// Возьмите 2 строки s1и s2включите только буквы от aдо z. Возвращает новую отсортированную строку,
// максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let re = [...new Set(s1)]
    let re2 = [...new Set(s2)]
    let re3 = [...re, ...re2]
    let re4 = re3.sort()
    let re5 = [...new Set(re4)].join('')
    return re5
}

/*const longest=(s1, s2)=>[...new Set([...new Set(s1), ...new Set(s2)].sort())].join('')*/

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))


//13.

//Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде. Преобразование может быть выполнено до или после добавления.
// Возвращаемое двоичное число должно быть строкой.
// Примеры:(Ввод1, Ввод2 --> Выход (пояснение)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
    const sum = a + b
    return parseInt(sum, 10).toString(2)
}


console.log(addBinary(11, 11))


//14.

//Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.
// Примеры:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// Однако массивы могут иметь разную длину, а не только 4.

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

console.log(binaryArrayToNumber([0, 1, 1, 0]))


//15.

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution = (str, ending) => str.endsWith(ending)


console.log(solution('abcde', 'abc'))


//16.
//Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.
// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

console.log(reverseWords('double  spaced  words'))


//17.
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple
// elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
function removeSmallest(numbers) {
    const min = Math.min(...numbers)
    const min2 = numbers.indexOf(min)
    const min3 = numbers.filter((el, index) => index !== min2)
    return min3
}

console.log(removeSmallest([2, 2, 1, 2, 1]))

//18.
//Задача
// Напишите функцию, которая возвращает минимальное и максимальное количество заданного списка/массива.
// Примеры (ввод --> вывод)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Примечания
// Все массивы или списки всегда будут иметь хотя бы один элемент, поэтому вам не нужно проверять длину.
// Кроме того, ваша функция всегда будет получать массив или список, вам не нужно проверять nullили undefinedчто-то подобное.
function minMax(arr) {
    const num = Math.min(...arr)
    const num2 = Math.max(...arr)
    const arr2 = new Set([num, num2])
    const arr3 = [...arr2]
    if (arr.length === 1) {
        return [...arr, ...arr]
    }
    return arr3
}

console.log(minMax([5]))


//19.
//Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми
// всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из
// букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.
// Примеры:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
    return string
        .split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}


console.log(spinWords('This is another test'))


//20.
//Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент.
// Он должен возвращать отображаемый текст, как показано в примерах:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание. Для 4 и более имен число "and 2 others"просто увеличивается.

function likes(names) {
    if (!names.length) {
        return "no one likes this"
    }
    if (names.length===1){
        return `${names} likes this`
    }
    if (names.length===2){
        return `${names[0]} and ${names[1]} like this`
    }

    if (names.length===3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }

    if (names.length>=4){
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }

}


console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
