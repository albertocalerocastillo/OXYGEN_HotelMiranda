document.addEventListener("DOMContentLoaded", () => {
    const menuIcono = document.getElementById("menu");
    const menuImg = document.getElementById("menu-img");
    const desplegable = document.getElementById("desplegable");

    const basePath = window.location.pathname.includes("aboutUs") || window.location.pathname.includes("rooms") || window.location.pathname.includes("offers") 
    || window.location.pathname.includes("contact")? "../" : "./";

    menuIcono.addEventListener("click", () => {
        desplegable.classList.toggle("activo");

        menuImg.src = desplegable.classList.contains("activo")
            ? `${basePath}images/close.png`
            : `${basePath}images/nav.png`;

        document.querySelector(".navbar").classList.toggle("navbar-desplegado");
    });
});