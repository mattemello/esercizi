#include <stdio.h>

/**
 *
 * Convertitore di Valuta: Crea un programma che converte una somma di denaro da
 * una valuta all'altra, utilizzando un tasso di cambio prestabilito.
 *
 */

int main(int argc, char *argv[]){

   int numero_da_camb;
   char valuta_cam, valuta_da;

   while (true) {
        printf("inserire la cifra di denaro: ");
        scanf("%d", numero_da_camb);
        printf("\n inserire il tipo di valuta del numero inserito: ");
        scanf(" %c", valuta_da);
   }

    return EXIT_SUCCESS;
}


