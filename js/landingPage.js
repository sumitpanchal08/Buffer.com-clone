let privScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollpos = window.pageYOffset;
        if (currentScrollpos > privScrollpos) {
            document.getElementById("navbarScrollFunction").style.top = "0px";
        } else {
            document.getElementById("navbarScrollFunction").style.top = "-150px";
        }
        privScrollpos = currentScrollpos;
    }
    let dropDownMenuOpen=document.getElementById("dropDownMenuOpen");
    dropDownMenuOpen.addEventListener("click",function(){
        let menu=document.getElementById("menu");
        menu.style.display="block";
    })
    let dropDownMenuClose=document.getElementById("dropDownMenuClose");
    dropDownMenuClose.addEventListener("click",function(){
        let menu=document.getElementById("menu");
        menu.style.display="none";
    })
