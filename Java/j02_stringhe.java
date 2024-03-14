/**
 * 
 * j02_stringhe
 * @author: Massimello Matteo
 * Gestione delle stringhe: Scrivi un programma che prenda in input una stringa 
 * e esegua operazioni come la ricerca di una sottostringa, la conversione in maiuscolo/miniscolo, il conteggio delle vocali o delle consonanti, ecc.
 */

package Java;

import java.util.Scanner;


public class j02_stringhe {

    private static String scan(){
        Scanner myObj = new Scanner(System.in);
        return myObj.nextLine();
    }

    private static String initialization(){
        System.out.println("_____________________________________________");
        System.out.println("Inserire la stringa che si vuole utilizzare: ");
        System.out.println("_____________________________________________");
        System.out.print("> ");
        return scan();
    }

    private static void subString(String line){
        String sub = null;

        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Inserire la sottostringa che vuoi cercare");
        sub = scan();

        boolean itIs = false;

        line = line.toLowerCase();
        sub = sub.toLowerCase();

        itIs = line.contains(sub);

        System.out.print("\033[H\033[2J");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Il risultato dell'operazione richiesta e': " + itIs + "  |");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("");
    }

    private static int contVoc(String line){
        int numVoc = 0;

        String container = line.toLowerCase();

        for (int i = 0; i < line.length(); i++) {
            if ((container.charAt(i) == 'a') || (container.charAt(i) == 'e') || (container.charAt(i) == 'i') || (container.charAt(i) == 'o') || (container.charAt(i) == 'u') ) {
                numVoc++;
            }
        }

        System.out.print("\033[H\033[2J");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Il numero di vocali e': " + numVoc + "   |");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("");

        return numVoc;
    }

    private static void contCons(String line){
        int numVoc = contVoc(line);

        int numCons = line.length() - numVoc;

        System.out.print("\033[H\033[2J");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Il numero di vocali e': " + numCons + "   |");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("");
    }

    private static String upcase(String line){

        line = line.toUpperCase();

        System.out.print("\033[H\033[2J");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Il risultato dell'operazione richiesta e': " + line + "  |");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("");

        return line;
    }

    private static String lowcase(String line){

        line = line.toLowerCase();

        System.out.print("\033[H\033[2J");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("Il risultato dell'operazione richiesta e': " + line + "  |");
        System.out.println("--------------------------------------------------------------------------------");
        System.out.println("");

        return line;
    }

    public static void main(String[] args) {
        String line = null, operTodo = null;

        line = initialization();

        while (true) {
            
            System.out.println("_____________________________________________");
            System.out.println("Inserire il numero dell'operazione: ");
            System.out.println("---------------------------------------------");
            System.out.println("1. ricerca di una sottostringa; ");
            System.out.println("2. conversione in maiuscolo;");
            System.out.println("3. conversione in minuscolo;");
            System.out.println("4. conteggio vocali;");
            System.out.println("5. conteggio consonanti;");
            System.out.println("r. reinserire la stringa;");
            System.out.println("q. per uscire.");
            System.out.println("_____________________________________________");
            System.out.print("> ");
            operTodo = scan();

            switch (operTodo) {
                case "1":
                    subString(line);
                break;

                case "2":
                    line = upcase(line);
                break;

                case "3":
                    line = lowcase(line);
                break;

                case "4":
                    int num_voc = contVoc(line);
                break;

                case "5":
                    contCons(line);
                break;

                case "r":
                    System.out.print("\033[H\033[2J");
                    line = initialization();
                break;

                case "q":
                    return;
            
                default:
                    System.out.println("Error! -  valore inserito non valido");
                    System.out.print("\033[H\033[2J");
                break;
            }

        } //while
    }
}