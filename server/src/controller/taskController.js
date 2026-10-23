import {
    createTask,
    showAllTasks,
    getTaskByID,
    deleteTaskbyID,
    updateTaskByID
} from "../services/taskServices.js"

export function postTask(req, res) {
    if (typeof req.body.title !== "string" || !req.body.title.trim()) {
        return res.status(400).json({
            error: "titulo vacio"
        })
    }
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
    if (deleteTaskbyID(id).changes == 1) {
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

export function updateTask(req, res) {
    const id = req.params.id;
    if (updateTaskByID(id, req.body)) {
        res.status(200).json({
            ok: "tarea modificada"
        })
    }
    else {
        res.status(404).json({
            error: "tarea no encontrada"
        })
    }
}