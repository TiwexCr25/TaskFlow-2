import { createTask } from "../services/taskServices.js"

export function postTask(req, res) {
    const task = createTask(req.body);
    return res.status(201).json(task);
}