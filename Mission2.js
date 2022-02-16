let slideIndex = 0;
showSlides();

function showSlides() {
  
  let slides = document.getElementsByClassName("pictures");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 


let welcomeMessage = document.getElementById("welcomeMessage"); 
welcomeMessage.addEventListener('mouseover', () => welcomeMessage.style.background = "#FF6464");
welcomeMessage.addEventListener('mouseout', () => welcomeMessage.style.background = "#3E8E7E");

// aboutMe.addEventListener("mouseenter", changeBackground(e) {aboutMe.style.changeBackground = "lightblue"})