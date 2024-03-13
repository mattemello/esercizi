/*Trova i numeri primi: Scrivi uno script che trovi e stampi tutti i numeri primi fino a un numero dato n. */

function primo(num){
    let cont = 0;
    for (let i = 1; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                cont++;
            }
        }
        if (cont == 0) {
            console.log("   num: " + i);
        }
        cont = 0;
    }

}

let num = 98;

console.log("inizio dei numeri primi contenuti in " + num + "{");

primo(num);

console.log("};");