let arreglo = [];
let i=0;
let c = parseInt(prompt('¿Cuantos valores quiere agregar? '));
function si(){
    while (i<c){
        let v = prompt('Ingrese un valor: ');
        arreglo.push(v);
        i++;
    }
}
si();
let b = prompt('¿Qué valor quiere buscar? ')
console.log(arreglo.includes(b));