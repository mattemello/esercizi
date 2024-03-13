/**
 * 
 * @author: Massimello Matteo
 * @description: This is a calendar app created with javascript
 */

var calc = `
    <div class="calcolatrice">
        <p class="schermino" id="scherm"></p> <br>
        <button class="num" onclick="number(7)"> 7 </button>
        <button class="num" onclick="number(8)"> 8 </button>
        <button class="num" onclick="number(9)"> 9 </button> 
        <button onclick="operator('+')"> + </button><br>

        <button class="num" onclick="number(4)"> 4 </button>
        <button class="num" onclick="number(5)"> 5 </button>
        <button class="num" onclick="number(6)"> 6 </button>
        <button onclick="operator('-')"> - </button> <br>

        <button class="num" onclick="number(1)"> 1 </button>
        <button class="num" onclick="number(2)"> 2 </button>
        <button class="num" onclick="number(3)"> 3 </button>
        <button onclick="operator('*')"> x </button> <br>

        <button class="num" onclick="number(0)"> 0 </button>
        <button onclick="point()"> . </button>
        <button onclick="equal()"> = </button>
        <button onclick="operator('/')"> / </button>
        <button onclick="deletLast()"> <- </button>
    </div>
`;

var num = "", dimNum = 0; operatore = "";
var FUNC = {
    val: new Array,
    moltV: 0,
    divV: 0,
    dim: 0,
    use: false,
    divZero: false
}

/**
 * 
 * @function: a function to initialization the HTML page
 */
function initialization() {
    document.getElementById("app").insertAdjacentHTML('beforeend', calc);
} //initialization

/**
 * 
 * @function: it's the function to add the poit number
 * @returns: it doesn't return anything, it's jast to abort the function
 */
function point() {
    if (num == "") {
        window.alert("Error: non hai inserito nessun numero");
        return;
    }

    if (num.search(/\./) != -1) {
        window.alert("Error: hai già inserito un punto!");
        return;
    }


    num = num + ".";
    document.getElementById("scherm").insertAdjacentText("beforeend", ".");
} //point

/**
 * 
 * @param {*} currentNum: It's the number selected by the user;
 * @function: the function that memorize the number; 
 */
function number(currentNum) {

    if (FUNC.use == true) {
        document.getElementById("scherm").innerHTML = "";
        FUNC.use = false;
        FUNC.val.splice(0, 1);
        FUNC.dim -= 1;
    }

    if (FUNC.divZero == true) {
        document.getElementById("scherm").innerHTML = "";
        FUNC.divZero = false;
    }

    if (dimNum >= 15) {
        window.alert("Error: dimensione del numero raggiunta!");
        return;
    }

    dimNum += 1;
    num = num + currentNum;
    document.getElementById("scherm").insertAdjacentText("beforeend", currentNum);
} //number

/**
 * 
 * @function: this function take the operator and save the number in the array
 * @param {*} currentOper: It's the operator clicked by the user 
 */
function operator(currentOper){

    if (num == "" && FUNC.use == false) {
        window.alert("Error: hai inserito subito un operatore, non si puo'!");
        return;
    }else if (FUNC.use == true) {
        FUNC.use = false;
    }else{
        FUNC.val[FUNC.dim] = num;
        FUNC.dim++;
    }

    dimNum = 0;
    FUNC.val[FUNC.dim] = currentOper;
    FUNC.dim++;

    if (currentOper == '*') {
        FUNC.moltV++;
    } else if(currentOper == '/') {
        FUNC.divV++;
    }

    num = "";

    document.getElementById("scherm").insertAdjacentText("beforeend", currentOper);
} //operator


/**
 * 
 * @function: it's the function that do the operation and print the result.
 */
function equal() {
    FUNC.val[FUNC.dim] = num;
    FUNC.dim++;
    num = "";

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

    if (FUNC.divZero === true) {
        FUNC.val.splice(0, FUNC.val.length);
        document.getElementById("scherm").innerHTML = "ERRORE, non puoi dividere per zero";
        FUNC.dim -= 1;
    }else{
        FUNC.use = true;
        FUNC.val.splice(1, FUNC.val.length);
        document.getElementById("scherm").innerHTML = FUNC.val[0];
    }
    
} //equal

/**
 * 
 * @function: slit the potizion of the array when a operation are done
 * @param {*} position: the position of the array where the result is located
 */
function riposition(position) {
    let j = position;
    while (j != FUNC.dim) {
        FUNC.val[j] = FUNC.val[j + 2];
        j++;
    }
    FUNC.dim -= 2;
} //riposition

/**
 * 
 * @function: do the add
 * @param {*} num1: first number
 * @param {*} num2 : second number
 * @param {*} position: the position were the result need to be save in the array.
 */
function add(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) + parseFloat(num2, 10);
    riposition(position + 1);
} //add

/**
 * 
 * @function: do the sub
 * @param {*} num1: first number
 * @param {*} num2 : second number
 * @param {*} position: the position were the result need to be save in the array.
 */
function sub(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) - parseFloat(num2, 10);
    riposition(position + 1);
} //sub

/**
 * 
 * @function: do the moltiplication
 * @param {*} num1: first number
 * @param {*} num2 : second number
 * @param {*} position: the position were the result need to be save in the array.
 */
function molt(num1, num2, position) {
    FUNC.val[position] = parseFloat(num1, 10) * parseFloat(num2, 10);
    riposition(position + 1);
} //molt

/**
 * 
 * @function: do the division and controll if you divide the number for 0
 * @param {*} num1: first number
 * @param {*} num2 : second number
 * @param {*} position: the position were the result need to be save in the array.
 */
function div(num1, num2, position) {
    
    if (num2 == 0) {
        document.getElementById("scherm").innerHTML = "Error, n/0 impossibile";
        FUNC.val.splice(0, FUNC.val.length);
        FUNC.divZero = true;
        return;
    }
    FUNC.val[position] = parseFloat(num1, 10) / parseFloat(num2, 10);
    riposition(position + 1);
} //div


/**
 * 
 * @function: delete the last simbol, in case of the result remove the result.
 */
function deletLast() {

    if (num != "") {
        num = num.substring(0, num.length-1);
    }else{

        if(FUNC.val[FUNC.dim] == "*") {
            FUNC.moltV--;
        }
        
        if(FUNC.val[FUNC.dim] == "/") {
            FUNC.divV--;
        }
        FUNC.val.splice(FUNC.dim-1, 1);
        FUNC.dim--;

        if (FUNC.dim == 0) {
            FUNC.use = false;
        }else{
            FUNC.use = true;
        }

    }

    document.getElementById("scherm").innerHTML = FUNC.val.join("") + "" + num;
} //deletList

//initialization call
initialization();