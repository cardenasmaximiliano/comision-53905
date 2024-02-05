//arrays => listas indexadas. Listas que pueden contener datos de tipo numerico, strings, objetos y funciones , otros arrays.
// TODOS LOS INDICES DE ARRAYS INICIAN EN 0;


//let productos = ["arroz","banana","fideos","gaseosa"]; //array de string 
// let numeros = [1,2,3,4,5,6] //array de numeros
// let boolean = [true, false, false, true, false] //array de boolean
// let popurri = ["arroz",1 ,true] //podes mezclar datos

// const USUARIOS = [  //
//     {
//         nombre: "maxi",
//         apellido:"cardenas",
//         edad:31
//     },
//     {
//         nombre:"emiliano",
//         apellido:"cararo",
//         edad:25
//     }

// ]

// console.log(productos);

// //accedemos a uno de los valores que contiene el array a traves de su indice.
// console.log(productos[3]);

// console.log(USUARIOS[1]);

//RECORRIDO DE UN ARRAY

// let productos = ["arroz","banana","fideos","gaseosa"];
// console.log(productos);
//  for(let i = 0; i < 10; i++){
//      console.log(productos[i]);}



//LENGTH => ES UN METODO, QUE NOS VA A PROPORCIONAR EL DATO DE LA CANTIDAD DE ELEMENTOS QUE POSEE EL ARREGLO. 

//let productos = ["arroz","banana","fideos","gaseosa"]
// let cantidadDeProductos = productos.length;
// console.log("la cantidad de productos que posee el array es: " + cantidadDeProductos)

// let texto= "mundoCoder";
// let longitudTexto = texto.length
// console.log(longitudTexto);

//PUSH => metodo que se utiliza para agregar uno o mas datos al final del array


// let numero = [1,2,3,4,5];

// numero.push("pepito",1);

// console.log(numero);

//pop => elimina el ultimo elemento de un array

// numero.pop();

// console.log(numero)


//shift => elimina el primer elemento de un array

// numeroEliminado = numero.shift();

// console.log(numeroEliminado);
// console.log(numero);

//splice => este metodo nos sirve para gregar, eliminar o remplar elmento en un array

// let colores = ["rojo","naranja","amarillo"];

// // colores.splice(1,2,"azul","morado");

// //podes agregar indices, en caso de no estar declarados 
// colores.splice(3,2,"azul","morado");
// console.log(colores);

// //splice => (indice,cantidad, el tipo de dato )

// //join => convierte los elementos de un array en una cadena de texto, y los
// // une utilizando separadores especificados por nosotros.

// let stringColores = colores.join("/");
// console.log(stringColores);

// //concat => nos permite combinar 2 o mas arrays en uno nuevo.


// // let autos =["honda","toyota","nissan"];

// // let masAutos = autos.concat(["liffan", "cherry"]);

// // console.log(masAutos);

// let array1 = [1,2,3];
// let array2 = [4,5,6];
// let array3 = [7,8,9];

// const NUEVO_ARRAY = array1.concat(array2,array3);

// console.log(NUEVO_ARRAY);

// //slice => nos permite sacar una porcion de un array y crear un array con esos elemons que sacamos

// // slice(posInicial, posFinalNoIncluida);

// let arrayNumero = [1,2,3,4,5];

// let parteDelArray = arrayNumero.slice(1,4);

// console.log(parteDelArray);

// //indexOf => busca la primera aparicion de un elemento en un array y devuelve su indice. 

// let fruta = ["banana","manzana","frutilla", "naranja","manzana"];

// let indice = fruta.indexOf("manzana");
// //podemos tambien idicarles desde que indice inician let indice = fruta.indexOf("manzana", 3 );

// console.log(indice);

// //includes => nos dice si un valor esta incluido en el array, el dato lo muestra de manera
// //booleana, si esta da true si no esta da false. 

// let estaEnFrutas = fruta.includes("kiwi");
// console.log(estaEnFrutas);

// let frutaDadaVuelta = fruta.reverse();

// console.log(frutaDadaVuelta);

//unshift => nos permite agregar elementos al inicio del array 
//pero desplaza los que eciste


// let fruta = ["banana","manzana","frutilla", "naranja","manzana"];

// const NUEVO_ARRAY = fruta.unshift("kiwi");

// console.log(NUEVO_ARRAY)

// console.log(fruta);

//array de objetos son estructuras que nos permiten almacenar
// colecciones de objetos, en un solo lugar.

// const PERSONAS = [
//     {
//         nombre: "pedro",
//          edad:30
//     },
//     {
//         nombre: "carlos",
//          edad:25
//     },
//     {
//         nombre: "ezequiel",
//          edad:21
//     }
// ]

// console.log(PERSONAS)

// // FOR... OF

// for (const personaObjetos of PERSONAS){
//     console.log(personaObjetos.nombre);
// }


const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Luis", edad: 35 }
  ];

function calcularPromedioEdades(arrayPersonas){
    let sumaEdades = 0;

    for(let i = 0; i <arrayPersonas.length; i++){
        sumaEdades += arrayPersonas[i].edad;
    }
    const PROMEDIO = sumaEdades / arrayPersonas.length;
    return PROMEDIO;
}

const PROMEDIO_EDADES = calcularPromedioEdades(personas);
console.log("el promedio es: "+ PROMEDIO_EDADES)