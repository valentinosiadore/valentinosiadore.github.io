/*function seleccionar(link){
    var opciones = document.querySelector("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
}*/


const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
    enlaces.classList.toggle("activado");
    barras.forEach(child => {child.classList.toggle("animado")});
});
