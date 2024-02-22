/**Controlla se una parola è un'anagramma di un'altra: 
 * Scrivi uno script che verifichi se due parole sono anagrammi l'una dell'altra. 
 * Due parole sono anagrammi se hanno le stesse lettere disposte in modo diverso. */

function control(word1, word2) {

    if (word1.length != word2.length) {
        return false;
    }

    let contr = 0;
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if(word1.charAt(i) == word2.charAt(j)) {
                word2[j] = " ";
                contr++;
                break;
            }
        }
        if (contr == 0) {
            return false;
        }
        contr = 0;
    }

    return true;
}

let word1 = "", word2 = "";

let its_anagram = control(word1, word2);

if (its_anagram) {
    console.log("la parola " + word1 + " e la parola " + word2 + " sono un anagramma");
} else {
    console.log("la parola " + word1 + " e la parola " + word2 + " non sono un anagramma");
}