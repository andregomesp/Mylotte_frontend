
function slideIndex1(){
var slideIndex = 1;
showSlides(slideIndex);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slideIndex = n;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";


let slideIndex2 = 0;
showSlidesAuto(n);
}

function showSlidesAuto(n) {
  let i;
  let slideIndex2 = n;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 === slides.length) {slideIndex2 = 0}
  console.log(slideIndex2);
  slides[slideIndex2].style.display = "block";
  setTimeout(() => showSlidesAuto(slideIndex2), 2500); // Change image every 2 seconds
}