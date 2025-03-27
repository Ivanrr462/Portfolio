# Práctica de Chistes Chuck Norris
#### Por Iván Ríos Raya
---

- [Introducción](#Introducción)
- [Página Index](#PáginaIndex)
- [JavaScript](###JavaScript)

---

## Introducción
Esta práctica sirve como **Exámen de Lenguaje de Marcas** para la parte de JSON. Se usa la api de [Chistes de Chuck Norris](https://api.chucknorris.io/)[^1]  para poder extraer los chistes.

La estructura de la página va así:
- Carpeta js
  - javascript.js
- index.html
- estilos.css


---

### Página Index
Es la página principal, esta tiene una foto que es un [Sello de Chuck Norris.](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chuck_Norris_Seal_of_Approval.png/600px-Chuck_Norris_Seal_of_Approval.png) 👍
Tambien tiene un cuadro donde salen los chistes que se generan, un ejemplo seria:
> Google won't search for Chuck Norris because it knows you don't find Chuck Norris, he finds you.

Para elegir que chistes se genera, hay opciones para elegir la categoría de chistes. Estos serían:
1. Animal
2. Career
3. Celebrity
4. Dev
5. Explicit
6. Fashion
7. Food
8. History
9. Money
10. Movie
11. Music
12. Political
13. Religion
14. Science
15. Sport
16. Travel

Y por último un botón para mostrar el chiste.

---

### JavaScript
En el javascript hay dos funciones:
| Función             | Descripción                          |
|--------------------|--------------------------------------|
| `rellenarCategorias()` | Carga las categorías de chistes    |
| `obtenerChiste()`      | Obtiene un chiste de una categoría |

Primero se recoge el id del boton del index y se le pasa un ***addEventListener*** 
```javascript
// JavaScript
boton.addEventListener("click", function () {
    obtenerChiste();
});
```


#### Funcion rellenarCategorias()
Esta funcion agarra la api de las [Categorias](https://api.chucknorris.io/jokes/categories)[^2] de Chuck Norris y se las pasa a la etiqueta select del index. Si hay algun error al cargar las categorías muestra un error.

```HTML
<!-- El select en el cual despues se cargan las categorias -->
<select name="categoria" id="categorias" class="categorias">
    <option value="comun">Selecciona una categoria</option>
</select>
```


#### Funcion obtenerChiste()
Esta funcion coge de las categorias que hemos rellenado antes y el boton de mostrar los chistes. Despues rellena el cuadro donde se van a rellenar los chistes con el chiste de la categoria correspondiente. Cuando se esta añadiendo el chiste el boton se deshabilita con este código:

```javascript
boton.disabled = true;
boton.textContent = 'Cargando...';
```



[^1]: Una API que genera chistes de Chuck Norris.
[^2]: Api que carga las categorias de la API de Chuck Norris
