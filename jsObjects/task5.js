// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    { name: "Jon", email: "jon@gmail.com,", age: 30 },
    { name: "Anna", email: "anna@gmail.com", age: 21 },
    { name: "Jek", email: "jek@gmail.com", age: 45 }
]

for (const { name, email, age }
    of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}