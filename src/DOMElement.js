function createElement(elem, classname, content='', id ='') {
    const element = document.createElement(elem);
    element.textContent = content;
    element.className = classname;
    element.id = id;
    return element;
}

function createDiv(className, id='') {
    const div = createElement('div', className, '', id);

    return div;
}

function appendAll(to, ...arr) {
    arr.forEach(dom => {
        to.appendChild(dom);
    });
}

function createButton(classname, buttontype, content, id='') {
    const btn = createElement('button', classname, content, id);
    btn.type = buttontype;
}

export {createDiv, createElement, createButton, appendAll} 