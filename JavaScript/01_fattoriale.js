/*Calcola il fattoriale di un numero: Scrivi uno script che calcoli il fattoriale di un numero. 
Il fattoriale di un numero intero positivo n, indicato con n!, 
è il prodotto di tutti i numeri interi positivi da 1 a n.*/

function calcolo_fattoriale(num){
    let fatt = 1;

    while (num != 0) {
        fatt = fatt * num;
        num--;
    }
    return fatt;
}


let num = 7, fatt; //numero di num modificabile;

fatt = calcolo_fattoriale(num);

console.log("Il valore del fattoriale e' = " + fatt);
