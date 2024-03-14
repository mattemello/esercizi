/**
 * 
 * 01_calcolatrice
 * @author: Massimello Matteo
 * Crea una calcolatrice che possa eseguire operazioni di base come addizione, 
 * sottrazione, moltiplicazione e divisione. Assicurati di gestire eventuali errori di input.
 */

package Java;

import java.util.Scanner;

public class j01_calcolatrice {

    //the variable for take the number
    public static Scanner myObj = new Scanner(System.in);

    /**
     * a function to take the input
     * @return: the input
     */
    private static String scan(){
        return myObj.nextLine();
    }//scan

    /**
     * the function to do the operation
     * @param oper: the operetor
     * @param n1: the first number
     * @param n2: the second number
     * @return: the result of the operation (num1 oper num2)
     */
    private static float controllOperatore(String oper, String n1, String n2){
        
        if (n1 != null && n2 != null) {
            switch (oper) {
                case "+":
                    return (Float.valueOf(n1) + Float.valueOf(n2));

                case "-":
                    return (Float.valueOf(n1) - Float.valueOf(n2));

                case "*":
                    return (Float.valueOf(n1) * Float.valueOf(n2));

                case "/":
                    if (n2.equals("0")) {
                        throw new IllegalArgumentException("Stai dividendo per zero, non puoi!!!");
                    }else{
                        return (Float.valueOf(n1) / Float.valueOf(n2));
                    }
            
                default:
                    throw new IllegalArgumentException("Scritta nell'operatore non valida!!!");
            } //switch
        } //if
        throw new IllegalArgumentException("Non hai scritto uno dei due valori");
    }//controllOperatore

    public static void main(String[] args) {
        
        String num1 = null, oper = null, num2 = null;

        while(true) {
            System.out.println("____________________________");
            System.out.println("       Calcolatrice");
            System.out.println("____________________________");
            System.out.println("1        2        3        +");
            System.out.println("4        5        6        -");
            System.out.println("7        8        9        *");
            System.out.println("         0                 /");
            System.out.println("q per uscire/ q for exit    ");
            System.out.println("____________________________");
            System.out.print("inserire il primo numero ");
            num1 = scan();
            System.out.print("inserire il l'operatore ");
            oper = scan();
            System.out.print("inserire il secondo numero ");
            num2 = scan();

            System.out.print("\033[H\033[2J"); 

            if (num1.equals("q") || num2.equals("q") || oper.equals("q"))
                break;

            System.out.println("il risultato è: " + controllOperatore(oper, num1, num2));
            num1 = null;
            oper = null;
            num2 = null;
            
        }//while

    }//main
    
} //class