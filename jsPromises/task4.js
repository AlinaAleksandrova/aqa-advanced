// Завдання 4 (Опціонально)

// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

import fetch from 'node-fetch';

class TodoService {
    constructor(id = 1) {
        this.id = id;
    }

    async getTodo() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.id}`);
            if (!response.ok) throw new Error("Failed to fetch TODO");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("TodoService Error:", error.message);
        }
    }
}

class UserService {
    constructor(id = 1) {
        this.id = id;
    }

    async getUser() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`);
            if (!response.ok) throw new Error("Failed to fetch User");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("UserService Error:", error.message);
        }
    }
}

async function main() {
    const todoInstance = new TodoService(1);
    const userInstance = new UserService(1);

    try {
        const all = await Promise.all([
            todoInstance.getTodo(),
            userInstance.getUser()
        ]);
        console.log("Promise.all result:", all);

        const first = await Promise.race([
            todoInstance.getTodo(),
            userInstance.getUser()
        ]);
        console.log("Promise.race result:", first);
    } catch (error) {
        console.error("Main error:", error.message);
    }
}

main();