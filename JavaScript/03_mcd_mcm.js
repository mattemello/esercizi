/**Calcola l'MCD e l'MCM: Scrivi uno script che calcoli il massimo comune divisore (MCD) e il minimo comune multiplo (MCM) di due numeri interi positivi. */

function MCD(num1, num2) {
    let mcd;
    let min;
    if (num1 < num2) {
        min = num1;
    }else{
        min = num2;
    }

    for (let i = 0; i < min; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            mcd = i;
        }        
    }
    return mcd;
}

function MCM(num1, num2) {
    return (num1 * num2) / MCD(num1, num2);
}


let numero_1 = 360, numero_2 = 300;

let mcd = MCD(numero_1, numero_2);
console.log("il massimo comun divisore e': " + mcd);

let mcm = MCM(numero_1, numero_2);
console.log("il minimo comune multiplo e' : " + mcm);