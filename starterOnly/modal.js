function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Les elements du dom
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close");
const pageValidation = document.querySelectorAll(".validation");
const btnSubmit = document.querySelectorAll(".btn-submit");

// lançer le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}

//Fermer le modal
close.forEach((btn) => btn.addEventListener("click", CloseModal));
function CloseModal() {
  modalbg.style.display = "none";
}

/******************Valider le formulaire*************/

//les elements du formulaire
var first = document.forms["reserve"]["first"];
var last = document.forms["reserve"]["last"];
var email = document.forms["reserve"]["email"];
var quantity = document.forms["reserve"]["quantity"];
var location = document.forms["reserve"]["location"];
var checkbox = document.forms ["reserve"]["checkbox1"];

// valider les inputs nom, prenom , mail , nombre de tournoi
//regles regex 
const rules = {
  "nomPrenom": {
    regex: /^[a-z-]{2,}$/gi,
    msg: "Veuillez entrer 2 caractères ou plus!"
  }
  ,"mail":{
    regex:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    msg:"Veuillez entrer une adresse mail valide!"
  }
  ,"tournoi":{
     regex:/[0-99]{1,2}/,
     msg:"Vous devez saisir un chiffre!"
  }
}
//verifier que les inputs respectent les regles regex definis ci-dessus
function isValid($input, type) {
  const valid = rules[type].regex.test($input.value);
  console.log($input.value, valid, rules[type]);
  showMessageValidation($input, valid ? "" : rules[type].msg);
  return valid ? 0 : 1;
}
//afficher msg erreur pour les inputs non valide
function showMessageValidation(dom, msg) {
  const parent = dom.parentNode;
  parent.setAttribute("data-error-visible", msg === "" ? "false" : "true");
  parent.setAttribute("data-error", msg);
}

//verifier si au moins un bouton radio est selectionnée pour location
function atLeastOnebutton() {
  for(var i=0; i<location.length; i++) {
  if( location[i].checked ) {
      return true;
  }
}
return false;
alert('Vous devez choisir une option!');
}

// verifier si le checkbox " J'ai lu et accepté les conditions d'utilisation" est selectionné
function isSelected(){
  if(checkbox.checked) { return true}
  return false;
  alert('Vous devez vérifier que vous acceptez les termes et conditions!')
}

//valider le formulaire
function validate() {
  event.stopPropagation();
  event.preventDefault();
  erreurs += isValid(first, "nomPrenom");
  erreurs += isValid(last, "nomPrenom");
  erreurs += isValid(email, "mail");
  erreurs += isValid(quantity, "tournoi");
  let erreurs = 0;
  if ((erreurs == 0) && (atLeastOnebutton()) && (isSelected())) {
    document.querySelector(".modal-body").innerHTML = "jllkjkljkljkljklj";
  }
}


 


















// fonction affichage page validation formulaire 

function launchValidation() {
  // pageValidation.style.display = "block";
}



//fonction pour lancer l'evenement affichage page validation formulaire 
/*function launch() {
  if (validate()) {
    btnSubmit.forEach((btn) => btn.addEventListener("click", launchValidation));
  }

}*/


// fonction validation email 

/*function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    return true;

  } else {

    return false;

  }

}*/
//