import { state } from "./state";

const template = `
    <header class="main">
        <a class="logo">P</a>
        <button>Oggi</button>

        <nav>
            <button data-dir="prev"><-</button>
            <button data-dir="next">-></button>
        </nav>

        <h2>Marzo 2024</h2>
    </header>
`;

export function initHeader(){
    state.$element.insertAdjacentHTML('beforeend', template);
}