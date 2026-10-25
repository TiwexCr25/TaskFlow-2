const taskList = document.getElementById("task-list");

const API_URL = "http://localhost:3000/api/tasks"

let allTasks = [];

window.onload = () => {
    load();
}

async function load() {
    const response = await fetch(API_URL);
    allTasks = await response.json();
    console.log("load all task: ", allTasks);
    renderTask();
}

function renderTask() {
    taskList.innerHTML = '';
    let visibleTasks = [...allTasks];
    console.log("render all task: ", allTasks);
    console.log(visibleTasks);
    visibleTasks.forEach(task => {
        const html = `
            <li>
                <h3>${task.title}</h3>
                <p>${task.description ? task.description : "Sin descripcion"}</p>
                <p>Prioidad: ${task.priority}</p>
            </li>
        `;
        taskList.insertAdjacentHTML("beforeend", html);
    });
}