
     /*     javascript code for menuicon  */

let menu = document.getElementById("menu")
let showmenu = document.getElementById("showmenu")

menu.onclick = function(){
    if (showmenu.style.maxHeight == "0px"){
        showmenu.style.maxHeight = "180px"
        menu.src = "images/close.png"
    }else{
        showmenu.style.maxHeight = "0px"
        menu.src = "images/menu.png"
    }
}

    /*   js code for product image gallery */

let fullImg = document.getElementById("fullImg")
let smallImg = document.getElementsByClassName("smallImg")

smallImg[0].onclick = function(){
    fullImg.src = smallImg[0].src
}

smallImg[1].onclick = function(){
    fullImg.src = smallImg[1].src
}

smallImg[2].onclick = function(){
    fullImg.src = smallImg[2].src
}

smallImg[3].onclick = function(){
    fullImg.src = smallImg[3].src
}



