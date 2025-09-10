const analizador = require('./analyzer-text');

// Texto
const textoEjemplo = `Hola Luis,
Este es un párrafo de prueba con números como 123 y símbolos como @, #, $.`;

// Archivo .txt
const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'input.txt');
const archivoEjemplo = fs.readFileSync(filepath, 'utf-8');


// Ejemplo texto
console.log("espacios :", analizador.espacios(textoEjemplo));
console.log("lineas :", analizador.lineas(textoEjemplo));
console.log("palabras :", analizador.palabras(textoEjemplo));
console.log("letras :", analizador.letras(textoEjemplo));
console.log("numeros :", analizador.numeros(textoEjemplo));
console.log("parrafos :", analizador.parrafos(textoEjemplo));
console.log("caracteres especiales :", analizador.caracteresEspeciales(textoEjemplo));
console.log("total caracter dado (o) : ", analizador.totalCaracter(textoEjemplo, 'o'));


// Ejemplo archivo
console.log("\nespacios :", analizador.espacios(archivoEjemplo));
console.log("lineas :", analizador.lineas(archivoEjemplo));
console.log("palabras :", analizador.palabras(archivoEjemplo));
console.log("letras :", analizador.letras(archivoEjemplo));
console.log("numeros :", analizador.numeros(archivoEjemplo));
console.log("parrafos :", analizador.parrafos(archivoEjemplo));
console.log("caracteres especiales :", analizador.caracteresEspeciales(archivoEjemplo));
console.log("total caracter dado (i) : ", analizador.totalCaracter(archivoEjemplo,'i'));
