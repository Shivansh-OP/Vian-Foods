// products page js


document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("products-slides");
  const arrows = document.getElementsByClassName("products-arrow");
  const dots = document.getElementsByClassName("products-dot");

  showSlides(slideIndex);

  function showSlides(index) {
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("products-dot-active");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("products-dot-active");
  }

  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", () => {
      clearTimeout(autoSlideTimeout);
      if (i === 0) {
        slideIndex--;
      } else {
        slideIndex++;
      }
      showSlides(slideIndex);
      startAutoSlide();
    });
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      clearTimeout(autoSlideTimeout);
      showSlides(i);
      startAutoSlide();
    });
  }

  let autoSlideTimeout;
  function startAutoSlide() {
    autoSlideTimeout = setTimeout(() => {
      slideIndex++;
      showSlides(slideIndex);
      startAutoSlide();
    }, 3500);
  }

  startAutoSlide();
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