let delivery1 = document.querySelector(".delivery-container");
let deliveryboton = document.querySelector(".delivery-box");
let entradas = document.querySelector(".entradas");
let saladas = document.querySelector(".saladas");
let pizzas = document.querySelector(".pizzas");
let bebidas = document.querySelector(".bebidas")
let sobremesas = document.querySelector(".sobremesas");
let menu = document.querySelector(".menu-container");
let menuentradas = document.querySelector(".entradasmenu");
let menusaladas = document.querySelector(".saladasmenu");
let menupizzas = document.querySelector(".pizzasmenu");
let menusobremesas = document.querySelector(".sobremesasmenu");
let menubebidas = document.querySelector(".bebidasmenu")
let volverentradas = document.querySelector(".entradasvolver");
let volversaladas = document.querySelector(".saladasvolver");
let volverpizzas = document.querySelector(".pizzasvolver");
let volversobremesas = document.querySelector(".sobremesasvolver");
let volverbebidas = document.querySelector(".bebidasvolver")

    deliveryboton.addEventListener('click', () => {
    delivery1.classList.toggle('activo')
})

    entradas.addEventListener('click', () => {
    menu.style.display="none";
    menuentradas.style.display="block";
    })
    saladas.addEventListener('click', () => {
    menu.style.display="none";
    menusaladas.style.display="block";
    })
    pizzas.addEventListener('click', () => {
    menu.style.display="none";
    menupizzas.style.display="block"
    })
    sobremesas.addEventListener('click', () =>{
    menu.style.display="none";
    menusobremesas.style.display="block";
    })
    bebidas.addEventListener('click', () =>{
    menu.style.display="none";
    menubebidas.style.display="block";
    })
    volverentradas.addEventListener('click', () => {
    menuentradas.style.display="none";
    menu.style.display="block";
    })
    volversaladas.addEventListener('click', () => {
    menusaladas.style.display="none"
    menu.style.display="block"
    })
    volverpizzas.addEventListener('click', () => {
    menupizzas.style.display="none"
    menu.style.display="block"
    })
    volversobremesas.addEventListener('click', () => {
    menusobremesas.style.display="none"
    menu.style.display="block"
    })
    volverbebidas.addEventListener('click', () => {
    menubebidas.style.display="none"
    menu.style.display="block"
    })