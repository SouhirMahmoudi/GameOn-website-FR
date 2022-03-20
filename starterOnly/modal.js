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
//const fermer = document.querySelector(".fermer");
const confirmation = document.querySelector(".confirmation");

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
const $date = document.forms ["reserve"]["birthdate"];
const lieuTournoi = document.forms["reserve"]["location"];
const location1 = document.forms["reserve"]["location1"];
/*const location2 = document.forms["reserve"]["location2"];
const location3 = document.forms["reserve"]["location3"];
const location4 = document.forms["reserve"]["location4"];
const location5 = document.forms["reserve"]["location5"];
const location6 = document.forms["reserve"]["location6"];*/
const checkbox = document.forms ["reserve"]["checkbox1"];

// verifier si input nom est valide 
isNom()===false;
function isNom(){
  const nomParent = first.parentNode;
  const nomRegex = /^[a-z-]{2,}$/gi;
    if ((nomRegex.test(first.value)) === false){
      nomParent.setAttribute ("data-error-visible", "true");
      nomParent.setAttribute("data-error","Veuillez entrer 2 caractères ou plus!")
    }
    else { 
      nomParent.setAttribute ("data-error-visible", "false");
      nomParent.setAttribute("data-error","")
      return true;
    }
}

// verifier si input prenom est valide
function isPrenom(){
  const prenomParent = last.parentNode;
  const prenomRegex = /^[a-z-]{2,}$/gi;
   if ((prenomRegex.test(last.value)) === false){
    prenomParent.setAttribute ("data-error-visible", "true");
    prenomParent.setAttribute("data-error","Veuillez entrer 2 caractères ou plus!")
   }
   else { 
    prenomParent.setAttribute ("data-error-visible", "false");
    prenomParent.setAttribute("data-error","")
    return true;
  }
}


// verifier si input mail est valide
function isMail(){
  const mailParent = email.parentNode;
  const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
   if ((mailRegex.test(email.value)) === false){
     mailParent.setAttribute ("data-error-visible", "true");
     mailParent.setAttribute("data-error","Veuillez entrer une adresse mail valide!")
   }
   else { 
    mailParent.setAttribute ("data-error-visible", "false");
    mailParent.setAttribute("data-error","")
    return true;
  }
}
  // verifier si input nombre de tournoi est valide
  function isQuantity(){
  const quantityParent = quantity.parentNode;
  const quantityRegex = /[0-99]{1,2}/;
   if ((quantityRegex.test(quantity.value)) === false){
    quantityParent.setAttribute ("data-error-visible", "true");
    quantityParent.setAttribute("data-error","Veuillez saisir un nombre de tournois")
   }
   else { 
    quantityParent.setAttribute ("data-error-visible", "false");
    quantityParent.setAttribute("data-error","")
    return true;
  }
}
   // verifier si input date de naissance est valide 

   function isDate(){
    const dateParent = $date.parentNode;
    const dateRegex = /[0-99]{1,2}/;
     if ((dateRegex.test($date.value)) === false){
      dateParent.setAttribute ("data-error-visible", "true");
      dateParent.setAttribute("data-error","Veuillez entrer votre date de naissance!")
    }
    else { 
      dateParent.setAttribute ("data-error-visible", "false");
      dateParent.setAttribute("data-error","")
      return true;
    }
   }


 
// verifier si au moins un bouton radio est selectionnée pour location1
function atLeastOnelocation(){
  const locationParent = location1.parentNode;
  for(var i=0; i<lieuTournoi.length; i++) {
    var locationChecked = false;
    if( lieuTournoi[i].checked === true) {
    locationChecked= true;
    locationParent.setAttribute ("data-error-visible", "false");
    locationParent.setAttribute("data-error", "")
    return true;
    break;
    }
    else{
      locationParent.setAttribute ("data-error-visible", "true");
      locationParent.setAttribute("data-error", "Veuillez choisir une ville!")
    }

    }
  }


  

//verifier si les conditions d'utilisation ont été acceptées

function checkboxVerify(){
  const checkboxParent = checkbox.parentNode;
  if (checkbox.checked === false){
    checkboxParent .setAttribute ("data-error-visible", "true");
    checkboxParent.setAttribute("data-error","Veuillez vérifier que vous acceptez les conditions d'utilisation")
  }
  else {
    checkboxParent .setAttribute ("data-error-visible", "false");
    checkboxParent.setAttribute("data-error","")
    return true;
  }
}


//valider formulaire et lancer page confirmation 
const fermer =document.createElement("button");
function validate(){
  event.stopPropagation();
  event.preventDefault();
if ((isNom()===true) && (isPrenom()===true) && (isMail()===true)  && (isDate ()===true)  && (isQuantity()===true)  && (checkboxVerify()===true)  && (atLeastOnelocation()===true))
 {
  document.querySelector(".modal-body").innerHTML = "<div class='confirmation'><p class='merci'>Merci pour <br> votre inscription </p></div>";
  document.querySelector(".modal-body").appendChild(fermer);
  fermer.setAttribute("type","button");
  fermer.setAttribute("value","fermer");
  fermer.setAttribute("name","fermer");
  fermer.classList.add("fermer");  
  fermer.innerHTML = " fermer";

}
else 
launchModal();
}

//Fermer la page confirmation
fermer.addEventListener("click", CloseConfirmation);
function CloseConfirmation() {
  event.stopPropagation();
  event.preventDefault();
  modalbg.style.display = "none";
}
 


/*et que le joueur a moins de 70ans et plus de 18 ans 

/*else{

  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

  function setCookie(name, value)
  {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();

    setCookie("first", form.first.value);
    setCookie("last", form.last.value);
    setCookie("email", form.email.value);
    setCookie("quantity", form.quantity.value);
    setCookie("$date", form.$date.value);
  }*/
 // if ((location1.checked === false) && (location2.checked === false) && (location3.checked === false) && (location4.checked === false) && (location5.checked === false) && (location6.checked === false)){






// verifier si au moins un bouton radio est selectionnée pour lieuTournoi
/*function atLeastOnebutton() {
  for(var i=0; i<lieuTournoi.length; i++) {
  if( lieuTournoi[i].checked ) {
      return true;
  }
  else{
   const parent=lieuTournoi.parentNode;
   parent.setAttribute("data-error-visible","true");
   parent.setAttribute("data-error", "Veuillez choisir une ville");
  }
}
//verifier si le checkbox "J'ai lu et accepté les conditions d'utilisation" est selectionné
function isSelected(){
  if(checkbox.checked) { 
    return true;
  }
  else {
   const parent=checkbox.parentNode;
   parent.setAttribute("data-error-visible","true");
   parent.setAttribute("data-error", "Vous devez vérifier que vous acceptez les conditions d'utilisation");
}

// Valider formulaire et lancer la page de confirmation si formulaire valide 

function validate(){
  event.stopPropagation();
  event.preventDefault();
  if (isPrenom )
}


//fonction valider le formulaire  et lancer page validation 
/*function validate() {
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
}*/





// const currentDate= Date.now();
/*let date=new Date();
date.setFullYear(date.getFullYear() - 90);

const tmp = date.toLocaleDateString('en-US', {});
date = new Intl.DateTimeFormat("ko-KR").format(date)
date = date.split(". ").join("-");
console.log(date)
date.min = minDate*/





/*const rules = {
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
}*/


//fonction pour verifier que les inputs respectent les regles regex definis ci-dessus
/*function isValid($input, type) {
  const valid = rules[type].regex.test($input.value);
  console.log(rules[type].regex.test($input.value), valid);
  showMessageValidation($input, valid ? "" : rules[type].msg);
  return valid ? 0 : 1;
}*/
//fonction pour afficher msg erreur pour les inputs non valide
/*function showMessageValidation(dom, msg) {
  const parent = dom.parentNode;
  parent.setAttribute("data-error-visible", msg === "" ? "false" : "true");
  parent.setAttribute("data-error", msg);
}*/
 


















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


 