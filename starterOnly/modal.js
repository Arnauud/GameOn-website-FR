function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close") // issue number 1 = calling up the span.

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// issue number 1 to close the modal 

modalClose.addEventListener("click", closeModal) // upon a click to parameter closeModal function
function closeModal (){ 
  modalbg.style.display = "none"; // using queryselector .bgroud to 
}

