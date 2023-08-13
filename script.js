// products page js


document.addEventListener("DOMContentLoaded", function() {
let slideIndex = 0;
seeSlides();

function seeSlides() {
  let i;
  let slides = document.getElementsByClassName("products-slides");
  let dots = document.getElementsByClassName("products-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("products-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(seeSlides, 3500);
}
});

// signup-login page js


var seePasswordSignup = false;
function showPasswordSignup() {
    if (seePasswordSignup) {
        document.getElementById("see-signup").setAttribute("type","password")
        seePassword = false;
    }
    else {
        document.getElementById("see-signup").setAttribute("type","text")
        seePasswordSignup = true;
    }
}

var seePasswordLogin = false;
function showPasswordLogin() {
    if (seePasswordLogin) {
        document.getElementById("see-login").setAttribute("type","password")
        seePasswordLogin = false;
    }
    else {
        document.getElementById("see-login").setAttribute("type","text")
        seePasswordLogin = true;
    }
}

// responive 


// var menuOpen = false;
// function menuOpenCLose() {
//     if ()
// }