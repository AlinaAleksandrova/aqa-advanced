// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд


function setTime(text, milsecond) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, milsecond);
    });
}

setTime("Hi!", 3000).then(() => {
    console.log("Finish!");
})