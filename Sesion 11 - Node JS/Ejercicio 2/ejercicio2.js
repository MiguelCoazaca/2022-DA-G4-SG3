var mysql = require('mysql');
var conexion = mysql.createConnection({
    host:'localhost',
    port:'3306',
    database: 'rock',
    user: 'root',
    password: '',
});
conexion.connect(function(err){
    if(err){
        console.log("Error de conexion"+ err.stack);
        return;
 }
 console.log("Esta conectado a: "+conexion.threadId);
});
conexion.query('select * from canciones', function(error,results){
    if(error)
    throw error;
    results.forEach(element => {
        console.log(element);
    });
});
conexion.end();