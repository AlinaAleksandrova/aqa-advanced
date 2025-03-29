// Завдання 2: Конкатенація радків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. 
// Виведіть результат в консоль. 
// Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

let firstName = "Jon";
let secondName = "Sofi";
let greetingConcat = "Hello, " + firstName + " and " + secondName;

console.log(greetingConcat);

let templateConcat = `Hello, ${firstName} and ${secondName}`;
console.log(templateConcat);