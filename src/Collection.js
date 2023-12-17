class Collection{
    constructor() {
        this.collection = {}
    }

    addMain(title, description) {
        this.collection[title] = new Main(title, description, this.dateDue(), this.dateCreated());
    }

    dateCreated() {
        return Date.now();
    }

    dateDue(time) {
        return 'due time will add later after input'
    }

    getDateDue() {
        return true;
    }

    setDateDue() {
        return true;
    }

    
}

class Main{
    constructor(title, description, dueDate, dateCreate) {
        this.title = title;
        this.description = description;
        this.dateCreate = dateCreate;
        this.dueDate = dueDate;
        this.todo = [];
    }

    addContent(content) {
        this.todo.push(new Content(content, this.getId()))
    }

    setToDo() {
        return true;
    }

    getId() {
        return this.todo.length;
    }
}

class Content{
    constructor(content, id, priority = false) {
        this.content = content;
        this.id = id;
        this.priority = priority;
        this.checked = false;
    }

    setPriority() {
        this.priority = !this.priority
    }
}
export {Collection}