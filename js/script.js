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
let menuespeciales = document.querySelector(".especialesmenu")
let menuentradas = document.querySelector(".entradasmenu");
let menusaladas = document.querySelector(".saladasmenu");
let menupizzas = document.querySelector(".pizzasmenu");
let menuextras = document.querySelector(".extrasmenu")
let menusobremesas = document.querySelector(".sobremesasmenu");
let menubebidas = document.querySelector(".bebidasmenu")
let menuvinos = document.querySelector(".vinosmenu")
let extrasmenu = document.querySelector(".extrasmenuD")
let volverespeciales = document.querySelector(".especialesvolver")
let volverentradas = document.querySelector(".entradasvolver");
let volversaladas = document.querySelector(".saladasvolver");
let volverpizzas = document.querySelector(".pizzasvolver");
let volverextras = document.querySelector(".extrasvolver")
let volversobremesas = document.querySelector(".sobremesasvolver");
let volverbebidas = document.querySelector(".bebidasvolver")
let volvervinos = document.querySelector(".vinosvolver")
let popup = document.querySelector(".popup");
let arrowF = document.querySelector(".arrowF")
let especiales = document.querySelector(".especiales")
let fullImgBox = document.getElementById("fullImgBox")
let fullImg = document.getElementById("fullImg")
let fullText = document.getElementById("fullText")
let especialesD = document.querySelector(".especiais-desk")
let entradasD = document.querySelector(".entradas-desk")
let saladasD = document.querySelector(".saladas-desk")
let pizzasD = document.querySelector(".pizzas-desk")
let sobremesasD = document.querySelector(".sobremesas-desk")
let bebidasD = document.querySelector(".bebidas-desk")
let vinosD = document.querySelector(".vinos-desk")
let extrasD = document.querySelector(".extras-desk")
let galeria = document.getElementById("galeria")
let menudesk = document.getElementById("menu-desk")
let contactoN = document.getElementById("contactoN")
let galeriaN = document.getElementById("galeriaN")
let menuN = document.getElementById("menuN")

contactoN.addEventListener('click', () => {
    document.querySelector('#footerD').scrollIntoView({
        behavior: 'smooth'
      });
})
galeriaN.addEventListener('click', () => {
    document.querySelector('#galeria').scrollIntoView({
        behavior: 'smooth'
      });
})
menuN.addEventListener('click', () => {
    document.querySelector('#menu-desk').scrollIntoView({
        behavior: 'smooth'
      });
})
function openImg(reference){
    fullImgBox.style.display="flex";
    fullImg.src = reference;
    fullText = reference;
}
function CloseImg(){
    fullImgBox.style.display="none"
}
    
    deliveryboton.addEventListener('click', () => {
    delivery1.classList.toggle('activo')
});
    arrowF.addEventListener('click', () => {
        popup.classList.toggle("activo")
        arrowF.classList.toggle("activo")
    });

    especiales.addEventListener('click', () => {
    menu.style.display="none";
    nav.style.height="140px";
    menuespeciales.style.display="block";
    })
    entradas.addEventListener('click', () => {
    menu.style.display="none";
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
    volverespeciales.addEventListener('click', () => {
    menuespeciales.style.display="none";
    menu.style.display="block";
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
    volvervinos.addEventListener('click', () => {
    menuvinos.style.display="none"
    menu.style.display="block"
    })

    
    especialesD.addEventListener('click', () => {
        menuespeciales.style.display='grid'
        menuentradas.style.display='none'
        menupizzas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    entradasD.addEventListener('click', () => {
        menuentradas.style.display='grid'
        menuespeciales.style.display='none'
        menupizzas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    saladasD.addEventListener('click', () => {
        menusaladas.style.display='grid'
        menuespeciales.style.display='none'
        menupizzas.style.display='none'
        menubebidas.style.display='none'
        menuentradas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    pizzasD.addEventListener('click', () => {
        menupizzas.style.display='grid'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    extrasD.addEventListener('click', () => {
        extrasmenu.style.display='grid'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        menupizzas.style.display='none'
    })
    sobremesasD.addEventListener('click', () => {
        menusobremesas.style.display='grid'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menupizzas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    bebidasD.addEventListener('click', () => {
        menubebidas.style.display='grid'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menupizzas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        menuextras.style.display='none'
    })
    vinosD.addEventListener('click', () => {
        menuvinos.style.display='grid'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menupizzas.style.display='none'
        menuextras.style.display='none'
    })