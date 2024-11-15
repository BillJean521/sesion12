let contraseñaCorrecta="password123";
let contraseñaIngresada="";

do{
    contraseñaIngresada=prompt("- Ingrese la contraseña correcta: ");
    if(contraseñaIngresada!=contraseñaCorrecta){
    alert("Contraseña incorrecta, ingrese nuevamente la contraseña");
    }
}while(contraseñaIngresada!=contraseñaCorrecta);
alert("Contraseña Correcta");