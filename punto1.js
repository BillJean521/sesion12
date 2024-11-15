/*Parte 1: Bucle `for`
- Escribe un código que recorra un arreglo de números y calcule la suma total.
- Pregunta: ¿Cómo se modifica el código para calcular el promedio de los números?
*/
let numeros=[5,6,3,1]; //Crear arreglos
let suma=0;
let promedio=0;
let i=0;

for(let i=0;i<numeros.length;i++){
    suma += numeros[i];
}

promedio=suma/numeros.length;
document.getElementById("resultado").value = suma;
document.getElementById("promedio").value = promedio;
