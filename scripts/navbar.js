document.addEventListener("DOMContentLoaded", () => {
    const menuIcono = document.getElementById("menu");
    const menuImg = document.getElementById("menu-img");
    const desplegable = document.getElementById("desplegable");

    menuIcono.addEventListener("click", () => {
        desplegable.classList.toggle("activo");
        menuImg.src = desplegable.classList.contains("activo")
            ? "./images/close.png"
            : "./images/nav.png";
        document.querySelector(".navbar").classList.toggle("navbar-desplegado");
    });
});