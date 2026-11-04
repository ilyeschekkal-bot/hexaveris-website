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

let url = "https://wa.me/213564698868?text=" + encodeURIComponent(message);

window.open(url, "_blank");
});

});

});

// Boutons pricing
function selectPlan(plan, price){

let message = `Bonjour HEXAVERIS 🚀

Je suis intéressé par le pack ${plan} (${price}).

Pouvez-vous me guider pour commencer ?`;

let url = "https://wa.me/213564698868?text=" + encodeURIComponent(message);
window.open(url, "_blank");
}


/* HEXAVERIS — Mobile Navigation */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#main-nav");

    if (!menuToggle || !nav) return;

    function closeMenu() {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
        );
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });
});

