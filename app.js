function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 30){
        navbar.classList.remove('scrolled');
    }else{
        navbar.classList.add('scrolled');
    }
}

window.addEventListener('scroll',changeBg);

var dark = document.getElementById("dark");
dark.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        dark.src = "icons/sun.png";
    }else{
        dark.src ="icons/moon.png";
    }
}


