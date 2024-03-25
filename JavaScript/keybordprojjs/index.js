var select = `
<p>Seleziona il livello che vorresti: </p>
<form id="level">
    <input name="level" type="radio" value="1" id="level_one">1° livello (lettera per lettera)</input><br>
    <input name="level" type="radio" value="2" id="level_two">2° livello (frase intera senza timer)</input><br>
    <input name="level" type="radio" value="3" id="level_trhee">3° livello (frase intera con il timer)</input><br>
    <button onClick="selected()">invia</button>
</form>
`;

var levelSelected;

function initSelect() {
    document.getElementById("app").insertAdjacentHTML('beforeend', select);
}

function selected() {
    levelSelected = document.getElementById("level").value;
    switch (levelSelected) {
        case "1":
            document.getElementById("app").insertAdjacentHTML('beforeend', "andato a");
            break;
    
        default:
            break;
    }
}

initSelect();