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
let menudesk = document.getElementById("menuTittle")
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
    document.querySelector('#menuTittle').scrollIntoView({
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
        especialesD.classList.add('active')
        entradasD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.remove('active')
        bebidasD.classList.remove('active')
        vinosD.classList.remove('active')
        menuespeciales.style.display='flex'
        menuentradas.style.display='none'
        menupizzas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    entradasD.addEventListener('click', () => {
        entradasD.classList.add('active')
        especialesD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.remove('active')
        bebidasD.classList.remove('active')
        vinosD.classList.remove('active')
        menuentradas.style.display='flex'
        menuespeciales.style.display='none'
        menupizzas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    saladasD.addEventListener('click', () => {
        especialesD.classList.remove('active')
        entradasD.classList.remove('active')
        saladasD.classList.add('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.remove('active')
        bebidasD.classList.remove('active')
        vinosD.classList.remove('active')
        menusaladas.style.display='flex'
        menuespeciales.style.display='none'
        menupizzas.style.display='none'
        menubebidas.style.display='none'
        menuentradas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    pizzasD.addEventListener('click', () => {
        especialesD.classList.remove('active')
        entradasD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.add('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.remove('active')
        bebidasD.classList.remove('active')
        vinosD.classList.remove('active')
        menupizzas.style.display='flex'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    extrasD.addEventListener('click', () => {
        especialesD.classList.remove('active')
        entradasD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.add('active')
        bebidasD.classList.remove('active')
        vinosD.classList.remove('active')
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
        especialesD.classList.remove('active')
        entradasD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.add('active')
        extrasD.classList.remove('active')
        bebidasD.classList.remove('active')
        vinosD.classList.remove('active')
        menusobremesas.style.display='flex'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menupizzas.style.display='none'
        menuvinos.style.display='none'
        extrasmenu.style.display='none'
    })
    bebidasD.addEventListener('click', () => {
        especialesD.classList.remove('active')
        entradasD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.remove('active')
        bebidasD.classList.add('active')
        vinosD.classList.remove('active')
        menubebidas.style.display='flex'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menupizzas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menuvinos.style.display='none'
        menuextras.style.display='none'
    })
    vinosD.addEventListener('click', () => {
        especialesD.classList.remove('active')
        entradasD.classList.remove('active')
        saladasD.classList.remove('active')
        pizzasD.classList.remove('active')
        sobremesasD.classList.remove('active')
        extrasD.classList.remove('active')
        bebidasD.classList.remove('active')
        vinosD.classList.add('active')
        menuvinos.style.display='flex'
        menuespeciales.style.display='none'
        menuentradas.style.display='none'
        menubebidas.style.display='none'
        menusaladas.style.display='none'
        menusobremesas.style.display='none'
        menupizzas.style.display='none'
        menuextras.style.display='none'
    })


    const slidere = document.querySelector(".entradasmenucontainer");
    const sliders = document.querySelector(".saladasmenucontainer");
    const sliderp = document.querySelector(".pizzamenucontainer");
    const sliderb = document.querySelector(".bebidasmenucontainer");
    const sliderv = document.querySelector(".vinosmenucontainer");
    let slidersectione = document.querySelectorAll(".item1boxe");
    let slidersections = document.querySelectorAll(".item1boxs");
    let slidersectionp = document.querySelectorAll(".item3box");
    let slidersectionb = document.querySelectorAll(".item1boxb");
    let slidersectionv = document.querySelectorAll(".item1boxv");
    let slidersectionLaste = slidersectione[slidersectione.length -1];
    let slidersectionLasts = slidersections[slidersections.length -1];
    let slidersectionLastp = slidersectionp[slidersectionp.length -1];
    let slidersectionLastb = slidersectionb[slidersectionb.length -1];
    let slidersectionLastv = slidersectionv[slidersectionv.length -1];

    const btnlefte = document.querySelector(".leftarrow");
    const btnrighte = document.querySelector(".rightarrow");
    const btnlefts = document.querySelector(".leftarrows");
    const btnrights = document.querySelector(".rightarrows");
    const btnleftp = document.querySelector(".leftarrowp");
    const btnrightp = document.querySelector(".rightarrowp");
    const btnleftb = document.querySelector(".leftarrowb");
    const btnrightb = document.querySelector(".rightarrowb");
    const btnleftv = document.querySelector(".leftarrowv");
    const btnrightv = document.querySelector(".rightarrowv");
    
    slidere.insertAdjacentElement("afterbegin", slidersectionLaste);
    sliders.insertAdjacentElement("afterbegin", slidersectionLasts);
    sliderp.insertAdjacentElement("afterbegin", slidersectionLastp);
    sliderb.insertAdjacentElement("afterbegin", slidersectionLastb);
    sliderv.insertAdjacentElement("afterbegin", slidersectionLastv);

    function moverderechae() {
        let slidersectionFirste = document.querySelectorAll(".item1boxe") [0]
        slidere.style.marginleft = "-200%";
        slidere.style.transition = "all .3s";
        let slidersectionFirsts = document.querySelectorAll(".item1boxs") [0]
        sliders.style.marginleft = "-200%";
        sliders.style.transition = "all .3s";
        let slidersectionFirstp = document.querySelectorAll(".item3box") [0]
        sliderp.style.marginleft = "-200%";
        sliderp.style.transition = "all .3s";
        let slidersectionFirstb = document.querySelectorAll(".item1boxb") [0]
        sliderb.style.marginleft = "-200%";
        sliderb.style.transition = "all .3s";
        let slidersectionFirstv = document.querySelectorAll(".item1boxv") [0]
        sliderv.style.marginleft = "-200%";
        
        setTimeout(function(){
            slidere.style.transition = "none";
            slidere.insertAdjacentElement('beforeend', slidersectionFirste);
            slidere.style.marginleft = "-100%";
            sliders.style.transition = "none";
            sliders.insertAdjacentElement('beforeend', slidersectionFirsts);
            sliders.style.marginleft = "-100%";
            sliderp.style.transition = "none";
            sliderp.insertAdjacentElement('beforeend', slidersectionFirstp);
            sliderp.style.marginleft = "-100%";
            sliderb.style.transition = "none";
            sliderb.insertAdjacentElement('beforeend', slidersectionFirstb);
            sliderb.style.marginleft = "-100%";
            
            sliderv.insertAdjacentElement('beforeend', slidersectionFirstv);
            sliderv.style.marginleft = "-100%";
        }, 300);
    }
    function moverizquierdae() {
        let slidersectione = document.querySelectorAll(".item1boxe")
        let slidersectionLaste = slidersectione[slidersectione.length -1];
        slidere.style.marginleft = "0";
        slidere.style.transitionproperty = "all";
        slidere.style.transitionduration = "0.3s";
        let slidersections = document.querySelectorAll(".item1boxs")
        let slidersectionLasts = slidersections[slidersections.length -1];
        sliders.style.marginleft = "0";
        sliders.style.transitionproperty = "all";
        sliders.style.transitionduration = "0.3s";
        let slidersectionp = document.querySelectorAll(".item3box")
        let slidersectionLastp = slidersectionp[slidersectionp.length -1];
        sliderp.style.marginleft = "0";
        sliderp.style.transitionproperty = "all";
        sliderp.style.transitionduration = "0.3s";
        let slidersectionb = document.querySelectorAll(".item1boxb")
        let slidersectionLastb = slidersectionb[slidersectionb.length -1];
        sliderb.style.marginleft = "0";
        sliderb.style.transitionproperty = "all";
        sliderb.style.transitionduration = "0.3s";
        let slidersectionv = document.querySelectorAll(".item1boxv")
        let slidersectionLastv = slidersectionv[slidersectionv.length -1];
        sliderv.style.marginleft = "0";
        sliderv.style.transitionproperty = "all";
        sliderv.style.transitionduration = "0.3s";
        setTimeout(function(){
            slidere.insertAdjacentElement('afterBegin', slidersectionLaste);
            slidere.style.marginleft = "-100%";
            sliders.insertAdjacentElement('afterBegin', slidersectionLasts);
            sliders.style.marginleft = "-100%";
            sliderp.insertAdjacentElement('afterBegin', slidersectionLastp);
            sliderp.style.marginleft = "-100%";
            sliderb.insertAdjacentElement('afterBegin', slidersectionLastb);
            sliderb.style.marginleft = "-100%";
            sliderv.insertAdjacentElement('afterBegin', slidersectionLastv);
            sliderv.style.marginleft = "-100%";
        }, 300);
    }
    btnrighte.addEventListener('click', function(){
        moverderechae();
    });
    btnrights.addEventListener('click', function(){
        moverderechae();
    });
    btnrightp.addEventListener('click', function(){
        moverderechae();
    });
    btnrightb.addEventListener('click', function(){
        moverderechae();
    });
    btnrightv.addEventListener('click', function(){
        moverderechae();
    });
    btnlefte.addEventListener('click', function(){
        moverizquierdae();
    });
    btnlefts.addEventListener('click', function(){
        moverizquierdae();
    });
    btnleftp.addEventListener('click', function(){
        moverizquierdae();
    });
    btnleftb.addEventListener('click', function(){
        moverizquierdae();
    });
    btnleftv.addEventListener('click', function(){
        moverizquierdae();
    });
    


 