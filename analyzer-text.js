const espacios = (texto = '') => (texto.match(/ /g) || []).length;

const lineas = (texto = '') => texto.split(/\r\n|\r|\n/).length;

const palabras = (texto = '') => (texto.match(/\b\w+\b/g) || []).length;

const letras = (texto = '') => (texto.match(/[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/g) || []).length;

const numeros = (texto = '') => (texto.match(/\d/g) || []).length;

const parrafos = (texto = '') => texto.split(/\n\s*\n/).length;

const caracteresEspeciales = (texto = '') => (texto.match(/[^\w\s]/g) || []).length;

const totalCaracter = (texto = '', caracter = '') => {
  if (!caracter) return 0;
  const regex = new RegExp(caracter, 'g');
  return (texto.match(regex) || []).length;
};

module.exports = {
  espacios,
  lineas,
  palabras,
  letras,
  numeros,
  parrafos,
  caracteresEspeciales,
  totalCaracter
};
