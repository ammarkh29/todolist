class Task {
    title;
    description;
    dueDate;
    priority;
    id;

    completed = false;

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.id = crypto.randomUUID()
    }
}

class Project {
    tasks = new Map()
    name;

    constructor(name) {
        this.name = name;
    }

    addTask(task) {
        this.tasks.set(task.id, task)
    }

    removeTask(index) {
        delete tasks[index]
    }

}

export {Task, Project}