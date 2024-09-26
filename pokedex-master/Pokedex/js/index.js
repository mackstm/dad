// Importamos la clase Pokemon desde el archivo Pokemon.js
import Pokemon from './Pokemon.js';

// Creamos un array para los 151 pokemons que obtendremos desde la API
var pokemons = [];

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");
// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", () => {
    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
    document.querySelector('#pokedex').style.visibility = 'visible';
    // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
    startPokedex();
});

// Función asíncrona que va a realizar operaciones con promesas para realizar la llamada a la API
const startPokedex = async () => {
    // Bucle for que itera desde 1 hasta 151, que son los primeros 151 Pokemon
    for(var i = 1; i <= 1025; i++) {
        // Utilizamos fetch para hacer una solicitud a la API donde i representa el número de Pokemon
        await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
            .then(function(result) {
                return result.json();
            // Convertimos la respuesta de la API en un objeto JSON
            }).then(function(result) {
                const data = result;
                const pokemon = new Pokemon (data);
                pushPokemon(pokemon);
                //Guardamos el resultado en data y creamos una nueva instancia de Pokemon con los datos obtenidos
                // almacenamos los resultados en el array
               // console.log(pokemon);
            });
    }
    // Una vez que todos los Pokemon se han añadido al array, llamamos a la función showPokedex
    await showPokedex();
};

// Esta función añade el Pokemon que se le pasa como parámetro al array
function pushPokemon(pokemon) {
    pokemons.push(pokemon);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showPokedex = async () => {
    // Se obtiene una referencia al elemento con el ID pokedex en el DOM donde se insertarán las tarjetas de los Pokemon.
    const pokedex = document.getElementById("pokedex");
    // Iteramos sobre cada elemento del array pokemons
    for(var i = 0; i < pokemons.length; i++) {
        var aux =  0;
        while (aux != pokemons[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = pokemons[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = pokemons[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++;
        }
        let hp = pokemons[i].stats[0].base_stat;
        let atk = pokemons[i].stats[1].base_stat;
        let def = pokemons[i].stats[2].base_stat;
        let spatk = pokemons[i].stats[3].base_stat;
        let spdef = pokemons[i].stats[4].base_stat;
        let spe = pokemons[i].stats[5].base_stat;

        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        pokedex.innerHTML +=    `<div class="card">
                                    <img class="back" src="${pokemons[i].pkm_back}">
                                    <img class="front" src="${pokemons[i].pkm_front}"><br>
                                    ${pokemons[i].id}. ${pokemons[i].name}<br>
                                    <div class="types">
                                        ${tipo1} ${tipo2}
                                    </div>
                                    <div class="stats">
                                        <div class="hp">HP ${hp}</div>
                                        <div class="atk">Atk ${atk}</div>
                                        <div class="def">Def ${def}</div>
                                        <div class="spatk">SpAtk ${spatk}</div>
                                        <div class="spdef">SpDef ${spdef}</div>
                                        <div class="spe">Spe ${spe}</div>
                                    </div>
                                </div>`
    }
}
