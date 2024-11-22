const focusableElements = document.querySelectorAll(".menu-boton");

// Agregar un event listener a cada elemento
focusableElements.forEach((element) => {
    element.addEventListener("click", () => {
        // Quitar la clase "desaparecer" de todos los elementos
        focusableElements.forEach((el) => el.classList.remove("desaparecer"));
        // Agregar la clase "desaparecer" al elemento actual
        element.classList.add("desaparecer");
    });
});

// Cerrar el borde al hacer clic fuera de cualquier elemento menu-boton
document.addEventListener("click", (event) => {
    if (![...focusableElements].some((el) => el.contains(event.target))) {
        focusableElements.forEach((el) => el.classList.remove("desaparecer"));
    }
});