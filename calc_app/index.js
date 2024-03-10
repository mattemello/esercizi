/**
 * 
 * @author: Massimello Matteo
 * @description: This is a calendar app created with javascript
 */

var calc = `
    <div class="calcolatrice">
        <p class="schermino"></p> <br>
        <button value="7" onclick="number(7)"> 7 </button>
        <button value="7" onclick="number(7)"> 8 </button>
        <button value="7" onclick="number(7)"> 9 </button> <br>

        <button value="7" onclick="number(7)"> 4 </button>
        <button value="7" onclick="number(7)"> 5 </button>
        <button value="7" onclick="number(7)"> 6 </button> <br>

        <button value="7" onclick="number(7)"> 1 </button>
        <button value="7" onclick="number(7)"> 2 </button>
        <button value="7" onclick="number(7)"> 3 </button> <br>
    </div>
`;


/**
 * @function: a function to initialization the HTML page
 */
function initialization() {
    document.getElementById("app").insertAdjacentHTML('beforeend', calc);
}

initialization();