/**
 * FUNCIONES = son bloque de codigo que realizan una tarea especifica y pueden ser
 *  reutilizados en diferentes partes del codigo.
 * Nos ayuda a organizar, estructurar y nos permite que 
 * el codigo sea mas modular y facil de entender. 
 */

//como se declara una funcion?

//las funciones tienen que tener el nombre de la accion que van a ejecutar, suelen ser VERBOS y se declaran con camelCase.


// function saludar(){

//     //se ejecutan las instrucciones de la funcion
//     console.log("hola mirrey")
//     console.log("hola mirrey")
//     console.log("hola mirrey")
//     console.log("hola mirrey")
//     console.log("hola mirrey")
//     console.log("hola mirrey")
    
    
// }


// //las funciones se llaman para ser ejecutadas

// saludar();
// saludar();


//LAS FUNCIONES TIENEN LA POSIBILIDAD DE ACEPTAR PARAMETROS Y ARGUMENTOS


//se incorpora un parametro que va a recibir el valor que se aplique en el argumento
// function saludarPersona(nombre){
//     console.log("hola, "+ nombre + "¿Como estas?");
// }

// //el argumento se ejecuta cuando se incorpora un valor dentro de la funcion
// saludarPersona("gilberto");


// ejemplo 1

//scoupe o ambito o alcance
//el concepto habla sobre lo visible y lo accesible de una variable dentro de un programa

// variable de tipo global =>son variables que se pueden llamar en cualquier bloque de codigo

// let ingresoDeNombre = prompt("ingresar nombre:");

// function ingresarNombre(nombre){
//     console.log("el nombre del sujeto es: " + nombre);
// }

// ingresarNombre(ingresoDeNombre);

// //el remix del ejemplo 1 
// //variable de tipo local => son variables que solamente van a vivir dentro del bloque donde fueron creadas

// function ingresarNombre(){
//     let ingresoDeNombre = prompt("ingresar nombre:");
//     console.log("el nombre del sujeto es: " + ingresoDeNombre);
// }
// ingresarNombre();


// let variableGlobal = "soy la variable GLOBAL";

// function ejemploScoupe(){
//     let variableLocal = "soy la variable LOCAL";
//     console.log(variableGlobal);
//     console.log(variableLocal);
// }

// console.log(variableGlobal);
// console.log(variableLocal);

//  let ingresoDeNombre = prompt("ingresar nombre:");
//  let ingresoDeApellido = prompt("ingreso depellido:");
//  let ingresoEdad = parseInt(prompt("ingresar Edad:"));
 

//  function ingresarDatos(nombre, apellido, edad){
//      console.log("el nombre del sujeto es: " + nombre + " el apellido es:" + apellido + " tiene " + edad + "años");
//  }

//  ingresarDatos(ingresoDeNombre, ingresoDeApellido,ingresoEdad);


// function ingresarNombre(){
//     let ingresoDeNombre = prompt("aca tu nombre");
//     console.log("el nombre ingresado es " + ingresoDeNombre)
//     let numero = 0;
    
//     while(numero < 10){
//         ingresarNombre()
//         numero ++
//     }
// }

// ingresarNombre(); /*

//un programa que nos verifique si una persona es mayor de edad. 

// function comprobarEdad(){

//     const EDAD = parseInt(prompt("ingresar edad"));
 
//     if(EDAD >= 18){
//         return "es mayor de EDAD"
//     }else{
//         return "No es mayor de EDAD"
//     }
// }

// const resultadoEdad = comprobarEdad();

// console.log(resultadoEdad);

// function sumar(a,b){

//     return a + b; 
// }

// let resultado = sumar(3,5);
// console.log(resultado);


//FUNCION ANONIMAAA
// let suma = function(a,b){
//     return a * b;
// }

// console.log(suma(2,3));

//FUNCION DE TIPO FLECHAA

// son funciones de expresion corta donde => no solo declara que es una funcion si no que dentro tiene un return implicito
let num1= parseInt(prompt("num1"))
let num2= parseInt(prompt("num2"))

let suma = (a,b) => a + b; 

console.log(suma(num1,num2));