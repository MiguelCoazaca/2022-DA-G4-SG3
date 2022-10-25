console.log("Window");
console.log(window.location);
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.host);
console.log(window.location.pathname);
console.log(window.location.protocol);

setTimeout(function() {
    alert("¡CUIDADO!");
    console.log("BENZEMA BALON DE ORO");
}, 2000);
setInterval(function(){
    alert("¡REAL MADRID CAMPEON!");
    console.log("14!!!!");
}, 5000);
let referenciaObjetoVentana;
const strCaracteristicasVentana = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
 
function myFunction() {
    var x = document.getElementById("myAnchor").href;
    document.getElementById("demo").innerHTML = x;
}
