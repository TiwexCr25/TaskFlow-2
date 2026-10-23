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
    return db.prepare(`
        DELETE FROM tasks
        WHERE id = ?
        `).run(id);
}

export function updateTaskByID(id, body) {
    return db.prepare(`
        UPDATE tasks
        SET title = ?, description = ?, priority = ?
        WHERE id = ?
        `).run(body.title, body.description, body.priority, id);
}