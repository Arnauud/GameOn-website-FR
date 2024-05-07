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


// ISSUE #1 to CLOSE THE MODAL 

modalClose.addEventListener("click", closeLaunchModal) // upon a click to parameter closeModal function
function closeLaunchModal (){ 
  modalbg.style.display = "none"; // using queryselector .bgroud to 
}

// ISSUE #2 IMPLEMENTER ENTREES DU FORMULAIRE + ISSUE #3 Ajouter validation ou messages d'erreur

// let validationChecks = {
//   firstNameCheck: false,
//   lastNameCheck : false,
//   emailValidation : false,
//   contestNumberValidation : false,
//   locationisChecked : false,
//   conditionUsageCheck : false,
//   dateOfBirthCheck : false,
// }

let firstNameCheck = false;
let lastNameCheck = false;
let emailValidationCheck = false;
let contestNumberValidationCheck = false;
let locationisChecked = false;
let conditionUsageCheck = false;
let dateOfBirthCheck = false;


// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
function firstNameValidation (){
  let firstName = document.getElementById("first").value;

  if(firstName.length > 2 && firstName !== '' ){
      console.log("Good first name")
      firstNameCheck = true
    } else {
      console.log("Veuillez entrer 2 caractères ou plus pour le champ du Prénom")
    }
}
console.log(firstNameCheck)
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.

function lastNameValidation (){
  let lastName = document.getElementById("last").value;
  if(lastName.length > 2 && lastName !== '' ){
    console.log("Good last name")
    lastNameCheck = true
  } else {
    console.log("Veuillez entrer 2 caractères ou plus pour le champ du Nom")
  }
}

// (3) L'adresse électronique est valide.

function emailValidation (){
  let email = document.getElementById("email").value;
  let emailRegExp = new RegExp ("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegExp.test(email)){
    console.log("Good email name")
    let emailValidationCheck = true
  } else {
    console.log("Rentrez un e-mail valide")
  }
}

// (4) Pour le nombre de concours, une valeur numérique est saisie.
function contestNumberValidation(){
  let contestNumberValidation = document.getElementById("quantity").value;
  if (contestNumberValidation === ''){
    console.log("Need to put a 0 at least")
    let contestNumberValidationCheck = true
  } else {
    console.log(`Amount of concerts attended to : ${contestNumberValidation}`)
  }
  

};

// (5) Un bouton radio est sélectionné.

function locationButton(){
  let locationButton = document.querySelectorAll('input[type="radio"]');
for (let i = 0; i < locationButton.length; i++)
  if(locationButton[i].checked){
    locationisChecked = true
  }

  if (locationisChecked === true){
    console.log("location has been checked")
    
  } else {
    console.log("you NEED TO have location checked")
  }


};
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
function conditionAccepted(){
  let conditionUsage = document.getElementById("checkbox1")
  let conditionPromo = document.getElementById("checkbox2")
  if (!conditionUsage.checked) {
    console.log("Have to Select Usage or else...!!!")
      conditionUsageCheck = true
  } else if (conditionUsage.checked && conditionPromo.checked){
    console.log("Double win | Usage & Promotion")
      conditionUsageCheck = true
  } else if (conditionUsage.checked && !conditionPromo.checked){
    console.log("Single Win | At least the took the Usage")
  }
};

// BONUS Date de Naissance
function dateOfBirth(){
  let birthdate = document.getElementById("birthdate").value;
if(birthdate !== ''){
  let dateOfBirthCheck = true
  console.log("Ok date of birth")
}else{
  console.log("Merci de bien vouloir saisir votre date de naissance")
}
}

function thankYou(){
if (firstNameCheck && 
  lastNameCheck && 
  emailValidationCheck && 
  contestNumberValidationCheck &&  
  locationisChecked &&
  conditionUsageCheck &&
  dateOfBirthCheck === true){
  alert("Merci! Votre réservation a été reçue.")
} else {
  alert("Stuff needs to get worked out")
}}



//Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
function formValidation (){
  let formValidationBtn = document.querySelector(".btn-submit, .button");  
  if (formValidationBtn) { // Check if the button exists
    formValidationBtn.addEventListener("click", (event) => {
      event.preventDefault();

      // THESE ARE ALL THE FUNCTIONS TO PICK UP
      firstNameValidation(); 
      lastNameValidation();
      emailValidation();
      dateOfBirth();
      contestNumberValidation();
      locationButton();
      conditionAccepted();
      thankYou();

    });
  } else {
    console.error("Submit button not found");
  }
};
  document.addEventListener("DOMContentLoaded", function() {
    formValidation();
  })


