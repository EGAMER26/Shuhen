function menuShow() {
    let pointMenu = document.querySelector("nav .menuList")

    if(pointMenu.classList.contains("show")) {
        pointMenu.classList.remove("show")
    } else { pointMenu.classList.add("show") 

    }
}
function menuButtonCloseShow() {
    let buttonCloseShow = document.querySelector(".closeMenu")

    if(buttonCloseShow.classList.contains("showw")) {
        buttonCloseShow.classList.remove("showw")
    } else { buttonCloseShow.classList.add("showw") 

    }
}

function menu() {
    menuShow();
    menuButtonCloseShow();
    bodyOverflow()
}

// function navOnTop() {
//     let menu = document.querySelector("nav")
//     let logo = document.querySelector(".menuLogo img")
    

//     if(scrollY > 100 ) {
//         menu.classList.add("navOnTop") 
//         logo.classList.add("menuLogoTop") 
//     } else {
//         menu.classList.remove("navOnTop")
//         logo.classList.remove("menuLogoTop")
//     }
// }
function navOnTop() {
    let menu = document.querySelector(".allNavContent")
    let logo = document.querySelector(".allNavTopContent")
    let shadow = document.querySelector(".menuList")
    

    if(scrollY > 100 ) {
        menu.classList.add("sideBarHidenn") 
        logo.classList.add("showw") 
        shadow.classList.add("boxShadowTop") 
    } else {
        menu.classList.remove("sideBarHidenn")
        logo.classList.remove("showw")
        shadow.classList.remove("boxShadowTop") 

    }
}


function bodyOverflow() {
    let menu = document.querySelector("body")
    let pointMenu = document.querySelector("nav .menuList")

    // let logo = document.querySelector(".navTop")
    

    if(pointMenu.classList.contains("show")) {
        menu.classList.add("offScroll")
} else {
        menu.classList.remove("offScroll")
    
}
}


// -----------------------------------------------CARRD------------------------------------------------------

function cardImgHover() {
    let cardImg = document.querySelector(".ilustracaoProduto")

    if(cardImg.classList.contains("cardImgHover")) {
        cardImg.classList.remove("cardImgHover")
    } else { cardImg.classList.add("cardImgHover") 
}

}
function cardImgheadFoneHover() {
    let cardImg = document.querySelector(".headFone")

    if(cardImg.classList.contains("cardImgHover")) {
        cardImg.classList.remove("cardImgHover")
    } else { cardImg.classList.add("cardImgHover") 
}
}


    let img = document.querySelector("#ilustracaoDoProduto")
    let blackButton = document.getElementById("blackChoice")
    let whiteButton = document.getElementById("whiteChoice")

    blackButton.addEventListener("mouseover", function(){
        img.src = "Assets/produto2.png" });
    whiteButton.addEventListener("mouseover", function(){
        img.src = "Assets/produto1.png"
    });
    function descricaoProduto() {
        saibaMaisOn()
        descricaoProdutoOn();
    }
    function descricaoProdutoOn() {
  
         let cardP = document.querySelector(".descricaoProduto")
        
        
        if(cardP.classList.contains("showw")) {
            cardP.classList.remove("showw")
        }else {
        cardP.classList.add("showw") 
    }
    }

// -----------------------------------------------GSAP------------------------------------------------------


function saibaMaisOn() {
    let cardP = document.querySelector(".descricaoProduto")
        
        
    if(!cardP.classList.contains("showw")) {
    // gsap.to(".ilustracaoProduto", {y:-40, duration:.1, ease: "back"});
    gsap.to(".tituloProduto", {y:-47, duration:.1, ease: "back"});
    gsap.to(".precoProduto", {y:-40, duration:.1, ease: "back"});
    gsap.to(".opcoes", {y:-40, duration:.1, ease: "back"});
    gsap.to(".saibaMais", {y:-40, duration:.1, ease: "back"});

} else {
    // gsap.to(".ilustracaoProduto", {y:0, duration:.1, ease: "back"});
    gsap.to(".tituloProduto", {y:0, duration:.1, ease: "back"});
    gsap.to(".precoProduto", {y:0, duration:.1, ease: "back"});
    gsap.to(".opcoes", {y:0, duration:.1, ease: "back"});
    gsap.to(".saibaMais", {y:0, duration:.1, ease: "back"});

}
}
// -----------------------------------------------FIM GSAP------------------------------------------------------


// -----------------------------------------------SLIDER ROTATIVO------------------------------------------------------

let count = 1;
document.getElementById("radio1").checked = true;

setInterval (function() {
    nextImage()
}, 3000)

function nextImage() {
    count++;
    if(count > 4) {
            count = 1;
        }

document.getElementById("radio"+count).checked = true;

}






// -----------------------------------------------FIM SLIDER ROTATIVO------------------------------------------------------
