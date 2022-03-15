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
const first = document.forms["reserve"]["first"];
const last = document.forms["reserve"]["last"];
const email = document.forms["reserve"]["email"];
const quantity = document.forms["reserve"]["quantity"];
const lieuTournoi = document.forms["reserve"]["location"];
const checkbox = document.forms ["reserve"]["checkbox1"];
const $date = document.forms ["reserve"]["birthdate"];

// valider les inputs nom, prenom , mail , nombre de tournoi, date de naissance
//regex 

const rules = {
  "nomPrenom": {
    regex: /^[a-z-]{2,}$/gi,
    msg: "Veuillez entrer 2 caractères ou plus!"
  }
  ,"mail":{
    regex:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
    msg:"Veuillez entrer une adresse mail valide!"
  }
  ,"tournoi":{
     regex:/[0-99]{1,2}/,
     msg:"Vous devez saisir un chiffre!"
  }
  , "naissance":{
    regex:/^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/,
    msg:"veuillez entrer votre date de naissance"
  }
}


//fonction pour verifier que les inputs respectent les regles regex definis ci-dessus
function isValid($input, type) {
  const valid = rules[type].regex.test($input.value);
  console.log(rules[type].regex.test($input.value), valid);
  showMessageValidation($input, valid ? "" : rules[type].msg);
  return valid ? 0 : 1;
}
//fonction pour afficher msg erreur pour les inputs non valide
function showMessageValidation(dom, msg) {
  const parent = dom.parentNode;
  parent.setAttribute("data-error-visible", msg === "" ? "false" : "true");
  parent.setAttribute("data-error", msg);
}

//fonction pour verifier si au moins un bouton radio est selectionnée pour lieuTournoi
function atLeastOnebutton() {
  for(var i=0; i<lieuTournoi.length; i++) {
  if( lieuTournoi[i].checked ) {
      return true;
  }
  else{
   const parent=lieuTournoi.parentNode;
   const msg1="Vous devez choisir une option!";
   parent.setAttribute("data-error-visible", msg1=== "true");
   parent.setAttribute("data-error", msg1);

  }
}
//showMessageValidation(lieuTournoi,'Vous devez choisir une option!')//;
}

//fonction verifier si le checkbox "J'ai lu et accepté les conditions d'utilisation" est selectionné
function isSelected(){
  if(checkbox.checked) { return true}
  return false;
  alert('Vous devez vérifier que vous acceptez les termes et conditions!')
}

//fonction valider le formulaire  et lancer page validation 
function validate() {
  event.stopPropagation();
  event.preventDefault();
  var erreurs = 0;
  console.log(last);
  erreurs += isValid(last, "nomPrenom");
  erreurs += isValid(email, "mail");
  erreurs += isValid(first, "nomPrenom");
  erreurs += isValid(quantity, "tournoi");
 
  if ((erreurs == 0) && (atLeastOnebutton()) && (isSelected())) {
    document.querySelector(".modal-body").innerHTML = "<p class='text-centered'>Merci pour votre inscription</p>";
    btnSubmit.setAttribute("type","button");
    btnSubmit.setAttribute("value","fermer");

  }
}





// const currentDate= Date.now();
/*let date=new Date();
date.setFullYear(date.getFullYear() - 90);

const tmp = date.toLocaleDateString('en-US', {});
date = new Intl.DateTimeFormat("ko-KR").format(date)
date = date.split(". ").join("-");
console.log(date)
date.min = minDate*/




 


















// fonction affichage page validation formulaire 

//function launchValidation() {
  // pageValidation.style.display = "block";
//}



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


 