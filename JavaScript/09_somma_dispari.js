/**Calcola la somma di tutti i numeri dispari in un intervallo: 
 * Scrivi uno script che calcoli la somma di tutti i numeri dispari in 
 * un intervallo specificato da due numeri interi positivi. */

function somma_dispari(prn, sen) {
    if (sen < prn) {
        let app = prn;
        prn = sen;
        sen = app;
    }
    if (prn % 2 == 0) {
        prn += 1;
    }
    if (sen % 2 == 0) {
        sen -= 1
    }

    let somma = 0;

    for (let i = prn; i <= sen; i += 2) {
        somma = somma + i;
    }

    return somma;
}

let primon = 2, secondon = 10;

console.log("la somma dei numeri dispari compresi tra " + primon + " e " + secondon + " e' uguale a: " + somma_dispari(primon, secondon));