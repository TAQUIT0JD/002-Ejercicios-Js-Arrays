let arreglo = [];
let i=0;
let c = parseInt(prompt('¿Cuantos valores quiere sumar? '));
while (i<c){
    let v = prompt('Ingrese un número: ');
    arreglo.push(v);
    i++;
}

console.log(arreglo);
console.log(arreglo.reduce((numero, incre) => numero+incre, 0));