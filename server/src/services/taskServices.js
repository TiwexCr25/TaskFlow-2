import db from "../database/database.js";

let tasks = [];

export function createTask(taskData) {
    const newTask = {
        ...taskData,
        id: crypto.randomUUID()
    };
    db.prepare(`
        INSERT INTO tasks (id, title, description, priority)
        VALUES (?, ?, ?, ?)
        `).run(newTask.id, newTask.title, newTask.description, newTask.priority);
    return newTask
}

export function showAllTasks() {
    return db.prepare(`SELECT * FROM tasks;`).all();
}

export function getTaskByID(id) {
    return db.prepare(`
        SELECT * FROM tasks
        WHERE id = ?
        `).get(id);
}

export function deleteTaskbyID(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true
    }
    return false
}

export function updateTaskByID(id, body) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks[index] = {
            id: tasks[index].id,
            title: body.title,
            description: body.description,
            priority: body.priority
        };
        return true
    }
    return false
}