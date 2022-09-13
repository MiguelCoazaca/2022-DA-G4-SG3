var Comida = { 

    precio: 7.00, 

    nombre: 'frapp', 

    tiempo: '40 minutos' 
} 

var food = Object.create(Comida) 

console.log(food.nombre); 

console.log(food.precio); 