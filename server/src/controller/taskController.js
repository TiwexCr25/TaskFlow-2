import {
    createTask,
    showAllTasks
} from "../services/taskServices.js"

export function postTask(req, res) {
    const task = createTask(req.body)
    return res.status(201).json(task);
}

export function getTask(req, res) {
    const tasks = showAllTasks();
    return res.status(200).json(tasks);
}