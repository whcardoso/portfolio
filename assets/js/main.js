import valida from "./validador.js";

const inputs = document.querySelectorAll('[data-type]');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => valida(evento.target));
})