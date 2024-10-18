let arreglouno = [{nombre: "Juan", edad: 25}];
let arreglodos = [{carrera: "Desarrollo de Software Multiplataforma"}];

const arreglosjuntos = arreglouno.map((elemento, ind) => {
    return { ...elemento, ...arreglodos[ind] };
});

console.log(arreglosjuntos);