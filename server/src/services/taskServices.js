export function createTask(taskData) {
    const newTask = {
        ...taskData,
        id: crypto.randomUUID()
    };
    return newTask;
}