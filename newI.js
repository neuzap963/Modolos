import {
    abrirModal,
    cerrarModal,
    obtenerNombre,
    mostrarNombre
} from "./newE.js";

// Evento abrir modal
document.getElementById("btnAbrir").addEventListener("click", abrirModal);

// Evento enviar
document.getElementById("btnEnviar").addEventListener("click", () => {
    const nombre = obtenerNombre();
    mostrarNombre(nombre);
    cerrarModal();
});

