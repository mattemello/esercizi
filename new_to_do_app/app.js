var header = `
    <header class="header"> 
        <h2>To-Do App</h2>
        <button class="todo_button" type="button" popovertarget="todo_aggiunta">+</button>
        <button type="button" onclick="prova()">prova</button>
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
    val: new Array(),
    number: 0,
}

function initHeader() {
    document.getElementById("app").insertAdjacentHTML('beforeend', header);
    document.getElementById("app").insertAdjacentHTML('beforeend', body);
}

function addTodo() {
    toDoList.title[toDoList.number] = document.getElementById("title").value;
    toDoList.description[toDoList.number] = document.getElementById("description").value;
    toDoList.done[toDoList.number] = false; 
    let string = '<div id=' + toDoList.number + '><input type="checkbox" class="check" onclick="completed()" value=' + toDoList.number + '>' +  toDoList.title[toDoList.number] + '</input> <br> </div>';
    toDoList.val[toDoList.number] = toDoList.number;
    toDoList.number += 1;
    document.getElementById("body").insertAdjacentHTML('beforeend', string);
}

function removeToDo(num){
    console.log("entro, val num " + num);
    for (let i = 0; i < toDoList.number; i++) {
        if (num == toDoList.val[i]) {
            toDoList.description.splice(i, 1);
            toDoList.title.splice(i, 1);
            toDoList.done.splice(i, 1);
            toDoList.val.splice(i, 1);
        }
    }
    toDoList.number -= 1;
}

function completed() {
    let num = document.querySelector(".check:checked").value;
    document.getElementById(num).remove();
    removeToDo(num);
    console.log("todo array:" + toDoList.title + " descrizioni: " + toDoList.description + "done: " + toDoList.done + " num: " + toDoList.number);
}

function prova() {
    for (let i = 0; i < 5; i++) {
        toDoList.title[toDoList.number] = i;
        toDoList.description[toDoList.number] = i;
        toDoList.done[toDoList.number] = false; 
        let string = '<div id=' + toDoList.number + '><input type="checkbox" class="check" onclick="completed()" value=' + toDoList.number + '>' +  toDoList.title[toDoList.number] + '</input> <br> </div>';
        toDoList.val[toDoList.number] = toDoList.number;
        toDoList.number += 1;
        document.getElementById("body").insertAdjacentHTML('beforeend', string);        
    }
}

initHeader();