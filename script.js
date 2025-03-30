console.log("¡Hola mundo!");

// Variables: Es un espacio dentro de la computadora que nos permite guardar datos.
/* Receta mágica para crear una variable: 
    Especificador de variable + nombre de la variable = valor
*/

/*
    Especificadores de variables: var, let, const
*/
// Especificador de variable: var, let, const (palabras reservadas)
// var: Se usaba antes de ES6 (2015). Se puede usar en cualquier parte del código y se puede reasignar el valor.
// let: Se emplea para declarar variables que pueden cambiar su valor. Se puede usar en cualquier parte del código, pero no se puede usar antes de declararla.
// const: Se usa para declarar variables que no cambian su valor. Se puede usar en cualquier parte del código, pero no se puede usar antes de declararla.

// String (cadenas): Nos permite representar texto
// Para crearlas podemos utilizar comillas simples (''), comillas dobles ("") o backticks (``).

let nombre = "Amatista"; // Declarar una variable llamada nombre y le asigno el valor Malinali.
console.log(nombre);// Imprimir el valor de la variable nombre.

nombre = "Alexander "; // Reasignando el valor.
console.log(nombre);

// Number (números): Nos permite representar números.
// A diferencia de las cadenas, este tipo de dato NO requiere de ningún tipo de comillas.
let edad = 26; // Entero
let estatura = 1.7; // Número con punto decimal
let gradosCentigrados = -10.2; // Negativos

console.log(edad);
console.log(estatura);
console.log(gradosCentigrados);

// Concatenación: Es una operación que nos permite crear una cadena a partir de diferentes valores.
let mensajeFinal = nombre + " tiene " + edad + " años.";
console.log(mensajeFinal);

// const = constante
const GRAVEDAD = 9.81;
const PI = 3.141592;

// GRAVEDAD = 10; <- No podemos reasignar el valor de una constante.

// Boolean (Booleano): Nos permite representar que algo es verdadero o falso, prendido o apagado, 1 o 0.
// true | false
let esMayorDeEdad = true;
let tieneTerceraEdad = false;

// Palabra reservada: Es una palabra especial en el lenguaje de programación que NO puede usarse como
//  nombre de variables, funciones, clases.

alert(mensajeFinal);
let nombreMascota = prompt("Escribe el nombre de tu mascota"); // SIEMPRE convierte el valor a una cadena.
alert("El nombre de la mascota es: " + nombreMascota);

// Comentarios JS <- Los comentarios es texto dentro del código fuente que no se ejecuta.
// Comentarios de una línea: Se representan con 2 diagonales -> //
// Comentarios multilínea: Se representan con /* */

/*
    Este
    es
    un
    comentario
    multilinea
*/

// Ejercicio 1:
// Leer los datos de una mascota e imprimir un mensaje que incluya todos los datos leídos.
// Utilizar al menos 1 vez cada tipo de dato (String, Number y Boolean).

//Datos de la mascota
let Mascota = "Luna"; // Tipo String
let edadMascota = 3; // Tipo Number
let esVacunada = true; // Tipo Boolean

//Imprimir un mensaje que incluya todos los datos
console.log("Tu mascota se llama " + Mascota + ", tiene " + edadMascota + " años y " + (esVacunada ? "está vacunada." : "no está vacunada."));


// Ejercicio 2:
/*
    Crear un cuestionario de 10 preguntas. Mostrar cada pregunta una por una y al final mostrar
    la respectiva pregunta con la respuesta ingresada por el usuario.
    Que al menos 2 preguntas sean de opción múltiple.
    Que al menos 2 preguntas sean respuesta de valores numéricos.
    Cada pregunta debe tener la respuesta en los comentarios del código.
    Agregar cada respuesta correcta a una variable.
*/

// Pregunta 1: ¿Cuál es la capital de Francia?
let respuesta1 = prompt("¿Cuál es la capital de Francia?"); // Respuesta correcta: París
// Pregunta 2: ¿Cuánto es 2 + 2?
let respuesta2 = prompt("¿Cuánto es 2 + 2?"); // Respuesta correcta: 4
// Pregunta 3: ¿Cuál es el océano más grande del mundo?
let respuesta3 = prompt("¿Cuál es el océano más grande del mundo?"); // Respuesta correcta: Océano Pacífico
// Pregunta 4: ¿Cuántos continentes hay en el mundo?
let respuesta4 = prompt("¿Cuántos continentes hay en el mundo?"); // Respuesta correcta: 7
// Pregunta 5: ¿Cuál es el país más grande del mundo?
let respuesta5 = prompt("¿Cuál es el país más grande del mundo?"); // Respuesta correcta: Rusia
// Pregunta 6: ¿Cuál es el río más largo del mundo?
let respuesta6 = prompt("¿Cuál es el río más largo del mundo?"); // Respuesta correcta: Amazonas
// Pregunta 7: ¿Cuál es el continente más poblado del mundo?
let respuesta7 = prompt("¿Cuál es el continente más poblado del mundo?"); // Respuesta correcta: Asia
// Pregunta 8: ¿Cuál es el país más pequeño del mundo?
let respuesta8 = prompt("¿Cuál es el país más pequeño del mundo?"); // Respuesta correcta: Ciudad del Vaticano
// Pregunta 9: ¿Cuál es el animal más grande del mundo?
let respuesta9 = prompt("¿Cuál es el animal más grande del mundo?"); // Respuesta correcta: Ballena azul
// Pregunta 10: ¿Cuál es el planeta más grande del sistema solar?
let respuesta10 = prompt("¿Cuál es el planeta más grande del sistema solar?"); // Respuesta correcta: Júpiter
// Mostrar las respuestas ingresadas por el usuario
console.log("Respuestas del cuestionario:");
console.log("1. " + respuesta1); // Respuesta correcta: París
console.log("2. " + respuesta2); // Respuesta correcta: 4
console.log("3. " + respuesta3); // Respuesta correcta: Océano Pacífico
console.log("4. " + respuesta4); // Respuesta correcta: 7
console.log("5. " + respuesta5); // Respuesta correcta: Rusia
console.log("6. " + respuesta6); // Respuesta correcta: Amazonas
console.log("7. " + respuesta7); // Respuesta correcta: Asia
console.log("8. " + respuesta8); // Respuesta correcta: Ciudad del Vaticano
console.log("9. " + respuesta9); // Respuesta correcta: Ballena azul
console.log("10. " + respuesta10); // Respuesta correcta: Júpiter

// Mostrar un mensaje final con todas las respuestas

console.log("Gracias por participar en el cuestionario. Aquí están tus respuestas:");
console.log("1. " + respuesta1); // Respuesta correcta: París
console.log("2. " + respuesta2); // Respuesta correcta: 4
console.log("3. " + respuesta3); // Respuesta correcta: Océano Pacífico
console.log("4. " + respuesta4); // Respuesta correcta: 7
console.log("5. " + respuesta5); // Respuesta correcta: Rusia
console.log("6. " + respuesta6); // Respuesta correcta: Amazonas
console.log("7. " + respuesta7); // Respuesta correcta: Asia
console.log("8. " + respuesta8); // Respuesta correcta: Ciudad del Vaticano
console.log("9. " + respuesta9); // Respuesta correcta: Ballena azul
console.log("10. " + respuesta10); // Respuesta correcta: Júpiter

// Fin del cuestionario
// Mostrar un mensaje final
console.log("Gracias por participar en el cuestionario. ¡Esperamos que te haya gustado!");
// Fin del código