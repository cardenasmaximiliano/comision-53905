//conceptos que tenemos que tener en cuenta antes de encarar asincronismo

//Javascript => es sicronica, hace referencia a la ejecucion de operacion en un orden secuencial.

//threads => significa, que javascript se ejecuta en un solo hilo (single thread),
//nos dice que solo podemos hacer una cosa a la vez. 

//bloqueante => una tarea no devuelve el control de la 
// logica de lo que este haciendo hasta ser completado. alert.

// no bloqueante => una tarea se puede devolver inmediatamente independendiente del resultado. 
// cuando el programa nos da un resultado o nos tira un error. 

//sincronismo

//refiere a la ejecucion de operacion en un orden secuencial.

// console.log("inicio de programa")

// function sincronismo (){
//     for(let i = 0; i < 3; i++){
//         console.log("itere " + (i+1));
//     }
// }

// sincronismo()

// console.log("fin de programa")


//ASINCRONISMO

//las operaciones asincronas son aquellas que no van a bloquear el el hilo del programa.
//nos va a permitir ejecutar operaciones "como si fueran en un segundo".
//nos va a permitir ejecutar operacion en distintos (multiple thread);



//setTimeOut => ejecutar funciones despues de un cierto periodo tiempo. 

//setTimeout(funcion, declaramosElTiempoEnMilisegundos) 

// console.log("inicio de programa")

// setTimeout(function(){
//     console.log("este es un ejemplo de operacion asincrona")
// },4000); 


// console.log("fin de programa")


// function cambiarElemento(){
//     document.getElementById("elemento").innerHTML = "proyecto Daniela"
// }

// setTimeout(cambiarElemento, 3000);

// function cambiarElemento2(){
//     document.getElementById("elemento").innerHTML = "proyecto Guille"

// }

// setTimeout(cambiarElemento2, 6000);

const mensaje = "malena";
const elementoDos= document.getElementById("elemento2");
let indice = 0;


function mostrarLetra(){
    elementoDos.textContent += mensaje[indice];
    indice++;
    if( indice < mensaje.length){
        setTimeout(mostrarLetra,200);
    }
}


setTimeout(mostrarLetra,3000);

//callback => refiere una funcion que se pasa como argumento a otra funcion.
//son utilizados en situaciones donde las operaciones toman un tiempo y no bloquean el hilo
// principal de la ejecucion. 

//setinterval. => ejecutamos rapidamente una funcion o bloque de codigo, con intervalos regulares especificados.



//setintervaL(funcion, intervaloDeMiLISEGUNDOS);


let tiempoRestante = 10;

function actualizarTemporizador(){
    const temporizador = document.getElementById('temporizador');

    temporizador.textContent = "tiempo restante: " + tiempoRestante;

    tiempoRestante--;

    if (tiempoRestante === 0){
        clearInterval(intervaloID);
        temporizador.textContent = "pepito";
        /***clear interval:nos sirve para deterner la ejecucion de un intervalo, que fue
         * preestablecido con la funcion setInterval
        */
    }

}

const intervaloID = setInterval(actualizarTemporizador,1000);


//PROMESAS => OBJETO QUE REPRESENTA UN RESULTADO EVENTUAL DE UN UNA OPERACION ASINCRONA.
//Promesa va a representar un valor que aun no se ha calculado o se ha creado. 

// Promesas poseen 3 estados: 

//pendiente o pending = el estado inicial de la promesa, y nos dice que la operacion todavia
//no se termino.

//resultao cumplida o fullfilled => nos indica a nostros si la operacion asincrona se ejecuto con exito. 

//rechazada o rejected => nos dice que la operacion fallo. 

// const promesa = new Promise ((resolve, reject)=>{
//     //resolve => se va a ejecutar cuando la promesa se cumpla
//     //reject => se va a ejecutar cuando la promesa n ose cumpla

// })

class usuario {
    constructor (user, password) {
        this.user = user; 
        this.password = password;
    }
}

const usuario1 = new usuario("usuarioUno",1234);
const usuario2 = new usuario("usuariodos",1234);
const usuario3 = new usuario("admin",4321);

const usuarios = [usuario1, usuario2, usuario3];

const solicitarUsuarios = (estado) =>{
    return new Promise((resuelto, rechazado) =>{
        if (estado === true){
            resuelto (usuarios);
        } else{
            rechazado("vuelva pronto")
        }
    })
}

// solicitarUsuarios(true)
//     .then(resuelto){
//         console.log(resuelto)
//     }

//     solicitarUsuarios(false)
//     .catch(error){}


const  cantidadUsuarios = 15;

const cantidadUsuariosInscripto = new Promise(function(resolve, reject){
    if (cantidadUsuarios > 10){
        resolve ("los usuarios son suficientes para iniciar el curso");
    }else {
        reject("no hay alumnos suficientes")
    }
})

cantidadUsuariosInscripto.then((resultado)=>{
    console.log(resultado);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{console.log("finalizo la promesa")});


