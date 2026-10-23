let tasks = [];

export function createTask(taskData) {
    const newTask = {
        ...taskData,
        id: crypto.randomUUID()
    };
    tasks.push(newTask);
    return newTask
}

export function showAllTasks() {
    return tasks
}

export function getTaskByID(id) {
    return tasks.find(task => task.id === id);
    //return tasks.find(id => { id === tasks.id });
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