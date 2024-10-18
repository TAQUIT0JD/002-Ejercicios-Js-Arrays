let arreglo = [1,2,3,4,5,6,7,8,9,0,1];
/*
function todo() {
    let nuevoarreglo = arreglo.indexOf(1);
    let narreglo = arreglo.filter(element => element != arreglo[0]);
    console.log(narreglo.concat(arreglo[nuevoarreglo]));
}
*/
let arreglosinrepetir = new Set(arreglo);
console.log(arreglosinrepetir);