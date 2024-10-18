let arreglo = ["Juan",10,"",0,true,false];

let nuevoarreglo = arreglo.filter(elementos => elementos!==0 && elementos!==false && elementos!=="");

console.log(nuevoarreglo);