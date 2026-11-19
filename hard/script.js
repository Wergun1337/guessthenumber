'use strict';

const guessgame = function () {
    const randomMin = 1;
    const randomMax = 100;
    let totalAttempts = 10;

    let randomNumber;
    let guessedNumber;

    const getRandomNumber = function () {
        return Math.floor(
            Math.random() * (randomMax - randomMin + 1) + randomMin
        );
    };

    const guessTheNumber = function () {
        if (totalAttempts > 0) {
            guessedNumber = prompt(
                `Угадай число от ${randomMin} до ${randomMax}`
            );

            if (guessedNumber === null) {
                alert("Игра окончена");
                return;
            }

            if (guessedNumber.trim() === "") {
                alert(`Введи число!`);
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
                totalAttempts--;
                alert(`Загаданное число меньше осталось попыток ${totalAttempts}`);
                guessTheNumber();
                return;
            } else if (guessedNumber < randomNumber) {
                totalAttempts--;
                alert(`Загаданное число больше осталось попыток ${totalAttempts}`);
                guessTheNumber();
                return;
            } else if (guessedNumber === randomNumber) {

                if (cofirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                    guessgame();
                    return;
                } else {
                    alert("Игра окончена");
                    return;
                }
            }
        } else {
            if (confirm("Попытки закончились, хотите сыграть еще?")) {
                guessgame();
                return
            } else {
                alert("Игра окончена");
                return;
            }
        };
    }
    randomNumber = getRandomNumber();
    guessTheNumber();
}

guessgame();
