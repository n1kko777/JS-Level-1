var event, ok;

var choseAnswer = [];

function bkockQuest(params) {
    do { //Выводим первый вопрос
        ok = false;
        event = +prompt(works[params+"00"] + works[params+"1"] + works[params+"2"] + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(works[params+"0"], event);
        }
    } while (!ok);
    
    choseAnswer.push(event);
    return event;
}

//Выводим первый вопрос
event = bkockQuest("a");

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = bkockQuest("b");
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                event = bkockQuest("d");
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            event = bkockQuest("d");
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = bkockQuest("c");
        switch (event) {
            case 1: // Второе действие
            event = bkockQuest("d");

                break;
            case 2: // Второе действие
            event = bkockQuest("d");

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

if (choseAnswer.length !== 0) {
    var q = +prompt("Введите номер окна?");
    switch (q) {
        case 1:
        yourChoose("a", q);
            break;
        case 2:
        yourChoose("b", q);
            break;
        case 3:
        yourChoose("c", q);
            break;
        case 4:
        yourChoose("d", q);
            break;

        default:
            alert('Ошибка');
            break;
    }

    alert('Спасибо за игру');
} else {
    alert('Спасибо за игру');
}

window.close();


function yourChoose(params, i) {
    alert(works[params+"00"] + works[params+"1"] + works[params+"2"] + '-1 - Выход из игры' 
            + '\n' + "Ваш ответ: " + choseAnswer[i-1]);
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}