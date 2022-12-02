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