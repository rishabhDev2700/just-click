function toggleMenu(){
    console.log("Button clicked@");
    $(".menu").toggleClass("menu-open")
}

function togglePopup(e){
    console.log("Popup toggled");
    e.stopPropagation();
    $(".popup").toggleClass("popup-hide")
}

// $("#get-started").click(togglePopup);
// $("#close-icon").click(togglePopup); 
$("nav a").click(toggleMenu);
// $('.popup').click(togglePopup);
$("#menu-button").click(toggleMenu);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}