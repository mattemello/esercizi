/**Implementa una funzione di memoizzazione: 
 * Scrivi una funzione JavaScript che accetti un'altra funzione come argomento
 *  e restituisca una versione "memorizzata" di essa, cioè una versione che memorizza
 *  i risultati delle chiamate precedenti per evitare di ricalcolarli quando viene chiamata
 *  con gli stessi argomenti. */

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

var mem = {
    som_dis: somma_dispari,
    primo_el: new Array,
    secondo_el: new Array,
    val_mem: new Array,
    indice: 0,
    func_som: function (el1, el2) {
        for (let i = 0; i < this.indice; i++) {
            if ((this.primo_el[i] == el1 && this.secondo_el[i] == el2) || (this.primo_el[i] == el2 && this.secondo_el[i] == el1)) {
                console.log("valore uguale trovato di " + this.primo_el[i] + " e " + this.secondo_el[i] + " posizione " + i);
                return this.val_mem[i];
            }
        }

        this.indice += 1;

        this.primo_el[this.indice] = el1;
        this.secondo_el[this.indice] = el2;
        this.val_mem[this.indice] = this.som_dis(el1, el2);

        return this.val_mem[this.indice];
    }
};

console.log("somma i numeri 7 e 9 e': " + mem.func_som(7, 9));
console.log("somma i numeri 6 e 8 e': " + mem.func_som(6, 8));
console.log("somma i numeri 7 e 5 e': " + mem.func_som(7, 5));
console.log("somma i numeri 9 e 7 e': " + mem.func_som(9, 7));
console.log("somma i numeri 6 e 8 e': " + mem.func_som(6, 8));
console.log("somma i numeri 8 e 5 e': " + mem.func_som(8, 5));


