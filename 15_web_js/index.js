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
    document.getElementById("add_todo").innerHTML += '<input type="checkbox" onclick="compleate()">' + list.todo.titolo[list.todo.dim] + '</input>';
    return;
}

function compleate() {
    console.log("ecco");
}

function direct_add() {
    list.directory.titolo[list.directory.dim] = document.getElementById("direct_titolo").value;
    list.directory.descrizione[list.directory.dim] = document.getElementById("direct_desc").value;
    console.log("val: " + list.directory.titolo[list.directory.dim] + " dim: " + list.directory.dim);
    list.directory.dim += 1;
}