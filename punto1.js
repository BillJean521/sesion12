let numeros=[5,6,3,1]; //Crear arreglos
let suma=0;
let promedio=0;
let i=0;

for(i=0;i<numeros.length;i++){
    suma += numeros[i];
}

document.getElementById("resultado").value = suma;