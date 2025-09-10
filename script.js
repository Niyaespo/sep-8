// Listas de imágenes
const listaCabezas = [
  "../SEP-8/assets/img/Dekucabezaa.png",
  "../SEP-8/assets/img/Todorokicabezaa.png",
  "../SEP-8/assets/img/Bakugocabezaa.png",
  "../SEP-8/assets/img/Tenyacabeza.png",
  "../SEP-8/assets/img/Urarakacabeza.png",
  "../SEP-8/assets/img/Kirishimcabeza.png",
  "../SEP-8/assets/img/asuicabeza.png",
];
const listaTorsos = [
 "../SEP-8/assets/img/Dekutorsoo.png",
  "../SEP-8/assets/img/Todorokitorsoo.png",
  "../SEP-8/assets/img/Bakugotorsoo.png",
  "../SEP-8/assets/img/Urarakatorso.png",
  "../SEP-8/assets/img/Tenyatorso.png",
  "../SEP-8/assets/img/Kirishimatorso.png",
  "../SEP-8/assets/img/asuitorso.png"
];
const listaPiernas = [
  "../SEP-8/assets/img/Dekupiernass.png",
  "../SEP-8/assets/img/Todorokipiernass.png",
  "../SEP-8/assets/img/Bakugopiernass.png",
  "../SEP-8/assets/img/Urarakapiernas.png",
  "../SEP-8/assets/img/Tenyapiernas.png",
  "../SEP-8/assets/img/Kishirimpiernas.png",
  "../SEP-8/assets/img/asuipiernas.png"
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const torso = document.getElementById("torso");
const piernas = document.getElementById("piernas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let torsoAleatorio = 0;
let piernasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarHeroe() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  torsoAleatorio = numeroAleatorio(0, listaTorsos.length);
  piernasAleatorio = numeroAleatorio(0, listaPiernas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  torso.src = `${listaTorsos[torsoAleatorio]}`;
  piernas.src = `${listaPiernas[piernasAleatorio]}`;

  console.log(cabezaAleatorio, torsoAleatorio, piernasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarHeroe();
});

generarHeroe();
