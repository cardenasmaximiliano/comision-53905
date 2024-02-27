//spread operator en arrays


//copiar, concatenar, añadir elementos

const arrayOriginal = [1,2,3];

const nuevoArray = [...arrayOriginal];

console.log(nuevoArray);

//concatenar arrays 

const array1 = ["pera", "manzana", "banana"];
const array2 = ["uva","frutilla","kiwi"];

const array3 = [...array1, ...array2];

console.log(array3);


//añadir elementos 

const array4 = [...array1, "naranja","mandarina"];

console.log(array4);


//spread de objetos 

//copiar
const objeto = {
    a:1,
    b:2,
    c:3
}

const nuevoObjeto = {...objeto};
console.log(nuevoObjeto);

//combinar objetos
const persona={
    nombre1: "pedro",
    apellido: "castellano",
}
const persona2={
    nombre:"carlos",
    apellido1: "palacios"
}

const personas = {...persona, ...persona2}
console.log(personas)


const datosCompletos = {...persona, edad:30, ciudad:"mar del plata"}
console.log(datosCompletos)

const datosPersonales ={
    nombre:"guillermo",
    edad:30,
    direccion:{
        ciudad: "san bernardo",
        cp: "2040"
    }
}

const datosActualizados ={
    ...datosPersonales,
    direccion:{
       ...datosPersonales.direccion,
        ciudad: "mar del plata"
    }
}

console.log(datosActualizados);



function suma(...numeros){

    return numeros.reduce((total, num) => total + num, 0 )

}

console.log(suma(1,2,10));

