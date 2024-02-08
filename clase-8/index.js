//math => objeto que proporciona propiedades matematicas y metodos para realizar diferentes operaciones 

//la constante de Euler

//representar una base algoritmica natural. => 2.7182 .... 

// console.log(Math.E);



//Numero PI nos sirve para calcular principalmente la circunferencia de circulos diametro geometricos tmb. 

// console.log(Math.PI);

//Math.min y Math.max => nos sirven para devolver en el primer 
//caso el valor mas pequeño y en segundo el valor mas grande. 
// math.min y math.max => se pueden ejecutar por variables o 
//funciones pero no por arrays, para eso necesitan trabajar con spreadOperator


// let minimo = Math.min(54,76,13);
// console.log(minimo);

// let maximo = Math.max(54,76,13);
// console.log(maximo);



// const numero = [5,12,8,13];

// const valorMinimo = Math.min(...numero);
// console.log(valorMinimo)

//ceil, floor y round. > NOS SIRVE PARA REDONDEAR

//CEIL => NOS VA A RETORNAR EL NUMERO QUE INDIQUEMOS SIEMPRE PARA ARRIBA

// let ceil = Math.ceil(3.14);
// console.log(ceil)

// //FLOOR => NOS VA A RETORNAR EL NUMERO QUE INDIQUEMOS SIEMPRE HACIA ABAJO

// let floor = Math.floor(3.5);
// console.log(floor)

// //ROUND => NOS VA A REDONDEAR EL NUMERO AL MAS CERCANO de los entero

// let round = Math.round(3.49);
// console.log(round);

// //square root o sqrt () => lo van a usar cuando quieran aplicar raiz cuadrada de un numero

// let square = Math.sqrt(25);
// console.log(square)

// //pow (base, exponente) => devuelve la base elevada a la potencia 

// let potencia = Math.pow(2,3);
// console.log(potencia)


// //seno coseno tangente => esto tambien los atormentamenta por la noche

// let seno = Math.sin(Math.PI/2);
// console.log(seno)

// let cos = Math.cos(Math.PI);
// console.log(cos)

// let tng = Math.tan(Math.PI/4);
// console.log(tng)

// //RANDOM => nos sirve para retornar numeros aleatorios pero que siempre van a ir desde 0 al 1 

// console.log(Math.random());

// //numeros que vayan del 0 al 50
// console.log(Math.round(Math.random()*50));

// //numero entre 10 y 50 

// console.log(Math.round(Math.random()*40 + 10));

// el jueguito tirar los dados

// function lanzarDados(){
//     return Math.floor(Math.random()*5+1);
// }

// function simularElTiro (){
//     const LANZAR_LOS_DADOS = prompt("queres lanzar los dados (si / no)").toLowerCase();

//     if(LANZAR_LOS_DADOS==="si"||LANZAR_LOS_DADOS==="yes" ){
//         let resultadoDado1 = lanzarDados();
//         let resultadoDado2 = lanzarDados();

//         console.log(`dado 1: ${resultadoDado1}`)
//         console.log(`dado 2: ${resultadoDado2}`)
//         console.log(`total: ${resultadoDado1 + resultadoDado2}`);
//     }else{
//         console.log("fin del juego")
//     }
// }

// simularElTiro()

//adivinanza de numeros

// function adivinanza(){
    
//     const numeroAleatorio = Math.floor(Math.random()*10);

//     let intentos = 0;
//     let adivinanza;

//     do{
//         adivinanza = parseInt(prompt("selecciona numeros entre 0 y 10"));

//         if(!isNaN(adivinanza) && adivinanza >= 0 && adivinanza <=10){
//             intentos ++;
            
//             if(adivinanza < numeroAleatorio){
//                 console.log("el numero es mayor, volve a jugar ")
//             } else if(adivinanza > numeroAleatorio){
//                 console.log("el numero es menor, volve a jugar ")
//             }else{
//                 console.log("la pegaste")
//             }
//         }else{
//             console.log("ingresa un numero valido")
//         }
// } while(adivinanza !== numeroAleatorio)
// }

// adivinanza()


//DATE => EN JAVASCRIPT NOS SIRVE PARA MANIPULAR LAS FECHAS Y HORAS

let fechaActual = new Date();
console.log(fechaActual)

let fechaEspecifica = new Date(2021,0,12,14,51,45);
console.log(fechaEspecifica)



//obtener componentes de la fecha
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth(); //en este caso enero inicia en 0 y diciembre es 11
let dia = fechaActual.getDate()
let hora= fechaActual.getHours();
let minutos = fechaActual.getMinutes()
let segundos = fechaActual.getSeconds();
let milisegundos = fechaActual.getMilliseconds();
// console.log(anio, mes, dia, hora, minutos, segundos, milisegundos);

 let sumaDias=(fechaActual.getDate()+1);

 console.log(sumaDias)

//programar algunas tareas

function programarTarea(){

    //solicitar tarea
    let descripcionTarea = prompt("ingresa tu tarea");

    let horaTarea = parseInt(prompt("ingresa la hora "))
    
    if(isNaN(horaTarea) || horaTarea < 0 || horaTarea >= 24){
        console.log("hora no valida, ingresa otra")
        return;
    }
   
    let minutosTarea = parseInt(prompt("ingresa los minutos"))
    
    if(isNaN(minutosTarea) || minutosTarea < 0 || minutosTarea >= 60){
        console.log("ingresa minutos validos")
        return
    }


    //crear la fecha con la hora y el minuto programado
    let fechaTarea = new Date();
    fechaTarea.setHours(horaTarea, minutosTarea, 0,0);

    // calcular el tiempo que falta para la ejecucion de la tarea

    let tiempoRestante = fechaTarea.getTime() - new Date().getTime();

    //programar la tarea

    setTimeout(function(){
        console.log(`es hora de la tarea ${descripcionTarea}`)
    },tiempoRestante);

    console.log(`tarea programada: ${descripcionTarea} a las ${horaTarea},${minutosTarea} `)
}

programarTarea();

