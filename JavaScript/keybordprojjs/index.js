var select = `
<p>Seleziona il livello che vorresti: </p>
    <input name="level" type="radio" value="1" id="level_one">1° livello (lettera per lettera)</input><br>
    <input name="level" type="radio" value="2" id="level_two">2° livello (frase intera senza timer)</input><br>
    <input name="level" type="radio" value="3" id="level_trhee">3° livello (frase intera con il timer)</input><br>
    <button onClick="selected()">invi</button>
`;

var levelSelected;

function initSelect() {
    document.getElementById("app").insertAdjacentHTML('beforeend', select);
}

function selected() {
    levelSelected = document.querySelector('input[name="level"]:checked').value;
    switch (levelSelected) {
        case "1":
            console.log("primo preso");
            
            break;
    
        default:
            break;
    }
}

initSelect();