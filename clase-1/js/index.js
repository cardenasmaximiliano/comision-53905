//alert("hola chicos esto es una alerta desde un archivo externo")


/*
varias lineas de codigo
dawdad
awdawdad
1232113

*/


// ctrl + k + c, alt shift a


//variables => espacio de memoria reserva que guarda diferentes tipos de datos. 

//existen 3 maneras de escribir variables => var (no se usa pero existe)
//let y const

//let => se utiliza para declarar variables que puede ser reasignadas. 
// tiene un ambito de bloque, que la variable solo es valida dentro del bloque en el que se declara. 

// estrura de una variable


//camelCase => o joroba de camello, es una manera que tenemos estandarizada los programadores para declarar.


// let nombreDeLaVariable = valor;

//que tipos de valores podemos encontrar alojados en una variable;

// let numero = 15; //number
// let cadenaDeTexto = "MAXIMIANO CARDENAS"; //string 
// let booleanos =  true; // boolean



// arreglos o arrays
/***
 *que mas se puede alojar en una variable?

    arreglos o arrays
    objeto o object

    nulo o null
    indefinido o undefined
    funciones o function

 */

/////

//const o constante => se utiliza esta variable cuando el valor no necesita ser reasignado, valor que se mantiene en el tiempo de mi codigo. 
//al igual que let const, tambien va a vivir en el bloque de codigo en el cual se cree. 

//snake_case = es una convencion que tambien utilizamos en el desarrallo de aplicaciones.  escribir una palabra_uno palabra_dos


// const NOMBRE_APELLIDO = "MAXIMILIANO CARDENAS";

//declaracion e inicializacion 

//declaracion

//estoy reservando simplemente el nombre de la variable, y no le asignamos un valor
//despues nosotros podemos inicializarlo cuando querramos
// let edad;

//inicializacion => es el proceso en el cual asignamos el valor inicial de la variable. 

// let edad;

// edad = 25; 

//las variables tienen que tener asignado un nombre que haga referencia al dato almacenado. 



//var lo que tiene de malo es que no respeta el scoupe, ya que la variable es 100% global. 


//console.log => es una funcion de javascript que lo que hace, es imprimir mensajes 
//en la consola del navegador o en entornos donde se ejecute javascript


// let numeroUno = 6;
// let numeroDos = 5;
// /// las operaciones basicas dentro de js 
// //son las operaciones aritmeticas

// let suma = numeroUno + numeroDos;
// console.log(suma);

// let resta = numeroUno - numeroDos;
// console.log(resta);

// let multiplicar = numeroUno * numeroDos;
// console.log(multiplicar);

// let division = numeroUno / numeroDos;
// console.log(division);

// let resto = numeroUno % numeroDos;
// console.log(resto);


/// concatenacion => podemos unir valores de tipo string alojados en variables

// let nombre = "leandro";
// let apellido = "Lingua";

// let NombreCompleto = nombre + " " + apellido;

// console.log(NombreCompleto)


//prompt consola alert

//prompt => funcion que nos va a mostrar un cuadro de
// dialogo en el cual el usuario puede interactuar

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

let nombreCompleto = nombre + " " + apellido;

console.log("hola ¿como estas? ", nombreCompleto);

//alert => tambien es una funcion de js que nos muestra un cuadro de dialogo

alert("hola ¿como estas? "+ nombreCompleto);