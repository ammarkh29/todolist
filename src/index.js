// index.js
import "./styles.css";
import { Task, Project } from "./todos.js";


const projects = new Map()
const currentProject = "Default"

projects.set("Default", new Project("Default"));
projects.set("Home", new Project("Home"));
projects.set("Work", new Project("Work"));

projects.get("Default").addTask(new Task("Welcome!", "This is your default project.", "2025-07-20", "Low"));
projects.get("Default").addTask(new Task("Try it out", "Add and remove tasks.", "2025-07-22", "Medium"));

projects.get("Home").addTask(new Task("Clean kitchen", "Wipe down surfaces and mop floor", "2025-07-18", "High"));
projects.get("Home").addTask(new Task("Fix sink", "Call the plumber", "2025-07-21", "Medium"));

projects.get("Work").addTask(new Task("Prepare report", "Weekly team report", "2025-07-19", "High"));
projects.get("Work").addTask(new Task("Email client", "Follow up on proposal", "2025-07-18", "Medium"));

const sidebar = document.querySelector(".sidebar")


projects.forEach(project => {
    const projectDOM = document.createElement("button")
    projectDOM.innerText = project.name
    sidebar.appendChild(projectDOM)
});

console.log(projects)

const container = document.querySelector(".container")

projects.get(currentProject).tasks.forEach(task => {
    const taskDOM = document.createElement("div")
    taskDOM.innerText = task.title + task.description + task.dueDate + task.priority + task.id
    container.appendChild(taskDOM)
});

console.log(projects.get(currentProject).tasks)
