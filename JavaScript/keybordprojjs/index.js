var select = `
<p>Seleziona il livello che vorresti: </p>
<form>
    <input name="level" type="radio" id="level_one">1° livello (lettera per lettera)</input><br>
    <input name="level" type="radio" id="level_two">2° livello (frase intera senza timer)</input><br>
    <input name="level" type="radio" id="level_trhee">3° livello (frase intera con il timer)</input><br>
    <button onClick="selected()">invia</button>
</form>
`;

function initSelect() {
    document.getElementById("app").insertAdjacentHTML('beforeend', select);
}



initSelect();