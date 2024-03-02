import { state } from "./state"

export function initApp(selector) {
    state.$element = document.querySelector(selector);
    initHeader();
}