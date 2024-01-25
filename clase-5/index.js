//un objeto => una estructura de datos que se utiliza para almacenar y organizar informacion. 
//los objetos poseen claves y valores

/*
en una silla
clave                 valor
cantidad de patas:  4
color de silla: rojo
tipo de madera:  algarrobo

*/

//descripcion de la silla
//let sillaPatas = 4;
//let sillaColor = "rojo";
//let sillaMadera = "algarrobo";

// let silla = {
//     patas:4,
//     color: "rojo",
//     madera:"algarrobo"
// };

// console.log(silla);
// console.log(silla.madera);

// const alumno ={
//     nombre: "",
//     apellido: "",
//     comision: ""
// }

// //agregar datos a un objeto vacio
// alumno.nombre = "guillermo";
// alumno.apellido = "rodriguez";
// alumno.comision = "javaSCcript";

// console.log(alumno);

//lo que hacemos es modificar los datos del objeto con []

// alumno["nombre"] = "Marge";

// console.log(alumno)


///objetos constructores => function constructora, funcion que se utiliza para crear instancias de objetos. Son importantes en la programcion orienta a objetos y se utiliza
// para definicr y crear objetos con propiedades, y metodos especificos. 

//como se crea

// 1- es que la primera letra de la funcion esta en mayuscula => utilizamos PascalCase
//2- todas funciones se abren parentesis y pasan parametros

// function Alumnos(pepito, nombre, apellido,comision){
//         //el this guarda la informacion  = el valor que se le asigna es el parametro que va a captar la informacion
//         this.lista= pepito
//         this.nombre = nombre
//         this.apellido = apellido
//         this.comision = comision
// }

// const ALUMNO_UNO = new Alumnos(1,"mariano","Palonsky","javaScript")
// const ALUMNO_DOS = new Alumnos(2,"barbara","bravo","javaScript")
// console.log(ALUMNO_UNO, ALUMNO_DOS);
// console.log(ALUMNO_DOS);

// ALUMNO_DOS["apellido"]= "cardenas"

// console.log(ALUMNO_DOS);

//metodos y operaciones con objetos
//cuando hablamos de esto hacemos referencia a acciones o funciones que pueden realizarse en los objetos.

// let coche = {
//     marca:"honda",
//     modelo:"civic",
//     arrancar: function(){
//         console.log("el coche esta arrancando")
//     }
// }
// coche.arrancar();


// const IVA = 1.21;

// function Producto(nombre, precio, stock){
//     this.nombre = nombre
//     this.precio= precio
//     this.stock = stock
//     this.precioConIVA = function(){
//         let precioFinal = this.precio * 1.3;
//         return "$" + precioFinal
//     }
// }

// const PRODUCTO_UNO = new Producto("arroz", 800, 2);
// const PRODUCTO_DOS = new Producto("fideos", 700, 1);

// console.log(PRODUCTO_UNO);
// console.log(PRODUCTO_UNO.precioConIVA())
// console.log(PRODUCTO_DOS.precioConIVA())

//operador in => se utiliza para verificar si una propiedad especifica existe en el objeto

// let persona ={
//     nombre: "pablo",
//     edad: 30
// }

// if("ciudad" in persona){
//     console.log("la propiedad nombre esta dentro del objeto");
// }else{
//     console.log("no existe dicha propiedad")
// }


//el bucle for... in => la utilizamos para iterar sobre las propiedades enumerables de un objeto. 

// let persona ={
//          nombre: "pablo",
//         edad: 30
//      }

//      for (let propiedad in persona){
//         console.log(propiedad + ":" + persona[propiedad] );
//      }

//clases en javaScript

//1 => difinir el objeto
//2 => definir propiedades y metodos 
//3 => herencia

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} `) // "hola " + varible + "me llamo "
    }
}

const persona1= new  Persona("maxi", 31);
const persona2= new Persona("nico", 28);

persona1.saludar();
persona2.saludar();