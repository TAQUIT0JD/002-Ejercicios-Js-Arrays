let arreglo = [1,2,2,2,2,2,2,2,2,3];

let cuantasveces = arreglo.reduce((v, i) => {
    if (v == v) {
        i++;
    }
    return i;
});

console.log(cuantasveces);