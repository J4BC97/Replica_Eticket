const focusableElements = document.querySelectorAll(".menu-boton");

// Agregar un event listener a cada elemento
focusableElements.forEach((element) => {
    element.addEventListener("click", () => {
        // Quitar la clase "focused" de todos los elementos
        focusableElements.forEach((el) => el.classList.remove("desaparecer"));
        // Agregar la clase "focused" al elemento actual
        element.classList.add("desaparecer");
    });
});

// Cerrar el borde al hacer clic fuera de cualquier elemento focusable
document.addEventListener("click", (event) => {
    if (![...focusableElements].some((el) => el.contains(event.target))) {
        focusableElements.forEach((el) => el.classList.remove("desaparecer"));
    }
});