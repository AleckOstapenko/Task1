'use strict';

let money, time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appdata = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpences : {},
    income : [],
    saving : false
};

let expensesName=prompt("Введите обязательную статью расходов в этом месяце");
let expencesMoney=+prompt("Во сколько обойдется?");
appdata.optionalExpences[expensesName]=expencesMoney;

alert(`Бюджет на 1 день ${appdata.budget / 30}`);