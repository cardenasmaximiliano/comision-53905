//ciclos 


//ciclo por conteo (counted loop)=> corresponde el ciclo FOR
// ESTE CICLO ES CONTROLADO POR NOSOTROS YA QUE NOSOTROS LE INDICAMOS DE ANTEMANO CUANTAS VECES QUEREMOS QUE SE EJECUTE.

//ciclos por condiciones (condicional loop) => ciclo WHILE o DO...WHILE

//ESTE CICLO NO ES CONTROLADO POR NOSOTROS, SI NO QUE RESPONDE A UNA CONDICIONES EN LA CUAL, SI SE CUMPLE TERMINA EL PROCESO.


//operadores =>

// operador de incremento = > ++

// let x = 5;
// let y = ++x;
// console.log(y);

// post-incremento = variable++ , el valor de la variable se incrementa despues de que se utiliza la expresion actual;

//pre-incremento = ++variable => nos dice que el valor de la variable se incrementa antes de que se utilice.

//operador de decremento => -- 


//ciclo FOR 

// for(inicializacion; condicion; actualizacion){
//     inicializacion (desde) => aca se estable la variable de control y se asigna el inicializacion
//     condicion (hasta) =>expresion logica, y vamos a determinar cuantas iteraciones genera el programa, siempre que sea verdadera el ciclo continua, cuando sea falso frena
//     actualizacion => 
// }


// for(let i= 0; i < 21; i++ ){
//     console.log("inteacion Nro ", i);
// }

// const  NUMERO =5;

// for(let i = 0; i<=10; i++){
//     const RESULTADO = NUMERO * i;
//     console.log(NUMERO + " x " + i + "= " + RESULTADO);
// }


// //sentencia break => 


// for( let pepito = 1; pepito <=10; pepito++ ){

//     if( pepito === 5){
//         break;
//     }
//     console.log(pepito)
// }

//SENTENCIA CONTINUE => 

// for( let continuar = 1;  continuar <=10;  continuar++ ){

//     if(  continuar === 5){
//         continue;
//     }
//     console.log( continuar)
// }

//bucles por condicion

//while 

// while( condicion){
//     //bloque de codigo a ejecutar mientras la condicion sea verdadera, en el momento que no lo es se termina. 

// }

// let contador = 1; // inicio del contador que se piensa evaluar.

// while(contador <=5){
//     console.log("numero:" + contador);
//     contador++ //incremtar el contador para la proxima iteracion
// }

// console.log("bucle se completo")

// let segundos = 10;


// while(segundos >= 0){
//     console.log("cuenta regresiva" + segundos);
//     segundos--;
// }

// console.log("tiempo cumplido");


// //DO WHILE => 

// do{
//      //bloque de codigo a ejecutarse al menos una vez
// }while(condiciones);

//programa para calcular la suma de numeros ingresados por el usuario

// let suma = 0;
// let continuar;

// do{
//     const NUMERO = parseFloat(prompt("ingresar el numero a sumar"));

//     if(!isNaN(NUMERO)){
//         suma += NUMERO; 
//         continuar = prompt("quiere ingresar otro numero(SI o No)").toLowerCase();
//     }else{
//         alert("ingresamos un numero valido");
//         continuar = "si"; //en caso de que no ingrese un numero que el programa se puede continuar
//     }

// } while(continuar === "si");

// alert("la suma total es: " + suma)


//switch => alternativa a if .. else se utiliza para toma de decisiones basadas en el valor de una expresion


// switch(expresion){

//     case valor1:
//         //un codigo a ejecutar en caso que la expresion sea igual al valor1
//         break;
//     case valor2:
//         //codigo 
//         break;

//     case valor3: 
//         //codigo
//         break;

//     default:
//     //codigo que se va a ejecutar en caso de que ningun case funcione
// }

const numeroDia = 3 ;

switch(numeroDia){

    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    
    default:
        console.log("no existe el dia");

}




switch (){

    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
}
