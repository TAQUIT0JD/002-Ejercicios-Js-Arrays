let arreglo = ["si","no","talvez","oso","arbol"];

let n = parseInt(prompt('Ingresa la cantidad de letras de las palabras: '));

let nuevoarreglo = arreglo.filter((palabra)=> palabra.length>n);

console.log(nuevoarreglo);