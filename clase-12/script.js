//sugar sintax = es un termino que utilizamos para describir una caracteristica.
//dentro del lenguaje de programacion, donde simplicamos acciones. 

//template string / literal

// let nombre = "juan";

// const mensaje = "hola" + " " + nombre ;

// console.log(mensaje)


// const mensaje2 = `hola ${mensaje}`;

// console.log(mensaje2);

// //operadores ternarios o operadores condicionales
// //es la expresion resumida de un if else, permite realizar una evaluacion de una condicion y devuelve un valor en base a eso.


// let edadCliente = 8;

// if(edadCliente > 18) {
//     console.log("es mayor el cliente, puede comprar")
// }else{
//     console.log("es menor no puede comprar")
// }

// // ? => if
// // : => else

// // condicion a evaluar ? condicion en true : condicion en false
// edadCliente >= 18 ? console.log("es mayor") : console.log("es menor")



//operador logico and  && y or || => operadores de corto circuito

//operador logico and && => trabaja con operaciones boolenas.

// let usuarioRegistrado = true;
// let suscripcion = true;

// if(usuarioRegistrado && suscripcion){

//     document.getElementById("bievenida").innerText = "hola";

//     /*
//    let dato = document.getElementById("bievenida");
//    dato.innerText = "hola";
//    */
//}

//or lo podemos utilizar para predefinir un mensaje en caso de que no retorne verdadera la condicion

// let name = prompt("ingresa tu nombre");

// console.log(name || "sos un invitado")


//nulish coalescing => al igual que el or me permite trabajar con 2 operaciones.
// y tiene la caracteristica que es mas permisiva. 


// function datosDeUsuario(usuario){
//     let nombre = usuario.nombre ?? "usuarioAnonimo";
//     let correoElectronico = usuario.correoElectronico ?? "ejemplo@.com";

//     console.log(`NOMBRE: ${nombre}`);
//     console.log(`correoElectronico: ${correoElectronico}`);
// }

// let usuario1 = {nombre:"juan",correoElectronico:"juan@.com"};
// datosDeUsuario(usuario1);

// let usuario2 = {nombre: "Daniela"};
// datosDeUsuario(usuario2);



//encadenamiento pocional => optinal chaining  ?.

//forma segura que vamos a tener de acceder a propiedades de un objeto sin generar errores.
//null y el undefined


// let usuario ={

//     nombre: "pedro",
//     direccion:{
//             calle:"luro",
//             ciudad: "mar del plata",
//             numero: "1234"
//             },
//     telefono: Null;
// }

// //acceder a las propiedades de forma segura

// let telefonoUsuario = usuario.telefono?.numero;
// console.log(telefonoUsuario);

// let condigoNumeroUsuario = usuario.direccion?.numero;
// console.log(condigoNumeroUsuario)


// //desestructuracion

//nos va a permitir a nosotros, descomponer estructuras de datos en este caso obejtos o arrays. 


const persona = {nombre: "joaquin", edad:30, ciudad: "mar del plata"};



const {nombre, edad, ciudad} = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);


const gato ={

    humano: "pepito",
    raza: "persa",
    edad: 5,
    direccion:{
        calle:"luro",
        ciudad: "mar del plata",
        numero: "1234"
    }

}

let {humano, raza, edad:edadGato,  direccion:{calle,ciudad:ciudadGato,numero}} = gato;

console.log(humano);

console.log(calle);

console.log(ciudadGato);

console.log(edadGato);


const alumno = {
    nombre: "pedro",
    edad: 10
}

//desestructuracion por parametros
function darDatos({nombre, edad}){
    console.log(`hola vos sos ${nombre} y  tenes ${edad}`)
}

darDatos(alumno);




//Destructuracion de arrays

const frutas= ['manzana','pera','naranja']

const [fruta1, fruta2,fruta3] = frutas;


console.log(fruta1);
console.log(fruta2);
console.log(fruta3);


const perro = {tipo: "caniche", edad: 2};

const{tipo, edad:edadPerro, vacuna= 'si'} = perro;

console.log(vacuna);


//spreadOparator

let array1 = [1,2,3];
let array2 = [...array1];

console.log(array2);

