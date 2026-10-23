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