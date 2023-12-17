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

}

class Main{
    constructor(title, description, dateDue, dateCreated) {
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateDue = dateDue;
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

    getDateDue() {
        return this.getDate(this.dueDate); 
    }

    getDateCreated() {
        return this.getDate(this.dateCreated).toString();
    }

    getDate(time) {
        return new Date(time);
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