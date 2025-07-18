// index.js
import "./styles.css";
import { Task, Project } from "./todos.js";


console.log(localStorage.projects == undefined)
const projects = localStorage.projects == undefined ? new Map() : new Map(JSON.parse(localStorage.getItem('projects')))
let currentProject = "Default"

const container = document.querySelector(".container")
const sidebar = document.querySelector(".sidebar")

projects.set("Default", new Project("Default"));
projects.set("Home", new Project("Home"));
projects.set("Work", new Project("Work"));

projects.get("Default").addTask(new Task("Welcome!", "This is your default project.", "2025-07-20", "Low"));
projects.get("Default").addTask(new Task("Try it out", "Add and remove tasks.", "2025-07-22", "Medium"));

projects.get("Home").addTask(new Task("Clean kitchen", "Wipe down surfaces and mop floor", "2025-07-18", "High"));
projects.get("Home").addTask(new Task("Fix sink", "Call the plumber", "2025-07-21", "Medium"));

projects.get("Work").addTask(new Task("Prepare report", "Weekly team report", "2025-07-19", "High"));
projects.get("Work").addTask(new Task("Email client", "Follow up on proposal", "2025-07-18", "Medium"));

projects.forEach(project => {
    const projectDOM = document.createElement("button")
    projectDOM.id = project.name
    projectDOM.innerText = project.name

    projectDOM.addEventListener("click", function(e) {
        currentProject = this.id
        renderTasks()
    })

    sidebar.appendChild(projectDOM)
});

function renderTasks() {
    container.innerHTML = "";

    projects.get(currentProject).tasks.forEach(task => {
        const taskDOM = document.createElement("div")
        taskDOM.innerText = task.title + task.description + task.dueDate + task.priority + task.id
        container.appendChild(taskDOM)
    });
}

localStorage.projects = JSON.stringify([...projects])