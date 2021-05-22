const answer = Math.floor(Math.random()*100)+1;
let attemps = 0;
    while(true) {
        const userAnswer = prompt('Отгадайте число от 1 до 100. Введите "выход" для выхода из игры.');
        if (userAnswer.toLowerCase() === 'выход') {
            break;
        }

        const userNumber = Number.parseInt(userAnswer, 10);
        if (Number.isNaN(userNumber)) {
            alert('Вы ввели не число.');
            continue;
        }

        attemps++;
        if (userNumber > answer) {
            alert('попробуйте взять число меньше.');
        } else if (userNumber < answer) {
            alert('попробуйте взять число больше.');
        } else {
            alert('Верно! Число отгадано с ' + attemps + ' попыток!')
        }
    }