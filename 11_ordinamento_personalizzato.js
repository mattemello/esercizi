/**Implementa una funzione di ordinamento personalizzata: 
 * Scrivi una funzione che accetti un array e restituisca un nuovo array ordinato 
 * secondo un criterio personalizzato, 
 * ad esempio in base alla lunghezza delle stringhe o al valore numerico. */

var global = {
    stringhe: new Array,
    num: 0,
    ordinam: "",
}

function aggiunta () {
    global.stringhe[global.num] = document.forms.form.stringa.value;
    global.num += 1; 
};

function stamp () {
    document.getElementById("stampa").innerHTML = "la stringa e': " + global.stringhe;
}

function ordinamento() {
    global.ordinam = document.forms.ord.tipo.value;
    console.log("val: " + global.ordinam);
}