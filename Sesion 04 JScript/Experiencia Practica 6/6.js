function verWindow (){
    let final = '';
    for(let i in window){
        if(window.hasOwnProperty(i)){
            final += i +  ' = ' + window[i]+'\n';
        }
    }
    return(final);
}
const arr = ["L","O","P","Q"];

function verArray (arreglo){
    let final = '';
    for(let i in arreglo){
        if(arreglo.hasOwnProperty(i)){
            final += i +  ' = ' + arreglo[i]+'\n';
        }
    }
    return(final);
}
console.log(verArray(arr));

console.log(verWindow());

function usoWindow (){
    if (window.confirm("Escuchar musica para relajarse")) {
        window.open('https://www.youtube.com/');
      }
    else{
        m = window.prompt();
        encode = window.atob(r);
        console.log(encode);
    }
}
usoWindow();

function usoArray (arreglo){
    arreglo.push("E");
    arreglo.unshift("Prim");
    delete arreglo[2];
    return arreglo;
}
console.log(verArray(usoArray(arr)));


let numero = Number('5537');
function verNumber (n1){
    console.log(n1);
}
verNumber(numero);

function usoNumber(n1){
    n = '';
    if (Number.isInteger(n1)){
        n += 'En un numero entero';
    }
    else{
        n+= 'Numero no entero';
    }
    if (Number.isNaN){
        n += 'es un numero ';
    }
    else {
        n += 'No es un numero';
    }
    return n;
}
console.log(usoNumber(numero));