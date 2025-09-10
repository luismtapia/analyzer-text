# 📊 Analizador de Textos

**Paquete modular en JavaScript para extraer métricas clave de cualquier texto.**  
Ideal para proyectos educativos, clínicos o empresariales que requieren análisis sintáctico básico.

---

## ✨ Funcionalidades

Este paquete permite analizar cadenas de texto y obtener los siguientes datos:

- **Contar palabras**  
  Total de palabras separadas por espacios.

- **Contar espacios**  
  Número de espacios en blanco.

- **Contar números**  
  Detecta y cuenta dígitos numéricos.

- **Contar saltos de línea**  
  Identifica `\n` y contabiliza líneas.

- **Contar caracteres especiales**  
  Extrae símbolos como `@`, `#`, `%`, etc.

- **Contar letras**  
  Total de caracteres alfabéticos (mayúsculas y minúsculas).

- **Contar carácter específico**  
  Permite buscar y contar cualquier carácter dado por el usuario.

---

## 🚀 Instalación

```bash
npm install analyzer-text
```

##  Uso

```bash
const analizador = require('./analyzer-text')
```

### Texto
```bash
const textoEjemplo = `Hola Luis,
Este es un párrafo de prueba con números como 123 y símbolos como @, #, $.`

console.log("espacios :", analizador.espacios(textoEjemplo));
console.log("lineas :", analizador.lineas(textoEjemplo));
console.log("palabras :", analizador.palabras(textoEjemplo));
console.log("letras :", analizador.letras(textoEjemplo));
console.log("numeros :", analizador.numeros(textoEjemplo));
console.log("parrafos :", analizador.parrafos(textoEjemplo));
console.log("caracteres especiales :", analizador.caracteresEspeciales(textoEjemplo));
console.log("total caracter dado (o) : ", analizador.totalCaracter(textoEjemplo, 'o'));
```

### Archivo .txt
```bash
const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'input.txt');
const archivoEjemplo = fs.readFileSync(filepath, 'utf-8');

console.log("\nespacios :", analizador.espacios(archivoEjemplo));
console.log("lineas :", analizador.lineas(archivoEjemplo));
console.log("palabras :", analizador.palabras(archivoEjemplo));
console.log("letras :", analizador.letras(archivoEjemplo));
console.log("numeros :", analizador.numeros(archivoEjemplo));
console.log("parrafos :", analizador.parrafos(archivoEjemplo));
console.log("caracteres especiales :", analizador.caracteresEspeciales(archivoEjemplo));
console.log("total caracter dado (o) : ", analizador.totalCaracter(archivoEjemplo,'o'));
```


📘 Licencia
MIT — libre para uso personal y comercial.
