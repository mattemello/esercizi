var header = `
    <header class="header"> 
        <div class="div_head">
            <h2>To-Do App</h2>
            <button class="todo_button" type="button" popovertarget="todo_aggiunta">+</button>
        </div>
        <div popover id="todo_aggiunta" class="popover">
        <h3>inserire i campi</h3>
            <p>titolo <input type="text" id="title"></p>
            <p>descrizione <input type="text" id="description"></p>
            <button type="button" onclick="addTodo()">aggiungi</button>
        </div>
    </header>
`; //header dell'html 

var body = `
    <div class="checkbox-wrapper-1">
        <p id="body"></p>
    </div>
`; //body, dove andremo a stampare la nostra lista

var toDoList = {        //variabile contenente la nostra lista di cose da fare
    title: new Array(),
    description: new Array(),
    done: new Array(),
    val: new Array(),
    number: 0,
}

function initHeader() { //inizializzazione della pagina
    document.getElementById("app").insertAdjacentHTML('beforeend', header);
    document.getElementById("app").insertAdjacentHTML('beforeend', body);
}

function addTodo() { // codice per l'aggiunta del ToDo

    if (document.getElementById("title").value == '') {     //controllo che venga aggiunto almeno il titolo
        alert("titolo non inserito, per favore inserire il titolo");
        return;
    }

    //presa di tutti i valori necessari
    toDoList.title[toDoList.number] = document.getElementById("title").value;
    toDoList.description[toDoList.number] = document.getElementById("description").value;
    toDoList.done[toDoList.number] = false; 
    let string = '<div class="check_style" id=' + toDoList.number + '><input type="checkbox" class="check" onclick="completed()" value=' + toDoList.number + '><label>' +  toDoList.title[toDoList.number] + '</label> <br> </div>';
    toDoList.val[toDoList.number] = toDoList.number;
    toDoList.number += 1;
    document.getElementById("body").insertAdjacentHTML('beforeend', string);    //stampa del nuovo ToDo su schermo
}

function removeToDo(num){ //funzione di rimozione del ToDo
    for (let i = 0; i < toDoList.number; i++) {
        if (num == toDoList.val[i]) {   //controllo per rimuovere l'elemento giusto della lista attraverso il valore
            toDoList.description.splice(i, 1);
            toDoList.title.splice(i, 1);
            toDoList.done.splice(i, 1);
            toDoList.val.splice(i, 1);
        }
    }
    toDoList.number -= 1;
}

function completed() { //funzine per segnare che l'elemento è stato fatto
    let num = document.querySelector(".check:checked").value;
    document.getElementById(num).remove();
    removeToDo(num);
}


//inizio
initHeader();