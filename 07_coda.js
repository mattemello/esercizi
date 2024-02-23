/**Implementa una coda: 
 * Scrivi una classe JavaScript che implementi una coda (FIFO - First In, First Out) con i metodi:
 *  enqueue (aggiunge un elemento alla fine della coda), 
 * dequeue (rimuove e restituisce l'elemento dalla testa della coda) 
 * e isEmpty (verifica se la coda è vuota). */

coda = {
    next: null,
    valore,
    enqueue: function(val) {
        this.valore = val;
        next = this.next;
    },

    dequeue: function() {
        this.next = null;

        return this.valore;
    },

    isEmpty: function() {
        if (this.next == null && this.val == undefined){
            return true;
        }
        return false;
    }
}


