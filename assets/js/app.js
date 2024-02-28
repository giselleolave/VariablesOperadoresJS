/*Ejercicio 2 */
/*DECLARACIÓN DE VARIABLES INGRESADAS POS USUARIOS*/
let num1 = prompt("Ingrese un número mayor a cero");
let num2 = prompt("Ingrese otro número mayor a cero");
/*DECLARACIÓN DE VARIABLES DE OPERACIONES*/
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multi = document.getElementById('multi');
let division = document.getElementById('division');
let modulo = document.getElementById('modulo');
/*OPERACIONES*/
suma.textContent=(parseInt(num1)+parseInt(num2));
resta.textContent=(parseInt(num1)-parseInt(num2));
multi.textContent=(parseInt(num1)*parseInt(num2));
division.textContent=(parseInt(num1)/parseInt(num2));
modulo.textContent=(parseInt(num1)%parseInt(num2));

/*Ejercicio 3 */
/*DECLARACIÓN DE VARIABLES INGRESADAS POS USUARIOS*/
let tempC = prompt("Ingrese temperatura en grados celsius");
/*DECLARACIÓN DE VARIABLES DE OPERACIONES*/
let tempF = document.getElementById('tempF');
let tempK = document.getElementById('tempK');
/*OPERACIONES*/
tempK.textContent=(tempC +273.15);
tempF.textContent=(tempC * 9/5) + 32;


/*Ejercicio 4 */
/*DECLARACIÓN DE VARIABLES INGRESADAS POS USUARIOS*/
let dias = prompt("Ingrese una cantidad de días");
/*DECLARACIÓN DE VARIABLES Y OPERACIONES*/
let anios = Math.floor(dias / 365);
let semanas = Math.floor((dias % 365) / 7);
let diasRestantes = dias - (anios * 365) - (semanas * 7);
cantDias.textContent= anios + " años, " + semanas + " semanas y " + diasRestantes + " días";

/*Ejercicio 5 */
/*DECLARACIÓN DE VARIABLES INGRESADAS POS USUARIOS*/
let numero1 = prompt("Ingrese un número 1");
let numero2 = prompt("Ingrese un número 2");
let numero3 = prompt("Ingrese un número 3");
let numero4 = prompt("Ingrese un número 4");
let numero5 = prompt("Ingrese un número 5");
/*DECLARACIÓN DE VARIABLES DE OPERACIONES*/
let promedio = document.getElementById('promedio');
let sumaN = document.getElementById('sumaN');
/*OPERACIONES*/
sumaN.textContent = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4) + parseFloat(numero5);
promedio.textContent = parseFloat(sumaN.textContent) / 5;
