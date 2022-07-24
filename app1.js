//JS DOM//

//**Iteración #1: Interacción con el DOM**//

/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
1.3 Usa querySelector para mostrar por consola todos los p
1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".
1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
*/

/*1.1*/
const showmeButton = document.querySelector(`.showme`);

/*1.2*/
const pillado = document.querySelector(`#pillado`);

/*1.3*/
const parrafo = document.querySelectorAll(`p`);

/*1.4*/

const pokemon = document.querySelectorAll(`.pokemon`);

/*1.5*/

const dataFunction = document.querySelectorAll(`[data-function="testMe"]`);

/*1.6*/

const testMe = document.querySelector(`[testme=Rick]`);