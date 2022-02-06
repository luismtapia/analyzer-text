const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'input.txt');
const read = fs.readFileSync(filepath, 'utf-8');


// REGEX
const lineas = () => {
    return read.match(/[\n]/g).length + 1;
}

const espacios = () => {
    return read.match(/[ ]/g).length;
}

const letras = () => {
    return read.match(/[a-zñ]/ig).length;
}

const numeros = () => {
    return read.match(/\d/g).length;
}

const palabras = () => {
    // Eliminamos numeros y caracteres especiales
    const texto = read.replace(/([^\wñ]|\d)/ig, ' ').trim();
    return texto.split(/\s+/).length;
    // metodo 2
    // return read.match(/\S*[a-zñ]/ig);
}

const caracteresEspeciales = () => {
    const espacios = read.replace(/[\s|\d]/g, '');
    return espacios.match(/[^a-zñ]/ig).length;
}

const parrafos = () => {

    //console.log('cuando haya dos \\n seguidos');
    //return read.match(/[\n]/g).length + 1;

    return 'parrafos not supported yet'
}

const totalCaracter = (caracter) => {
    if (caracter.length > 1)
        return 'El parametro indicado no es un caracter';
    const miExpresion = `[${caracter}]`;
    const regex = new RegExp(miExpresion, "g");

    return read.match(regex).length;
}

exports.lineas = lineas;
exports.espacios = espacios;
exports.letras = letras;
exports.numeros = numeros;
exports.palabras = palabras;
exports.parrafos = parrafos;
exports.caracteresEspeciales = caracteresEspeciales;
exports.totalCaracter = totalCaracter;

