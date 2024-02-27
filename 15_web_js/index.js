var list = {
    calendar: {
        data: new Array,
        titolo: new Array,
        ora_inizio: new Array,
        ora_fine: new Array,
        direct: new Array,
        dim: 0
    },

    todo: {
        done: new Array,
        titolo: new Array,
        descrizione: new Array,
        dim: 0
    },

    directory: {
        titolo: new Array,
        descrizione: new Array,
        dim: 0
    }
}

function aggiunta_todo(){
    list.todo.titolo[list.todo.dim] = document.getElementById("titolo_todo").value;
    list.todo.descrizione[list.todo.dim] = document.getElementById("descrizione_todo").value;
    list.todo.done[list.todo.dim] = false;
    scrittura_todo();
    list.todo.dim += 1;
}

function scrittura_todo() {
    document.getElementById("add_todo").innerHTML += '<input type="checkbox" onclick="prova()">' + list.todo.titolo[list.todo.dim] + '</input>';
    return;
}

function prova() {
    console.log("ecco");
}