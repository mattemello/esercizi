#include <stdio.h>

/**
 *
 * Convertitore di Valuta: Crea un programma che converte una somma di denaro da
 * una valuta all'altra, utilizzando un tasso di cambio prestabilito.
 *
 */

void scambioMon(int num, char vCam, char vTo){
     
     switch(vTo){
          case '$':
               printf("hai preso ul dollaro \n");
          break;
     
          default:
          break;
     }
}

int main(int argc, char *argv[]){

   int numero_da_camb;
   char valuta_cam, valuta_da;

     while (1) {
          printf("inserire la cifra di denaro: ");
          scanf("%d", &numero_da_camb);
          printf("\n inserire il tipo di valuta del numero inserito: ");
          scanf(" %c", &valuta_da);
          printf("\n inserire il tipo di valuta che si vuole ottenere: ");
          scanf(" %c", &valuta_cam);
          printf("\n");

          scambioMon(numero_da_camb, valuta_cam, valuta_da);
     }

    return 0;
}


