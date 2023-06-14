

// Punto 1: Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let arrayNumeros = [];


for (var i = 0; i < 10; i++) {
  let numeroRandom = Math.floor(Math.random() * 100); 
  arrayNumeros.push(numeroRandom); 
}

console.log(arrayNumeros);

// Punto 2: El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, 
// (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let palabras = prompt("Ingrese valores separados por coma:");
let arrayPalabras = palabras.split(",");
console.log(arrayPalabras);

//Punto 3:De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 

let numeros = [10, 40, 30, 20, 15, 5];

numeros.sort(function(a, b) {
  return a - b;
});

let numeroMenor = Math.min(...numeros);

let numeroMayor = Math.max(...numeros);
// Arreglo ordenado
console.log("Arreglo ordenado:" + numeros);
// Número menor
console.log("Número menor: " + numeroMenor);

// Mostrar el número mayor (último elemento del arreglo ordenado)
console.log("Número mayor: "+ numeroMayor);