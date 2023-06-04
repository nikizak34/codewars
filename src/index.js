//1.
//Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!


function smash (words) {
    return words.join(' ')
}


console.log(smash(['hello', 'world']))

//2.
/* Дженни написала функцию, которая возвращает приветствие для пользователя.
 Однако она влюблена в Джонни и хотела бы поприветствовать его немного по-другому.\
  Она добавила к своей функции особый случай, но допустила ошибку.

Вы можете помочь ей? */


function greet(name){
    if(name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";

}



///3
//Камень ножницы Бумага
//Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

const rps = (p1, p2) => {
    if(p1==="scissors"&& p2==='paper'){
        return "Player 1 won!"
    }

    if(p2==="scissors"&& p1==='paper'){
        return "Player 2 won!"
    }

    if(p2==="rock"&& p1==='paper'){
        return "Player 1 won!"
    }

    if(p2==='paper'&& p1==="rock"){
        return "Player 2 won!"
    }

    if(p2==="scissors"&& p1==="rock"){
        return "Player 1 won!"
    }

    if(p1==="scissors"&& p2==="rock"){
        return "Player 2 won!"
    }

    if(p2===p1){
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

function sumMix(x){

    return x.map(el => +el).reduce((a, b) => a + b, 0);
}




