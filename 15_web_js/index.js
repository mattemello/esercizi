/*var list = {
    calendar: {
        data: new Array,
        titolo: new Array,
        ora_inizio: new Array,
        ora_fine: new Array,
        direct: new Array,
        dim: 0
    },

    todo: {
        done: new Array,
        titolo: new Array,
        descrizione: new Array,
        dim: 0
    },

    directory: {
        titolo: new Array,
        descrizione: new Array,
        dim: 0
    }
}

function aggiunta_todo(){
    list.todo.titolo[list.todo.dim] = document.getElementById("titolo_todo").value;
    list.todo.descrizione[list.todo.dim] = document.getElementById("descrizione_todo").value;
    list.todo.done[list.todo.dim] = false;
    scrittura_todo();
    list.todo.dim += 1;
}

function scrittura_todo() {
    document.getElementById("add_todo").innerHTML += '<input type="checkbox" onclick="compleate()">' + list.todo.titolo[list.todo.dim] + '</input>';
    return;
}

function compleate() {
    console.log("ecco");
}

function direct_add() {
    list.directory.titolo[list.directory.dim] = document.getElementById("direct_titolo").value;
    list.directory.descrizione[list.directory.dim] = document.getElementById("direct_desc").value;
    document.getElementById("add_direct").innerHTML += '<li>' + list.directory.titolo[list.directory.dim] + '</li>';
    list.directory.dim += 1;
}*/

class PubSub{
    subscribers = [];

    subscribe(callback){
        this.subscribers.push(callback);
    };

    publish(data){
        this.subscribers.forEach(callback => callback(data));
    }
}

const state = {
    $element: null,

    calendar : {
        $element: null,
        view: "month",
        date: new Date(),
        onDateChanges$: new PubSub(),
        setDate: () => {}
    },

    version: "1.0.0"
}

function initApp(selector) {
    state.$element = document.querySelector(selector);
}

function initHeader() {
    const header = document.querySelector("header.main");
    header.addEventListener("click", ev => {
        const {target} = ev;

        switch (target.tagName) {
            case "BUTTON":{
                const parent = target.parentElement;
                parent.tagName === "NAV" ? onNavClick(target) : onTodayClick();
            }
                
                break;
        
            default:
                break;
        }
    });

    function onNavClick(target) {
        
    }

    function onTodayClick(target) {
        
    }
}

function initCalendar() {
    state.calendar.$element = state.$element.querySelector("selection.calendar");
    updateView();
}

function updateView() {
    const {date} = state.calendar;

    const currentYear = getYear();
    const currentMonth = getMonth();
    const currentDay = getDay();

    const year = getYear(date);
    const month = getMonth(date);

    const days = getDaysInMonth(year, month);

    let content = "";
    for (let day = 1; day < days; day++) {
        let isCurrentDay = currentYear === year && currentMonth === month && currentDay === day;   
        content += `
            <div class="cell ${isCurrentDay ? "act" : ""}" date-date="${year}-${month}-${day}">
                <lable>${day}</lable>
            </div>
        `
    }

    state.calendar.$element.querySelector(".inner").innerHTML = content;
}

function getYear(date) {
    return (date ?? now).getFullYear();
}

function getMonth(date) {
    return (date ?? now).getMonth();
}

function getDay(date) {
    return (date ?? now).getDay();
}

function getDaysInMonth(year, month) {
    year = year ?? getYear();
    month = month ?? getMonth();
    return new Date(year, month + 1, 0).getDate();
}

function getExactDate(year, month, day) {
    year = year ?? getYear();
    month = month ?? getMonth();
    day = day ?? getDay();
    return new Date(year, month, day);
}

function addMonths(date, toAdd) {
    const nextMonth = date.getMonth() + toAdd;
    return new Date(date.setMonth(nextMonth));
}
  