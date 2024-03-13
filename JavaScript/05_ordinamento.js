/** Ordina un array: Scrivi uno script che ordini un array di numeri in ordine crescente o decrescente. */

var array = new Array();

function ordinamento_cresc() {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                let scam = array[j];
                array[j] = array[i];
                array[i] = scam;
            }
            
        }        
    }

    console.log("l'array ordinato in modo crescente è: " + array);
}

function ordinamento_dec() {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] > array[i]) {
                let scam = array[j];
                array[j] = array[i];
                array[i] = scam;
            }
            
        }        
    }

    console.log("l'array ordinato in modo decrescente è: " + array);
}

for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100);
}

console.log("l'array senza ordinamento è: " + array);

ordinamento_cresc();
ordinamento_dec();
