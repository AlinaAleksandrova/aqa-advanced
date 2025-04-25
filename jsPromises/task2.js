// Завдання 2

// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

// <https://jsonplaceholder.typicode.com/users/1>

// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши
//  їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних

import fetch from 'node-fetch';

function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch TODO");
            return response.json();
        })
        .catch((error) => {
            console.error("Error in getTodo:", error.message);
        });
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch User");
            return response.json();
        })
        .catch((error) => {
            console.error("Error in getUser:", error.message);
        });
}

Promise.all([getTodo(), getUser()]).then((results) => {
    console.log("Promise.all result:", results);
});

Promise.race([getTodo(), getUser()]).then((result) => {
    console.log("Promise.race result:", result);
});