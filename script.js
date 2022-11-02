let delivery1 = document.querySelector(".delivery-container")
let deliveryboton = document.querySelector(".delivery-box")
let entradas = document.querySelector(".entradas")
let menu = document.querySelector(".menu-container")
let menuentradas = document.querySelector(".entradasmenu")
let volver = document.querySelector(".entradasvolver")

    deliveryboton.addEventListener('click', () => {
    delivery1.classList.toggle('activo')
})

    entradas.addEventListener('click', () => {
    menu.style.display="none";
    menuentradas.style.display="block";
})
    volver.addEventListener('click', () => {
    menuentradas.style.display="none";
    menu.style.display="block";
    })