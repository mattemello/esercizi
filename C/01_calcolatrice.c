#include <stdio.h>

/**
 * Calcolatrice Semplice: Scrivi un programma 
 * che chieda all'utente di inserire due numeri e poi esegua operazioni aritmetiche come l'addizione, la sottrazione,
 *  la moltiplicazione e la divisione su quei numeri.
*/

void calcolatrice(int n1, int n2, char oper){

    switch (oper){
        case '+':
            printf("%d + %d = %d", n1, n2, (n1+n2));    
        break;

        case '-':
            printf("%d - %d = %d", n1, n2, (n1-n2));    
        break;

        case '*':
            printf("%d * %d = %d", n1, n2, (n1*n2));    
        break;

        case '/':
            if (n2 == 0){
                printf("Errore! non puoi dividere per zeo!");
                break;
            }
        
            printf("%d / %d = %d", n1, n2, (n1/n2));    
        break;
    
        default:
            printf("Errore! operatore non valido");
        break;
    }

}

int main(int argc, char const *argv[]){
    
    int num1, num2;
    char oper;

    while(oper != 'q'){
        printf("\n______________ \n");
        printf("Calcolatrice\n");
        printf("______________ \n");
        printf("+   -   *   / \n");
        printf("per uscire inserire q nell'operatore\n");
        printf("______________ \n");
        printf("inserire il primo numero: ");
        scanf("%d", &num1);
        printf("\ninserire l'operatore: ");
        scanf(" %c", &oper);
        printf("\ninserire il secondo numero: ");
        scanf("%d", &num2);

        printf("\e[1;1H\e[2J");

        if (oper == 'q')
            break;
        

        calcolatrice(num1, num2, oper);

    }
    

    return 0;
}
