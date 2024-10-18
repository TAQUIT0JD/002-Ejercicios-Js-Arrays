let promedio = [];
let r=0, i=0;
let c = parseInt(prompt('¿Cuántas valores va a ingresar? '));
while (i<c){
    let v = prompt('Ingrese un valor: ');
    promedio.push(v);
    r=r+parseInt(promedio[i]);
    i++;
}
r=r/c;
console.log('El promedio de los valores es:',r);