let mayor = [1,5,8,9,3,5,7,8,9,12];
let c=mayor.length;
let i=0, n=0;
let ma=mayor[i];
for (i=1; i<c; i++){
    n=mayor[i];
    if (n>=ma){
        ma=n;
    }
}
console.log('El número mayor del Array es:',ma);