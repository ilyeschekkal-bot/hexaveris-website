document.addEventListener("DOMContentLoaded", function () {

const forms = document.querySelectorAll(".form-pack");

forms.forEach(form => {

form.addEventListener("submit", function (e) {
e.preventDefault();

let pack = form.dataset.pack;
let name = form.querySelector("input").value;
let type = form.querySelector("select").value;
let details = form.querySelector("textarea").value;

// Validation simple
if(!name || !type){
alert("Please fill all fields");
return;
}

// Message optimisé (business + conversion)
let message = `Bonjour HEXAVERIS 🚀

Je souhaite développer mon business.

📌 Service: ${pack}
📌 Type: ${type}
📌 Détails: ${details}

Pouvez-vous me conseiller ?`;

let url = "https://wa.me/213659025785?text=" + encodeURIComponent(message);

window.open(url, "_blank");
});

});

});

// Boutons pricing
function selectPlan(plan, price){

let message = `Bonjour HEXAVERIS 🚀

Je suis intéressé par le pack ${plan} (${price}).

Pouvez-vous me guider pour commencer ?`;

let url = "https://wa.me/213659025785?text=" + encodeURIComponent(message);
window.open(url, "_blank");
}
