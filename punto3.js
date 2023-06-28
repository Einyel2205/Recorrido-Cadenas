/*.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d. */
let cadena="Javascript es genial";
let contador =0;
if (cadena[0]!==" ") {
    contador++
}
for(i=0; i<cadena.length; i++){
    if (cadena[i]===" "){
        contador++;
    }
}
console.log(contador);