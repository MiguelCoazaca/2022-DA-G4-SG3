function Estudiante (codigo, nombre, apellido)  
{ 
    this.codigo = codigo; 
    this.nombre = nombre; 
    this.apellido = apellido; 
}; 
var estu1 = new Estudiante(2020208042, 'Maria', 'Derbez') 
console.log(estu1.codigo); 
console.log(estu1.nombre); 