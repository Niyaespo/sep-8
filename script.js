// Listas de imágenes
const listaCabezas = [
  "../assets/img/Dekucabeza.png",
  "../assets/img/Todorokicabeza.png",
  "../assets/img/Bakugocabeza.png",
];
const listaTorsos = [
 "../assets/img/Dekutorso.png",
  "../assets/img/Todorokitorso.png",
  "../assets/img/Bakugotorso.png",
];
const listaPiernas = [
  "../assets/img/Dekupiernas.png",
  "../assets/img/Todorokipiernas.png",
  "../assets/img/Bakugopiernas.png",
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
