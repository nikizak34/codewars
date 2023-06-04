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
    let tr= arr.filter(el=>el>0)
    if (tr.length!==0){
        return tr.reduce((a,b)=>a+b)
    }
    return 0

}

console.log(positiveSum([-1, 2, -3,1,6]))



//6.
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removeChar=(str)=>str.slice(1,-1)

console.log(removeChar('kol'))



