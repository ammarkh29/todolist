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
    tasks = {}
    name;

    constructor(name) {
        this.name = name;
    }

    get tasks() {
        return tasks
    }

    addTask(task) {
        this.tasks[task.id] = task
    }

    removeTask(index) {
        delete tasks[index]
    }

}

export {Task, Project}