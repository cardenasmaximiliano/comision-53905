//condicionales => estructuras de control de control de flujo que nos van a permitir tomar decisiones.
//nos van a servir para ejecutar diferentes bloques de codigo y en las condiciones se esperan, 
//que las condiciones sean VERDADERAS O FALSAS.

//estructura if => es una construccion fundamental para la toma de desiciones. Evalua expresiones o condiciones, y siempre va a evaluar verdadero.


// if (condicion boleana){

// // }

// //operadores de comparacion o relacionales => 

// let variable1 = 2; //numero
// let variable2 = "2"; //string

// // string siempre esta entre " "
// // number
// // boleans
 

// // x == y => operador de igualdad, evalua el valor guardado pero no le va a importar el tipo de dato. 

// if( variable1 == variable2){
//     console.log("son lo mismo para este operador");
// }

// //x === y => estrictamente igual (el valor guardado y va evaluar que el tipo de dato sea igual)

// if( variable1 === variable2){
//     console.log("son lo mismo para este operador");
// }

// // !=  => operador que refiere que es distinto el dato

// // !== => este operador va a evaluar no solo que sea diferente el dato sino tambien el tipo 

// let variable3 = 8;
// let variable4 = 9;

// //   >  mayor que
//  >= mayor o igual que
// < menor que 
//  <= menor o igual que 



// if(variable3 <= variable4){
//     console.log("true");
// }else{
//     console.log("false")
// }

// //estructura llamada else .. if => nos va a serivr para evaluar multiples condiciones de manera secuencial. 

// let numero = prompt("ingresa tu numero:");

//se inicia siempre con if se termina siempre con else. y en el medio tantos else if como sean necesarios
// if (numero > 0){
//     console.log("el numero es positivo")
// }
// else if (numero < 0){
//     console.log("el numero es negativo");
// }
// else{
//     console.log("el numero va a ser 0");
// }


//un programita que evalue la edad de una persona en caso de que quiera conducir

// const EDAD = prompt("ingresa tu edad");

// if(EDAD >= 18){
//     console.log("podes manejar")
// }
// else{
//     console.log("anda pasha, volve cuando seas mayor");
// }

//operadores logico

// OPERADOR AND (&&) => operador siempre devuelve verdadero, si ambas expresiones que se evaluan son verdaderas.

//las tablas de verdad tienen sosten en la medicion de booleanos. true o falso


// a      | b    | a && b  
// true  | true | true
// true | false | false
// false | true | false
// false | false |false 

// let EDAD =18;
// let tieneLicencia = false; 

//manejar auto => 1 mayor de edad, 2 es que tenga registro. 

// if(edad1 >= 18 && tieneLicencia == true){
//     console.log("puede conducir");
// }else{
//     console.log("la persona no puede conducir");
// }

//OPERADOR LOGICO OR || => DEVUELVE VERDADERO SI SOLO SI 1 DE LOS 2 ELEMENTOS A EVALUAR ES VERDADERO

// a     | b   |  a||b
// true | true | true
// true | false | true
// false | true | true
// false | false | false


// let EDAD =18;
// let juegaALaCompu = false; 

// if (EDAD >= 15 || juegaALaCompu == true){
//     console.log("puede jugar");
// }else{
//     console.log("no puede jugar")
// }

//operador logico "no" ! => lo vamos a utilizar para inverir el valor de la condicion 

//condicion true  => false
// condificon falsa => true

//verificar si el usuario no esta bloqueado

let usuarioBloqueado = false;

if (!usuarioBloqueado){
    console.log("el usuario tiene acceso")
}else{
    console.log ("el usuario esta bloqueado");
}

let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}

//precedencia de operadores

//1. parentesis o e corchetes
//2 operadores unitarios, ++ -- - !
//3 aritmeticos * / %  => sumas y resta
//4 relacionales < <= > >=
// igualdad == !=
// logicos && ||
//asignacion


//1) 

let estaRegistrado = prompt("¿Esta registrado? responde con si o no");
let esMayorDeEdad = prompt ("es mayor de edad contesnta si o no");

// if(estaRegistrado && esMayorDeEdad >= 18){
//     console.log("bienvenido a la pagina");

// }else{
//     console.log("acceso denegado")
// }

if (estaRegistrado === "si" && esMayorDeEdad === "si"){

    console.log("bienvenido a la web")

}else{
    console.log("acceso denegado")
}