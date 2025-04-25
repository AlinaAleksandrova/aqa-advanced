// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

import fetch from "node-fetch";

async function getTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) throw new Error("Failed to fetch TODO");
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error("Error in getTodo:", error.message);
    }
}

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Failed to fetch User");
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error in getUser:", error.message);
    }
}

async function main() {
    try {
        const allResults = await Promise.all([getTodo(), getUser()]);
        console.log("Promise.all result:", allResults);

        const firstResult = await Promise.race([getTodo(), getUser()]);
        console.log("Promise.race result:", firstResult);
    } catch (error) {
        console.error("Main error:", error.message);
    }
}

main();