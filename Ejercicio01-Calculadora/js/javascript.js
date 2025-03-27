function sumar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoDiv.innerHTML = "Por favor, ingrese solo números válidos en todos los campos.";
        return;
    }

    let suma = numero1 + numero2;

    resultadoDiv.innerHTML = "<p id='resultado' class='estilosuma'>La suma es: " + suma + "</p>";
}

function restar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoDiv.innerHTML = "Por favor, ingrese solo números válidos en todos los campos.";
        return;
    }

    let resta = numero1 - numero2;

    resultadoDiv.innerHTML = "<p id='resultado' class='estiloresta'>La resta es: " + resta + "</p>";
}

function multiplicar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoDiv.innerHTML = "Por favor, ingrese solo números válidos en todos los campos.";
        return;
    }

    let mult = numero1 * numero2;

    resultadoDiv.innerHTML = "<p id='resultado' class='estiloproducto'>El producto es: " + mult + "</p>";
}

function dividir() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoDiv.innerHTML = "Por favor, ingrese solo números válidos en todos los campos.";
        return;
    }

    if (numero2 === 0) {
        resultadoDiv.innerHTML = "No se puede dividir por cero";
        return;
    }

    let div = numero1 / numero2;

    resultadoDiv.innerHTML = "<p id='resultado' class='estilodivision'>La división es: " + div + "</p>";
}