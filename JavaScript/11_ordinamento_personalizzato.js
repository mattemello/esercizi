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
    switch (global.ordinam) {
        case "alfabetico":
            alfabetico();
        break;

        case "inverso_al":
            inverso_al();
        break;

        case "numerico":
            numerico();
        break;

        case "inverso_nu":
            inverso_nu();
        break;
    
        default:
            break;
    }
}

function alfabetico() {
    for (let i = 0; i < global.num-1; i++) {
        for (let j = i; j < global.num; j++) {
            if (global.stringhe[j].charAt(0) < global.stringhe[i].charAt(0)) {
                let scam = global.stringhe[j];
                global.stringhe[j] = global.stringhe[i];
                global.stringhe[i] = scam;
            }
        }       
    }
}

function inverso_al() {
    for (let i = 0; i < global.num-1; i++) {
        for (let j = i; j < global.num; j++) {
            if (global.stringhe[j].charAt(0) > global.stringhe[i].charAt(0)) {
                let scam = global.stringhe[j];
                global.stringhe[j] = global.stringhe[i];
                global.stringhe[i] = scam;
            }
        }       
    }
}

function numerico() {
    for (let i = 0; i < global.num-1; i++) {
        for (let j = i; j < global.num; j++) {
            if (global.stringhe[j].length < global.stringhe[i].length) {
                let scam = global.stringhe[j];
                global.stringhe[j] = global.stringhe[i];
                global.stringhe[i] = scam;
            }
        }       
    }
}

function inverso_nu() {
    for (let i = 0; i < global.num-1; i++) {
        for (let j = i; j < global.num; j++) {
            if (global.stringhe[j].length > global.stringhe[i].length) {
                let scam = global.stringhe[j];
                global.stringhe[j] = global.stringhe[i];
                global.stringhe[i] = scam;
            }
        }       
    }
}