//abstraccion => manera que tenemos de reducir la complejidad de un codigo, permitiendonos implmentar y maneras y diseños
//mas eficientes en los datos. 


// ventajas

// evitar codigo duplicado. 
// podemos crear multimples instancias con una una sola abstraccion
// encapsular datos.
//evitar codigo de bajo nivel (mejores practicas)

// funcion para un sumar. 

// function sumar(a, b){
//     return a + b
// }

// let resultado = sumar(10,3);
// console.log(resultado)



//funciones de orden superior => HOF, high order function 

// function mayorQue(x){
//     return (num) => num > x;
// }

// const mayorQueDiez = mayorQue(10);
// const mayorQueVenite = mayorQue(20);

// console.log(mayorQueDiez(11))

//funciones que poseen funciones


// function asignacionOperacion(operacion){
//     if(operacion === "sumar"){
//         return function(num1,num2){
//                         return num1 + num2;
//                      }
//     }else if(operacion === "restar"){
//         return (num1, num2) => num1 - num2;
//     }
// }

// let sumar = asignacionOperacion("sumar");
// let restar = asignacionOperacion("restar");

// console.log(sumar(4,6))


//funciones pasadas por parametros

//callback => es una funcion que se pasa como argumento a otra funcion 
// y se ejecuta despues de que ocurra algun evento especifico.

//callbacks => van a ser fundamentales cuando trabajen funciones asincronas, eventos.

// function porCadaUno(arr, fn){
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }

// const numeros = [0,1,2,3,4];

// porCadaUno()


// function operar(num1,num2, operacion){
//     return operacion (num1,num2);

// }
// function suma(a,b){
//     return a+ b
// }
// function resta(a,b){
//     return a- b
// }
// function multiplicar(a,b){
//     return a*b
// }

// console.log(operar(5,3,suma));
// console.log(operar(10,4,resta));
// console.log(operar(3,5,multiplicar));

//forEach => lo utilizamos para iterar sobre un array. 

// const letras = ["a","b","c"];

// // for (let i = 0; i < letras.length; i++) {
// //     const elemento = letras [i];
// //     console.log(elemento);
// // }



// letras.forEach(pepito => console.log(pepito));

// const numeros = [1,2,3,4];

// numeros.forEach(function(numero){
//     const resultado = numero *2;
//     console.log(resultado);
// })

//filter => podemos crear nuevos arrays a traves de indicaciones dadas por funciones

// const entregas = [
//     {
//         usuario:"joaquin",
//         total: 60,
//         seEntrego:true
//     },
//     {
//         usuario:"david",
//         total: 80,
//         seEntrego:true
//     },

//     {
//         usuario:"maximo",
//         total: 200,
//         seEntrego:false
//     },

//     {
//         usuario:"barbara",
//         total: 180,
//         seEntrego:true
//     },

//     {
//         usuario:"maximiliano",
//         total: 160,
//         seEntrego:false
//     },
// ]

// // const respuesta = entregas.filter(item => item.seEntrego === false && item.total >= 100);

// // console.log( respuesta);

// const serch = (letra) =>{
//     return entregas.filter(item=>{
//         return item.usuario.includes(letra) 
//     })
// }

// console.log(serch("bar"));

// //some => metodo que verifica si al menos un elemento de un array cumple con una condicion.


// const numeros = [1,2,3,4,20,31,45,40];

// //verificamos si algun numero es mayor a 40

// const numeroMayor = numeros.some(function(numeroArray){
//     return numeroArray >40;
// })

// console.log(numeroMayor);

// //MAP() => nos sirve para crear un nuevo array con los resultdos que se den a traves de una funcion 

// const productos = [
//     {nombre:"monitor" , precio:1500},
//     {nombre:"teclado" , precio:2500},
//     {nombre:"auricular" , precio:3000},
//     {nombre:"mouse" , precio:4000}
// ]

// const cambiarLetras = productos.map(function(productoArray){
//     return productoArray.nombre.toUpperCase();
// })

// console.log(cambiarLetras);

// //porcentaje aumento
// const porcentajeProducto = 0.2;

// const PRECIO_AUMENTADO = productos.map(function(productoArray){
//     return {
//         nombre: productoArray.nombre,
//         precio: productoArray.precio * (1 + porcentajeProducto)
//     }

// })

// console.log(PRECIO_AUMENTADO);
// console.log(productos);

// //reduce => se utiliza para reducir un array a un SOLO VALOR utiliza una funcion acumuladora.

// const total = [1,2,3,4]

// let sum = 0 ;

// for(let i =0; i < total.length; i ++){
//     const elemento = total [i];
//     sum = sum + elemento;
// }
// console.log(sum);

// const totalFinal = total.reduce((sum, elemento)=> sum + elemento, 0);
// console.log(totalFinal);


//reduce(function(acumulador, elemento),0)

//sumar carrito de compras

// const precioTotal = productos.reduce(function(acumulador,producto){
//     return acumulador + producto.precio;
// }, 0)

// console.log(precioTotal);

//sort => nos va a permitir ordenar los arrays 

const productos = [
    {nombre:"Monitor" , precio:1500},
    {nombre:"Teclado" , precio:3500},
    {nombre:"Auricular" , precio:3000},
    {nombre:"Mouse" , precio:4000}
]

// //mayor a menor
// productos.sort(function(a,b){
//     return b.precio - a.precio;
// })

// console.log(productos);

// //menor a mayor 

// productos.sort(function(a,b){
//     return a.precio - b.precio;
// })

productos.sort(function(a,b){
    const nombreA = a.nombre.toLocaleLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if (nombreA < nombreB) {
        return -1;}
    
        if(nombreA > nombreB) {
            return 1
            }
    return 0;
})

console.log(productos);
