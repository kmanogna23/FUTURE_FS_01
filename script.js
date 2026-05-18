// script.js

// Typing Animation

const text = [
  "Web Developer",
  "Frontend Designer",
  "CSE Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1000);
  }
  else{
    setTimeout(type, 120);
  }

})();


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});