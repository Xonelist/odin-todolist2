import { appendAll, createButton, createDiv, createElement } from "./DOMElement";

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

    getMain(title) {
        return this.collection[title];
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
        this.todo.push(new Content(content, this.createId()))
    }

    setToDo() {
        return true;
    }

    createId() {
        return this.todo.length;
    }

    getToDO(id) {
        return this.todo[id];
    }

    getDate(time) {
        return new Date(time);
    }

    getDateDue() {
        return this.getDate(this.dueDate); 
    }

    getDateCreated() {
        return this.getDate(this.dateCreated).toString();
    }

    card() {
        const card = createDiv('card');
        const title = createElement('h2', 'card-title', this.title);
        const description = createElement('h4', 'card-description', this.description);
        const contentTemplate = createDiv('content-template');
        const dueDate = createElement('p', 'card-due', this.getDateCreated())

        appendAll(card, title, description, contentTemplate, dueDate);
        return card
    }
    
}

class Content{
    constructor(content, id, priority = false) {
        this.content = content;
        this.id = id;
        this.priority = priority;
        this.checked = false;
    }

    getId() {
        return this.id;
    }

    setPriority() {
        this.priority = !this.priority
    }

    checkbox() {
        id = this.getId();
        const content = createElement('input', 'content-text', `ctn${id}`);
        content.type = 'checkbox';
        content.name = `ctn${id}`;
        content.value = `ctn${id}`;

        const label = createElement('label', '', this.content);
        label.for = `ctn${id}`

        const div = createDiv('content-inline');
        appendAll(div, content, label);

        return div;
    }

}
export {Collection}