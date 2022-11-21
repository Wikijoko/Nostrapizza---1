let delivery1 = document.querySelector(".delivery-container");
let deliveryboton = document.querySelector(".delivery");
let nav = document.querySelector(".nav-container");
let entradas = document.querySelector(".entradas");
let saladas = document.querySelector(".saladas");
let pizzas = document.querySelector(".pizzas");
let extras = document.querySelector(".itemextra")
let arrow = document.querySelector(".arrow")
let bebidas = document.querySelector(".bebidas")
let sobremesas = document.querySelector(".sobremesas");
let vinos = document.querySelector(".vinos")
let menu = document.querySelector(".menu-container");
let menuentradas = document.querySelector(".entradasmenu");
let menusaladas = document.querySelector(".saladasmenu");
let menupizzas = document.querySelector(".pizzasmenu");
let menuextras = document.querySelector(".extrasmenu")
let menusobremesas = document.querySelector(".sobremesasmenu");
let menubebidas = document.querySelector(".bebidasmenu")
let menuvinos = document.querySelector(".vinosmenu")
let volverentradas = document.querySelector(".entradasvolver");
let volversaladas = document.querySelector(".saladasvolver");
let volverpizzas = document.querySelector(".pizzasvolver");
let volverextras = document.querySelector(".extrasvolver")
let volversobremesas = document.querySelector(".sobremesasvolver");
let volverbebidas = document.querySelector(".bebidasvolver")
let volvervinos = document.querySelector(".vinosvolver")

    deliveryboton.addEventListener('click', () => {
    delivery1.classList.toggle('activo')
})

    entradas.addEventListener('click', () => {
    menu.style.display="none";
    nav.style.height="140px";
    menuentradas.style.display="block";
    })
    saladas.addEventListener('click', () => {
    menu.style.display="none";
    nav.style.height="140px";
    menusaladas.style.display="block";
    })
    pizzas.addEventListener('click', () => {
    menu.style.display="none";
    nav.style.height="140px";
    menupizzas.style.display="block"
    })
    extras.addEventListener('click', () => {
    menuextras.classList.toggle("activo")
    arrow.classList.toggle("arrowgiro")
    extras.classList.toggle("margin")
    })    
    sobremesas.addEventListener('click', () =>{
    menu.style.display="none";
    nav.style.height="140px";
    menusobremesas.style.display="block";
    })
    bebidas.addEventListener('click', () =>{
    menu.style.display="none";
    nav.style.height="140px";
    menubebidas.style.display="block";
    })
    vinos.addEventListener('click', () =>{
    menu.style.display="none";
    nav.style.height="140px";
    menuvinos.style.display="block";
     })
    volverentradas.addEventListener('click', () => {
    menuentradas.style.display="none";
    nav.style.height="200px";
    menu.style.display="block";
    })
    volversaladas.addEventListener('click', () => {
    menusaladas.style.display="none"
    nav.style.height="200px";
    menu.style.display="block"
    })
    volverpizzas.addEventListener('click', () => {
    menupizzas.style.display="none"
    nav.style.height="200px";
    menu.style.display="block"
    })
    volversobremesas.addEventListener('click', () => {
    menusobremesas.style.display="none"
    nav.style.height="200px";
    menu.style.display="block"
    })
    volverbebidas.addEventListener('click', () => {
    menubebidas.style.display="none"
    nav.style.height="200px";
    menu.style.display="block"
    })
    volvervinos.addEventListener('click', () => {
    menuvinos.style.display="none"
    nav.style.height="200px";
    menu.style.display="block"
    })