let name = '';

console.log("Welcome to my website and the dev tools!");

console.log("Please enter 'userName()'");


function userName() {
  name = prompt("Please enter your name");
  console.log("Hi " + name); 
  console.log("Please enter 'banner()'");
  return name;
} 

function banner() {
  document.querySelector("h1").innerText = name;
  console.log("Please enter wordGame();")
}

function wordGame() {
  let words = document.querySelector(".header_intro");
  noun = prompt("Please enter a noun");
  verb = prompt("Please enter a verb");
  adj = prompt("Please enter an adjective");
  words.innerText ="Hi, I'm " + name + ", I'm a Front End Developer and I " + verb + " to make " + adj + " " + noun;
}

//Slideshow functions

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

