// 1. CHANGER LE TEXTE DU TITRE
document.getElementById("btnChangeText").addEventListener("click", () => {
    const title = document.getElementById("title");
    if (title) {
        title.textContent = "RiseUp Educ : un accompagnement sur mesure pour ton enfant 🚀";
    }
});

// 2. MESSAGE DYNAMIQUE
document.getElementById("btnMessage").addEventListener("click", () => {
    const message = document.getElementById("message");
    if (message) {
        message.textContent = "Chaque élève est unique : nous construisons un plan adapté à ses besoins. 👌";
    }
});

// 3. FORMULAIRE DE CONTACT (validation simple côté frontend)
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (contactForm && feedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const parentName = document.getElementById("parentName");
        const email = document.getElementById("email");
        const studentLevel = document.getElementById("studentLevel");
        const messageParent = document.getElementById("messageParent");

        if (!parentName.value || !email.value || !studentLevel.value || !messageParent.value) {
            feedback.textContent = "Merci de remplir tous les champs avant d’envoyer votre demande.";
            feedback.classList.remove("success");
            feedback.classList.add("error");
            return;
        }

        feedback.textContent = "Merci ! Votre demande a bien été enregistrée. Nous vous répondrons très rapidement.";
        feedback.classList.remove("error");
        feedback.classList.add("success");
        contactForm.reset();
    });
}

// 4. ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
