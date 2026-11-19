'use strict';

const guessgame = function () {
    const randomMin = 1;
    const randomMax = 100;

    let randomNumber;
    let guessedNumber;

    const getRandomNumber = function () {
        return Math.floor(
            Math.random() * (randomMax - randomMin + 1) + randomMin
        );
    };

    const guessTheNumber = function () {
        guessedNumber = prompt(
            `Угадай число от ${randomMin} до ${randomMax}`
        );

        if (guessedNumber === null) {
            alert("Игра окончена");
            return;
        }

        if (guessedNumber.trim() === "") {
            alert("Введи число!");
            guessTheNumber();
            return;
        }

        guessedNumber = Number(guessedNumber);

        if (Number.isNaN(guessedNumber)) {
            alert("Введи число!");
            guessTheNumber();
            return;
        }

        if (guessedNumber > randomNumber) {
            alert("Загаданное число меньше");
            guessTheNumber();
            return;
        } else if (guessedNumber < randomNumber) {
            alert("Загаданное число больше");
            guessTheNumber();
            return;
        } else {
            alert("Поздравляю, Вы угадали!!!");
            return;
        }
    };

    randomNumber = getRandomNumber();
    guessTheNumber();
}

guessgame();
