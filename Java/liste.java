/**
 * 
 * Gestione delle liste: Crea un programma che gestisca una lista di elementi, consentendo all'utente di aggiungere, rimuovere o cercare elementi nella lista.
 * @author: Massimello Matteo
 */

package Java;

public class liste{

	private int elem;
  private liste next; 

  protected liste() {
    this.elem = elem;
    this.next = next;
  }

  public int getElem() {
    return elem;
  }

  public liste getNext() {
    return next;
  }

  public void setElem(int elem) {
    this.elem = elem;
  }

  public void setNext(liste next) {
    this.next = next;
  }
}
