const words = require('./analyzer-text');


console.log("espacios :", words.espacios());
console.log("lineas :", words.lineas());
console.log("palabras :", words.palabras());
console.log("letras :", words.letras());
console.log("numeros :", words.numeros());
console.log("parrafos :", words.parrafos());
console.log("caracteres especiales :", words.caracteresEspeciales());
console.log("total caracter dado (o) : ", words.totalCaracter('o'));