var header = `
    <header class="header"> 
        <h2>To-Do App</h2>
        <button class="todo_button" type="button" popovertarget="todo_aggiunta">+</button>
        <div popover id="todo_aggiunta">
        <h3>inserire i campi</h3>
            <p>titolo <input type="text" id="title"></p>
            <p>descrizione <input type="text" id="description"></p>
            <button type="button" onclick="addTodo()">aggiungi</button>
        </div>
    </header>
`;

var body = `
    <p id="body"></p>
`;

var toDoList = {
    title: new Array(),
    description: new Array(),
    done: new Array(),
    number: 0
}

function initHeader() {
    document.getElementById("app").insertAdjacentHTML('beforeend', header);
    document.getElementById("app").insertAdjacentHTML('beforeend', body);
}

function addTodo() {
    toDoList.title[toDoList.number] = document.getElementById("title").value;
    toDoList.description[toDoList.number] = document.getElementById("description").value;
    toDoList.done[toDoList.number] = false; 
    let string = '<input type="checkbox" class="check" onclick="completed()" value=' + toDoList.number + '>' +  toDoList.title[toDoList.number] + '</input> <br>';
    toDoList.number += 1;
    document.getElementById("body").insertAdjacentHTML('beforeend', string);
}

function completed() {
    let num = document.querySelector(".check:checked").value;
    console.log("val: " + num);
}

initHeader();