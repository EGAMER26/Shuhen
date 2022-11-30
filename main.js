function menuShow() {
    let pointMenu = document.querySelector("nav .menuList")

    if(pointMenu.classList.contains("show")) {
        pointMenu.classList.remove("show")
    } else { pointMenu.classList.add("show") 

    }
}
function menuButtonCloseShow() {
    let buttonCloseShow = document.querySelector("nav .closeMenu")

    if(buttonCloseShow.classList.contains("showw")) {
        buttonCloseShow.classList.remove("showw")
    } else { buttonCloseShow.classList.add("showw") 

    }
}

function menu() {
    menuShow();
    menuButtonCloseShow()
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
    let menu = document.querySelector("nav")
    let logo = document.querySelector(".navTop")
    

    if(scrollY > 100 ) {
        menu.classList.add("sideBarHidenn") 
        logo.classList.add("showw") 
    } else {
        menu.classList.remove("sideBarHidenn")
        logo.classList.remove("showw")
    }
}