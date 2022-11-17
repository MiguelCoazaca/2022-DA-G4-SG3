
var http = require('http');

var server = http.createServer();

function operaciones(petic, resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    resp.write('Operaciones con numeros pares \n');
    resp.write('Suma: 2+4 = 6\n');
    resp.write('Resta: 4-2 = 2\n');
    resp.write('Multiplicacion: 4*2 = 8\n');
    resp.write('Division: 4/2  = 2');
    
    resp.end();
}



server.on('request',operaciones);
server.listen(3000,function(){
    console.log('App funcionando :D en el puerto 3000');
});