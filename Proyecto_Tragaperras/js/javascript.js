var images = [
    "imagenes/7.jpg",
    "imagenes/diamante.jpg",
    "imagenes/campana.jpg",
    "imagenes/trebol.jpg",
    "imagenes/limon.jpg"
];

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const message = document.getElementById("message");

let timerId;

function randomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function updateSlots() {
    slot1.src = randomImage();
    slot2.src = randomImage();
    slot3.src = randomImage();
}

startButton.addEventListener("click", function () {
    startButton.disabled = true;
    stopButton.disabled = false;
    message.innerHTML = "";
    timerId = setInterval(updateSlots, 100);
});

stopButton.addEventListener("click", function () {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerId);
    if (slot1.src === slot2.src && slot2.src === slot3.src) {
        message.innerHTML = "PREMIO!!!! DALE AL BOTON DE PREMIO";
    }
});