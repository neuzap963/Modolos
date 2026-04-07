export function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

export function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

export function obtenerNombre() {
    return document.getElementById("nombreInput").value;
}

export function mostrarNombre(nombre) {
    document.getElementById("resultado").textContent = "Welcome! " + nombre;
}

document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  const resultado = document.getElementById("resultado");

  if (!modal.contains(e.target) && resultado.textContent !== "Let's GO") {
    resultado.textContent = "Let's GO";
  }
});
