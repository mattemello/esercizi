/**Implementa una coda: 
 * Scrivi una classe JavaScript che implementi una coda (FIFO - First In, First Out) con i metodi:
 *  enqueue (aggiunge un elemento alla fine della coda), 
 * dequeue (rimuove e restituisce l'elemento dalla testa della coda) 
 * e isEmpty (verifica se la coda è vuota). */

class Queue {

    constructor() {
        this.valore = new Array;
        this.primo = 0;
        this.ultimo = -1;
        this.numero_el =  0;
    }

    enqueue(val) {
        this.valore[this.numero_el] = val;
        this.numero_el += 1;
    }

    dequeue() {
        let val = this.valore[this.primo];
        this.numero_el -= 1;
        for (let i = 0; i < this.numero_el; i++) {
            this.valore[i] = this.valore[i+1];
            
        }
        return val;
    }

    isEmpty() {
        if (this.numero_el == 0){
            return true;
        }
        return false;
    }
}
