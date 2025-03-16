const messages = [
    "Estas segura?",
    "Realmente segura??",
    "Estas siendo honesta?",
    "Por favor amor...",
    "Solo piensalo!",
    "Si dices que no, me pondre muy triste...",
    "Muy muy triste...",
    "Muy muy muy muchisimo muy triste...",
    "Esta bien, dejare de insistir...",
    "No te creas, ya di que si por favor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.si-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleSiClick() {
    window.location.href = "yes_page.html";
}