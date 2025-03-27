const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    jugar();
});

function jugar() {

    let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    let interaccion = { 
        piedra: { tijera: "aplasta", lagarto: "aplasta" },
        papel: { piedra: "envuelve", spock: "desautoriza" },
        tijera: { papel: "corta", lagarto: "decapita" },
        lagarto: { papel: "devora", spock: "envenena" },
        spock: { piedra: "vaporiza", tijera: "rompe" }
    };
    let opcion = document.getElementById("opcion").value;
    let opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado = document.getElementById("resultado");
    let victoria = -1; // Si es 2 es victoria del jugador, si es 1 es victoria de la máquina y si es 0 es empate
    resultado.innerHTML = "";



    if ((opcion === "piedra" && (opcionMaquina === "tijera" || opcionMaquina === "lagarto")) 
        || (opcion === "papel" && (opcionMaquina === "piedra" || opcionMaquina === "spock")) 
        || (opcion === "tijera" && (opcionMaquina === "papel" || opcionMaquina === "lagarto")) 
        || (opcion === "lagarto" && (opcionMaquina === "papel" || opcionMaquina === "spock")) 
        || (opcion === "spock" && (opcionMaquina === "piedra" || opcionMaquina === "tijera"))) {
            
        victoria = 2;
    } else if (opcion === opcionMaquina) {
        victoria = 0;
    } else if (opcionMaquina === "piedra" && (opcion === "tijera" || opcion === "lagarto") 
        || (opcionMaquina === "papel" && (opcion === "piedra" || opcion === "spock")) 
        || (opcionMaquina === "tijera" && (opcion === "papel" || opcion === "lagarto")) 
        || (opcionMaquina === "lagarto" && (opcion === "papel" || opcion === "spock")) 
        || (opcionMaquina === "spock" && (opcion === "piedra" || opcion === "tijera"))) {

        victoria = 1;
    }

    switch (victoria) {
        case 0:
            resultado.innerHTML = "<div><img src='imagenes/" + opcionMaquina + ".png' alt='" + opcionMaquina + "'></img>   VS   <img src='imagenes/" + opcion + ".png' alt='" + opcion + "'></img></div><p class='empate'>Es un empate</p>";
            break;
        case 1:
            resultado.innerHTML = "<div><img src='imagenes/" + opcionMaquina + ".png' alt='" + opcionMaquina + "'></img>   VS   <img src='imagenes/" + opcion + ".png' alt='" + opcion + "'></img></div><p class='derrota'>"
             + Mayuscula(opcionMaquina) + " " + interaccion[opcionMaquina][opcion] + " " + Mayuscula(opcion) + ", ¡Gana la Máquina!</p>"; 
             // opcionMaquina va primero ya que la maquina te gana y por eso tiene que sacar su interracion
            break;
        case 2:
            resultado.innerHTML = "<div><img src='imagenes/" + opcionMaquina + ".png' alt='" + opcionMaquina + "'></img>   VS   <img src='imagenes/" + opcion + ".png' alt='" + opcion + "'></img></div><p class='victoria'>"
            + Mayuscula(opcion) + " " + interaccion[opcion][opcionMaquina] + " " + Mayuscula(opcionMaquina) + ", ¡Ganas tú!</p>";
             // Tu ganas y por eso se tiene que sacar tu interaccion primero.            
            break;
        default:
            resultado.innerHTML = "Error";
            break;
    } 
}   

function Mayuscula(texto) { // Es una funcion para que la primera letra del texto se pase a Mayuscula
    return texto = texto.charAt(0).toUpperCase() + texto.slice(1);
}