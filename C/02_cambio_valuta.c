#include <stdio.h>
#include <string.h>

/**
 *
 * Convertitore di Valuta: Crea un programma che converte una somma di denaro da
 * una valuta all'altra, utilizzando un tasso di cambio prestabilito.
 *
 */

void scambioMon(int num, char vCam[], char vTo[]){
     

     if (vCam == vTo){
          printf("errore! hai inserito la stessa valuta!");
          return;
     }
     
     float val_eu;

     if (strcmp(vTo, "$")){
          val_eu = num * 0.92;               
     }else if (strcmp(vTo, "£")){
          val_eu = num * 1.17;
     }else if (strcmp(vTo, "€")){
          val_eu = num;
     }else if (strcmp(vTo, "¥")){
          val_eu = num * 0.0062;
     }else{
          printf("Error! tipo di valuta non valida!");
     }
     
     if (strcmp(vCam, "$")){
          printf("Il valore dei soldi in dollari è: %.2lf", (val_eu * 1.09));               
     }else if (strcmp(vCam, "£")){
          printf("Il valore dei soldi in sterline è: %.2lf", (val_eu * 0.86));    
     }else if (strcmp(vCam, "€")){
          printf("Il valore dei soldi in euro è: %.2lf", val_eu);    
     }else if (strcmp(vCam, "¥")){
          printf("Il valore dei soldi in yen è: %.2lf", (val_eu * 163.11));    
     }else{
          printf("Error! tipo di valuta non valida!");
     }
     printf("\n");

     /*switch(vTo){
          case '¥$':
               val_eu = num * 0.92;               
          break;
     
          case "£":
               val_eu = num * 1.17;
          break;

          case '':
               val_eu = num;
          break;

          case '':
               val_eu = num * 0.0062;
          break;

          default:
               printf("Error! valuta non riconosciuta");
               return;          
     }

     switch (vCam){
          case '$':
               printf("Il valore dei soldi in dollari è: %.2lf", (val_eu * 1.09));               
          break;
     
          case '£':
               printf("Il valore dei soldi in dollari è: %.2ls ", (val_eu * 1.09) );               
          break;

          case '€':
               val_eu = num;
          break;

          case '¥':
               val_eu = num * 0.0062;
          break;

          default:
               printf("Error! valuta non riconosciuta");
               return;          
     }*/
    
}

int main(int argc, char *argv[]){

   float numero_da_camb;
   char valuta_cam[2], valuta_da[2];

     while (1) {
          printf("inserire la cifra di denaro: ");
          scanf("%f", &numero_da_camb);
          printf("\n inserire il tipo di valuta del numero inserito: (per uscire premere q) ");
          scanf(" %s", valuta_da);
          printf("\n inserire il tipo di valuta che si vuole ottenere: (per uscire premere q) ");
          scanf(" %s", valuta_cam);
          printf("\n");

          if (valuta_cam[0] == 'q' || valuta_da[0] == 'q'){
               break;
          }
          

          scambioMon(numero_da_camb, valuta_cam, valuta_da);
     }

    return 0;
}


