/**Valida un indirizzo email:
 *  Scrivi uno script che validi se una stringa rappresenta 
 * un indirizzo email valido secondo i criteri standard. */

function identific(email) {
    let chiocciola = 0, punto_dopo = 0;
    for (let i = 0; i < email.length; i++) {
        switch (email.charAt(i)) {
            case '@':
                chiocciola = chiocciola + 1;
            break;

            case '.':
                if(chiocciola == 1){
                    punto_dopo = punto_dopo + 1;
                }
            break;

            case 'è':
            case 'é':
            case 'ò':
            case 'à':
            case 'ù':
            case 'ì':
                return false;
            break;

        
            default:
                break;
        }
    }

    if (chiocciola == 1 && punto_dopo >= 1) {
        return true;
    }else{
        return false;
    }
}

let email = "matteo.massimello@gmail.it";

if (identific(email)) {
    console.log("l'indirizzo è accettato.");
} else {
    console.log("l'indirizzo non è valido.");
}
