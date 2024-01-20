//ejercicio 1 

// let suma = 0;


// for (let i = 1 ; i <=50; i++){
//     if(i % 2 === 0) {
//         suma += i ;
//     }
// }

// console.log("los numeros pares son" + suma);

// //ejercicio 2 

// const NUMERO_SECRETO = 7;
// let intentos = 0;
// let adivinanza;

// while(adivinanza !== NUMERO_SECRETO){
//  adivinanza = parseInt(prompt("adivina el numero secreto entre 1 y 10:"));
//  intentos++;

//     if(adivinanza < NUMERO_SECRETO){
//         alert("es demasiado bajo el numero")
//     }
//     else if(adivinanza > NUMERO_SECRETO){
//         alert("demasiado alto, intenta de nuevo")
//     }else{
//     alert("adivinaste el numero secreto: " + NUMERO_SECRETO + "EN" + intentos + " intentos!")

// }}


//3 => calculadora

// do{
//     const NUMERO_UNO = parseFloat(prompt("ingresa primer numero"));
//     const OPERACIONES = prompt ("ingrese que operacion desea realizar( +, - , *, /)");
//     const NUMERO_DOS = parseFloat(prompt("ingrese segundo numero"));
    
//     let resultado;
    
//     switch(OPERACIONES){
//         case "+":
//             resultado = NUMERO_UNO + NUMERO_DOS;
//             break;
//         case "-":
//                 resultado = NUMERO_UNO - NUMERO_DOS;
//                 break;   
//         case "*":
//                 resultado = NUMERO_UNO * NUMERO_DOS;
//                 break;
//         case "/":
//                 resultado = NUMERO_UNO / NUMERO_DOS;
//                 break;        
//         default:
//             alert("operacion no valida");
//             resultado = "indefinido";
//         }
//     alert ("resultado:" + resultado)
    
//     let constinuar = prompt("quiere continuar, si / no").toLowerCase();

// }while(continuar === "si");



//ejercicio 4 del modulo

let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);
