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
    console.log("titolo: " + list.todo.titolo[list.todo.dim]);
    list.todo.dim += 1;
}