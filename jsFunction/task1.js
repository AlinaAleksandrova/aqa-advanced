// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

//1. Function Declaration
function getArea(width, height) {
    return width * height;
}
console.log(getArea(5, 10));

//2. Function Expression
const getAreaExpression = function(width, height) {
    return width * height;
};
console.log(getAreaExpression(5, 10));

//3. Arrow Function
const area = (width, height) => width * height;
console.log(area(5, 10));