/**
 * 
 * @author: Massimello Matteo
 * @description: This is a calendar app created with javascript
 */

var calc = `
    <div class="calcolatrice">
        <p class="schermino" id="scherm"></p> <br>
        <button onclick="number(7)"> 7 </button>
        <button onclick="number(8)"> 8 </button>
        <button onclick="number(9)"> 9 </button> 
        <button onclick="operator('+')"> + </button><br>

        <button onclick="number(4)"> 4 </button>
        <button onclick="number(5)"> 5 </button>
        <button onclick="number(6)"> 6 </button>
        <button onclick="operator('-')"> - </button> <br>

        <button onclick="number(1)"> 1 </button>
        <button onclick="number(2)"> 2 </button>
        <button onclick="number(3)"> 3 </button>
        <button onclick="operator('*')"> x </button> <br>

        <button onclick="number(0)"> 0 </button>
        <button onclick="equal()"> = </button>
        <button onclick="operator('/')"> / </button>
    </div>
`;

var num = "", operatore = "";
var FUNC = {
    val: new Array,
    moltV: 0,
    divV: 0,
    dim: 0,
    use: false
}

/**
 * 
 * @function: a function to initialization the HTML page
 */
function initialization() {
    document.getElementById("app").insertAdjacentHTML('beforeend', calc);
}


/**
 * 
 * @param {*} currentNum: It's the number selected by the user;
 * @function: the function that memorize the number; 
 */
function number(currentNum) {

    if (FUNC.use == true) {
        document.getElementById("scherm").innerHTML = "";
        FUNC.use = false;
    }

    num = num + currentNum;
    document.getElementById("scherm").insertAdjacentText("beforeend", currentNum);
}

/**
 * 
 * @param {*} currentOper: It's the operator clicked by the user 
 */
function operator(currentOper){

    if (num == "") {
        window.alert("hai inserito subito un operatore, non si puo'!");
        console.error("hai inserito subito un operatore, non si puo'!");
        return;
    }

    FUNC.val[FUNC.dim] = num;
    FUNC.dim++;
    FUNC.val[FUNC.dim] = currentOper;
    FUNC.dim++;

    if (currentOper == '*') {
        FUNC.moltV++;
    } else if(currentOper == '/') {
        FUNC.divV++;
    }

    num = "";

    document.getElementById("scherm").insertAdjacentText("beforeend", currentOper);
}

function equal() {
    FUNC.val[FUNC.dim] = num;
    FUNC.dim++;
    num = "";
    console.log("array: " + FUNC.val);

    if (FUNC.moltV != 0) {
        for (let i = 1; i < FUNC.dim; i += 2) {
            if(FUNC.val[i] == '*'){
                molt(FUNC.val[i-1], FUNC.val[i+1], i-1);
                i -= 2;
            }
        }
    }
    if (FUNC.divV != 0) {
        for (let i = 1; i < FUNC.dim; i += 2) {
            if(FUNC.val[i] == '/'){
                div(FUNC.val[i-1], FUNC.val[i+1], i-1);
                i -= 2;
            }
        }
    }

    for (let i = 1; i < FUNC.dim; i += 2) {
        if(FUNC.val[i] == '+'){
            add(FUNC.val[i-1], FUNC.val[i+1], i - 1);
            i -= 2;
        }else{
            sub(FUNC.val[i-1], FUNC.val[i+1], i - 1);
            
            i -= 2;
        }
    }

    FUNC.use = true;
    FUNC.val.splice(1, FUNC.val.length);
    document.getElementById("scherm").innerHTML = FUNC.val[0];
    FUNC.val.splice(0, 1);
    FUNC.dim -= 1;
    console.log("array: " + FUNC.dim);
}

function riposition(position) {
    let j = position;
    while (j != FUNC.dim) {
        FUNC.val[j] = FUNC.val[j + 2];
        j++;
    }
    FUNC.dim -= 2;
}

function add(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) + parseFloat(num2, 10);
    riposition(position + 1);
}

function sub(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) - parseFloat(num2, 10);
    riposition(position + 1);
}

function molt(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) * parseFloat(num2, 10);
    riposition(position + 1);
}

function div(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) / parseFloat(num2, 10);
    riposition(position + 1);
}

initialization();