let suma = [];
let r=0, i=0;
let c = parseInt(prompt('¿Cuantos valores quiere sumar? '));
while (i<c){
    let v = prompt('Ingrese un número: ');
    suma.push(v);
    r=r+parseInt(suma[i]);
    i++;
}
console.log('El resultado de la suma de los elementos del Array es:',r);