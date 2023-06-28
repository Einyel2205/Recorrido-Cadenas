/*.Dada la cadena “Somos SENA”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”. */

let cadena="Somos SENA";
for (let index = 0; index < cadena.length; index++) {
    if (cadena[index].includes("E")){
        console.log("contiene la letra");
    }
}
let contador=0;
for (let index = 0; index < cadena.length; index++) {
    if (cadena[index]=="o") {
        contador++;
    }
}
console.log("Contiene la letra", contador, "veces.");