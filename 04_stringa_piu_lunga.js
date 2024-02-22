/**Trova la parola più lunga in una stringa: Scrivi uno script che trovi e restituisca la parola più lunga in una stringa di parole separate da spazi. */

let dim_max = 0, start = 0;

function search(frase) {
    let dim;

    if (frase.length == 1) {
        dim_max = 1;
    }else if(frase.length == 0){

    }else{
        for (let i = 0; i < frase.length + 1; i++) {
            if (frase[i] != " ") {
                dim++;
            }else{
                if (dim > dim_max) {
                    start = i - dim;
                    dim_max = dim;
                }
                dim = 0;
            }   
        }
    }
    
}

let frase = "la è buona con carbonara poco olio";

search(frase);

let parola = frase.substring(start, start+dim_max);

console.log("la parola più lunga nella frase " + frase +" e': " + parola);