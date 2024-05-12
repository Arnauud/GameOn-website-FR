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

let errorMessage = {
  firstName : "Veuillez entrer 2 caractères ou plus pour le champ du Prénom",
  lastName : "Veuillez entrer 2 caractères ou plus pour le champ du Nom",
  email : "Rentrez un e-mail valide",
  contestNumber : "Merci de bien vouloir indiquer un chiffre",
  dateOfBirth : "Merci de bien vouloir saisir votre date de naissance",
};


// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
function firstNameValidation (){
  let firstNameInput = document.getElementById("first");
  let errorMessageElement = document.getElementById("first-error")
  let firstName= firstNameInput.value

  if(firstName.length > 2 && firstName !== '' ){

    console.log("Good first name")
    firstNameCheck = true
    errorMessageElement.style.display = "none";
    firstNameInput.classList.remove("error")

    } else {
      console.log(errorMessage.firstName)
      firstNameCheck = false
  
       // Set error message text
      errorMessageElement.style.display = "block";
      firstNameInput.classList.add("error")
      errorMessageElement.textContent = errorMessage.firstName;

    }
};



// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.

function lastNameValidation (){
  let lastNameInput = document.getElementById("last");
  let errorMessageElement = document.getElementById("last-error");
  let lastName = lastNameInput.value;

  if(lastName.length > 2 && lastName !== '' ){
    console.log("Good last name")
    lastNameCheck = true
    errorMessageElement.style.display = "none";
    lastNameInput.classList.remove("error")
  } else {
    console.log(errorMessage.lastName)
    lastNameCheck = false

    // Set error message text
    errorMessageElement.style.display = "block";
    lastNameInput.classList.add("error")
    errorMessageElement.textContent = errorMessage.lastName;
  }
};

// (3) L'adresse électronique est valide.

function emailValidation (){
  let emailInput = document.getElementById("email");
  let emailRegExp = new RegExp ("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  let errorMessageElement = document.getElementById("email-error");
  let email = emailInput.value

  if (emailRegExp.test(email)){
    console.log("Good email name")
    emailValidationCheck = true
    errorMessageElement.style.dispaly = "none"
    emailInput.classList.remove("error")

  } else {
    console.log(errorMessage.email);
    emailValidationCheck = false;
    errorMessageElement.style.display = "block";
   
    emailInput.classList.add("error");
    errorMessageElement.textContent = errorMessage.email;
  }
};

// BONUS Date de Naissance
function dateOfBirth(){
  let birthdateInput = document.getElementById("birthdate");
  let birthdate = birthdateInput.value;

  let dateOfBirthError = document.getElementById("dob-error");

if(birthdate !== ''){
  dateOfBirthCheck = true;
  console.log("Ok date of birth");
  birthdateInput.classList.remove("error");
  dateOfBirthError.style.display ="none";
}else{
  console.log(errorMessage.dateOfBirth);
  dateOfBirthCheck = false;
  birthdateInput.classList.add("error");
  dateOfBirthError.style.display ="block";
  dateOfBirthError.textContent = errorMessage.dateOfBirth;
}
};

// (4) Pour le nombre de concours, une valeur numérique est saisie.
function contestNumberValidation(){
  let contestNumberValidation = document.getElementById("quantity");
  let contestNumber = contestNumberValidation.value;
  let ErrorMessageValidation = document.getElementById("quantity-error");

  if (contestNumber === '' ){
    console.log(errorMessage.contestNumber);
    contestNumberValidation.classList.add("error");
    contestNumberValidationCheck = false;
    ErrorMessageValidation.style.display = "block";
    ErrorMessageValidation.textContent = errorMessage.contestNumber;

  } else {
    contestNumberValidation.classList.remove("error");
    ErrorMessageValidation.style.display = "none";
    console.log(`Accepted Number amount of concerts`);
    contestNumberValidationCheck = true;

  }
  

};

// (5) Un bouton radio est sélectionné.

function locationButton(){
  let locationError = document.querySelectorAll('label.checkbox-label .checkbox-icon');
  let locationButton = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < locationButton.length; i++){
    let locationCheck = locationButton[i];

      if (locationCheck.checked){
        IsChecked = true;
        break;
      }
    }
    if (!IsChecked) {
      // Apply red border to all locationError elements
      locationError.forEach(icon => {
        icon.style.border = "2px solid red";

      });
    } else {
      // Apply blue border to all locationError elements
      locationError.forEach(icon => {
        icon.style.border = "2px solid #279e7a";

      });
    }
  }

// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
function conditionAccepted(){
  let conditionUsageError = document.querySelector('label[for="checkbox1"] .checkbox-icon');
  let conditionUsage = document.getElementById("checkbox1");
  let conditionPromo = document.getElementById("checkbox2");

  if (!conditionUsage.checked) {
    conditionUsageError.style.border = "2px red solid"
    conditionUsageCheck = false;
  } else if (conditionUsage.checked && conditionPromo.checked){
    conditionUsageError.style.border = ""
    console.log("Double win | Usage & Promotion");
    conditionUsageCheck = true;
  } else if (conditionUsage.checked && !conditionPromo.checked){
    conditionUsageError.style.border = ""
    console.log("Single Win | At least the took the Usage");
    conditionUsageCheck = true;
  }
};



function thankYou(){
if (firstNameCheck === true){
  let formValidationBtn = document.querySelector(".btn-submit, .button");
  formValidationBtn.style.value = "Merci !"  
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
      // lastNameValidation();
      // emailValidation();
      // contestNumberValidation();
      // dateOfBirth();
      // locationButton();
      // conditionAccepted();
      thankYou();

    });
  } else {
    console.error("Submit button not found");
  }
};
  document.addEventListener("DOMContentLoaded", function() {
    formValidation();
  })


  // if (firstNameCheck && lastNameCheck && emailValidationCheck && contestNumberValidationCheck && IsChecked && conditionUsageCheck && dateOfBirthCheck === true){
  