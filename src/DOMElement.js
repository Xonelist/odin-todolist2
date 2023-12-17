function createElement(elem, classname, content,id ='') {
    const div = document.createElement('div');
    div.className = classname;
    div.id = id;

    const element = document.createElement(elem);
    element.textContent = content;
}