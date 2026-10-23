import {
    createTask,
    showAllTasks,
    getTaskByID,
    deleteTaskbyID
} from "../services/taskServices.js"

export function postTask(req, res) {
    const task = createTask(req.body)
    return res.status(201).json(task);
}

export function getTasks(req, res) {
    const tasks = showAllTasks();
    return res.status(200).json(tasks);
}

export function getTask(req, res) {
    const id = req.params.id;
    const task = getTaskByID(id);
    if (!task) {
        return res.status(404).json({
            error: "tarea no encontrada"
        });
    }
    return res.status(200).json(task);
}

export function deleteTask(req, res) {
    const id = req.params.id;
    if (deleteTaskbyID(id)) {
        res.status(200).json({
            ok: "tarea eliminada"
        })
    }
    else {
        res.status(404).json({
            error: "tarea no encontrada"
        })
    }
}