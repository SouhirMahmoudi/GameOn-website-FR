
// eslint-disable-next-line no-unused-vars
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
const closeBtn = document.querySelectorAll(".close");

// lançer le modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
    modalbg.style.display = "block";
}

//Fermer le modal
closeBtn.forEach((btn) => btn.addEventListener("click", CloseModal));
function CloseModal() {
    modalbg.style.display = "none";
}

/******************Valider le formulaire*************/

//les elements du formulaire
const first = document.forms["reserve"]["first"];
const last = document.forms["reserve"]["last"];
const email = document.forms["reserve"]["email"];
const quantity = document.forms["reserve"]["quantity"];
const $date = document.forms["reserve"]["birthdate"];
const lieuTournoi = document.forms["reserve"]["location"];
const location1 = document.forms["reserve"]["location1"];
const checkbox = document.forms["reserve"]["checkbox1"];

// verifier si input nom est valide 
function isNom() {
    const nomParent = first.parentNode;
    const nomRegex = /^[a-z-]{2,}/gi;
    if ((nomRegex.test(first.value)) === false) {
        nomParent.setAttribute("data-error-visible", "true");
        nomParent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus!");
    }
    else {
        nomParent.setAttribute("data-error-visible", "false");
        nomParent.setAttribute("data-error", "");
        return true;
    }
}

// verifier si input prenom est valide
function isPrenom() {
    const prenomParent = last.parentNode;
    const prenomRegex = /^[a-z-]{2,}/gi;
    if ((prenomRegex.test(last.value)) === false) {
        prenomParent.setAttribute("data-error-visible", "true");
        prenomParent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus!");
    }
    else {
        prenomParent.setAttribute("data-error-visible", "false");
        prenomParent.setAttribute("data-error", "");
        return true;
    }
}

// verifier si input mail est valide
function isMail() {
    const mailParent = email.parentNode;
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    if ((mailRegex.test(email.value)) === false) {
        mailParent.setAttribute("data-error-visible", "true");
        mailParent.setAttribute("data-error", "Veuillez entrer une adresse mail valide!");
    }
    else {
        mailParent.setAttribute("data-error-visible", "false");
        mailParent.setAttribute("data-error", "");
        return true;
    }
}

// verifier si input nombre de tournoi est valide
function isQuantity() {
    event.preventDefault();
    const quantityParent = quantity.parentNode;
    const quantityRegex = /^[0-99]{1,2}$/;
    if ((quantityRegex.test(quantity.value)) === false) {
        quantityParent.setAttribute("data-error-visible", "true");
        quantityParent.setAttribute("data-error", "Veuillez saisir un nombre de tournois");
    }
    else {
        quantityParent.setAttribute("data-error-visible", "false");
        quantityParent.setAttribute("data-error", "");
        return true;
    }
}

// verifier si input date de naissance est valide 
function isDate() {
    const dateParent = $date.parentNode;
    const dateRegex = /[0-99]{1,2}/;
    if ((dateRegex.test($date.value)) === false) {
        dateParent.setAttribute("data-error-visible", "true");
        dateParent.setAttribute("data-error", "Veuillez entrer votre date de naissance!");
    }
    else {
        dateParent.setAttribute("data-error-visible", "false");
        dateParent.setAttribute("data-error", "");
        return true;
    }
}

// verifier si au moins un bouton radio est selectionnée pour location1
function atLeastOnelocation() {
    const locationParent = location1.parentNode;
    for (var i = 0; i < lieuTournoi.length; i++) {
        // var locationChecked = false;
        if (lieuTournoi[i].checked === true) {
            // locationChecked= true;
            locationParent.setAttribute("data-error-visible", "false");
            locationParent.setAttribute("data-error", "");
            return true;
        }
        else {
            locationParent.setAttribute("data-error-visible", "true");
            locationParent.setAttribute("data-error", "Veuillez choisir une ville!");
        }

    }
}

//verifier si les conditions d'utilisation ont été acceptées
function checkboxVerify() {
    const checkboxParent = checkbox.parentNode;
    if (checkbox.checked === false) {
        checkboxParent.setAttribute("data-error-visible", "true");
        checkboxParent.setAttribute("data-error", "Veuillez vérifier que vous acceptez les conditions d'utilisation");
    }
    else {
        checkboxParent.setAttribute("data-error-visible", "false");
        checkboxParent.setAttribute("data-error", "");
        return true;
    }
}

//valider formulaire et lancer page confirmation 
const fermer = document.createElement("button");

// eslint-disable-next-line no-unused-vars
function validate() {
    event.stopPropagation();
    event.preventDefault();
    if ((isNom() === true) && (isPrenom() === true) && (isMail() === true) && (isDate() === true) && (isQuantity() === true) && (checkboxVerify() === true) && (atLeastOnelocation() === true)) {
        document.querySelector(".modal-body").innerHTML = "<div class='confirmation'><p class='merci'>Merci pour <br> votre inscription </p></div>";
        document.querySelector(".modal-body").appendChild(fermer);
        fermer.setAttribute("type", "button");
        fermer.setAttribute("value", "fermer");
        fermer.setAttribute("name", "fermer");
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
    window.location.reload();
}


