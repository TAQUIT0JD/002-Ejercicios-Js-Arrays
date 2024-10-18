let arreglo = [];
let i=0, ind;
let c = parseInt(prompt('¿Cuantos valores quiere ingresar al arreglo? '));
let indice = (i,c,arreglo) => {
    while (i<c){
        let v = prompt('Ingrese un valor: ');
        arreglo.push(v);
        i++;
    }
    ind = prompt('¿De que elemento desea conoce el indice? ');
    console.log(arreglo.indexOf(ind));
}

indice(i,c,arreglo);