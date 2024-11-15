/*Parte 2: Bucle `while`
- Crea un bucle `while` que solicite al usuario ingresar un número hasta que
ingrese un número negativo.
- Pregunta: ¿Qué sucede si se inicializa el contador con un valor negativo?
*/
let num=parseInt(prompt("Ingrese un numero: "));

while(num>0){
    num=parseInt(prompt("Ingrese otro numero: "));
}
document.write("El bucle ha finalizado","<br>");

