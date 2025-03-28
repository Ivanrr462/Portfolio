const opciones = "https://api.chucknorris.io/jokes/categories";
const chistes = "https://api.chucknorris.io/jokes/random?category=";

const pResultados = document.getElementById("chistes");
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    obtenerChiste();
});

function rellenarCategorias() {
    const select = document.getElementById("categorias");
    fetch(opciones)
        .then(response => response.json())
        .then(data => {
            data.forEach(categoria => {
                const opcion = document.createElement('option');
                opcion.value = categoria;
                opcion.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
                select.appendChild(opcion);
            });
        })
        .catch(error => {
            alert('Error al cargar las categorías: ' + error);
        });
}

function obtenerChiste() {
    const boton = document.getElementById("boton");
    const pResultados = document.getElementById("chistes");
    const categoria = document.getElementById("categorias").value;


    boton.disabled = true;
    boton.textContent = 'Cargando...';


    fetch(chistes + categoria)
        .then(response => response.json())
        .then(data => {
            if (categoria === 'comun') {
                pResultados.textContent = 'Por favor selecciona una categoría';
            } else {
                pResultados.textContent = data.value;
            }
        })
        .catch(error => {
            pResultados.textContent = 'Error al obtener el chiste';
        })
        .finally(() => {
            boton.disabled = false;
            boton.textContent = 'Mostrar chiste';
        });

}

rellenarCategorias();