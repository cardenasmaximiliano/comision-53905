//Escribe una función llamada calcularPrecioConDescuento que tome dos argumentos: cantidad y precioUnitario. 
//La función debe calcular el precio total teniendo en cuenta la cantidad comprada. 
//Si la cantidad es igual o mayor a 10, se debe aplicar un descuento del 10% al precio total. 
//La función debe devolver el precio total calculado.

// function calcularPrecioConDescuento(cantidad, precioUnitario){
       
//     let precioTotal = cantidad * precioUnitario;

//         if(cantidad >= 10){
//          precioTotal *=  0.9;
            
//         }
//         return precioTotal; 
//     }   

// console.log(calcularPrecioConDescuento(4,200));



//Describe una función llamada esContrasenaValida que tome una contraseña como argumento y 
//verifique si cumple con ciertos requisitos. La contraseña debe tener al menos 8 caracteres
// y contener el símbolo "@" para ser considerada válida. La función debe devolver "Contraseña válida" 
//si la contraseña cumple con los requisitos y "Contraseña no cumple los requisitos" en caso contrario.

// function esContrasenaValida(constrasena){

//     //length => nos sirve para saber la longitud de algunos elementos
//     //includes => metodo especifico que nos muestra si un caracter esta disponible o es valido
//     if(constrasena.length >= 8 && constrasena.includes ("@")&& [...constrasena].some(char => char === char.toUpperCase())){
//         return "contraseña valida"
//     }else{
//         return "contraseña invalida"
//     }
// }
// //tolowerCase y touppercase
// console.log(esContrasenaValida("pepitoo@"))


//Escribe una función llamada calcularArea que tome tres argumentos: forma (una cadena que puede ser "triangulo" 
//o "cuadrado"), base y altura. La función debe calcular y devolver el 
//área del triángulo si la forma es "triangulo" o el área del cuadrado si la forma es "cuadrado".

// function calcularArea (forma, base, altura){

//     if(forma === "triangulo"){
//         return 0.5*base*altura
//     }else if (forma ==="cuadrado"){
//         return base * altura
//     } else{
//         return "no se que es lo que aplicaste"
//     }
// }

// console.log(calcularArea("triangulo", 4,6));



// function esParOImpar(numero){
//     if (numero % 2 === 0){
//         return "numero par"
//     }else{
//         return "numero impar"
//     }
// }
// console.log(esParOImpar(2))


///  ssitema de gestion de empleados

// function Empleado(id, nombre, salario){
// //     this.id = id;
// //     this.nombre= nombre;
// //     this.salario = salario;
// // }

// // const empleado1 = new Empleado(1,"paula",50000);

// // //funcion para calcular los salarios

// // function calcularSalario(){
// //     let totalSalario = 0;

// //     for(let i = 1; i <=4; i++){
// //         const empleado = window[]
// //     }

// // }

const empleados = [
    {id: 1, nombre:"pedro", salario:10000},
    {id: 2, nombre:"juan", salario:20000}

]

function calcularSalarioPromedio(empleadosObjetos){
    let salarioTotal = 0;

    for(const empleado of empleadosObjetos){
        salarioTotal += empleado.salario;
    }
    const porcetajeSalario = salarioTotal / empleadosObjetos.length;
    return porcetajeSalario;
}

function imprimirInfoEmpleado(empleado){
    console.log(`id ${empleado.id}, nombre: ${empleado.nombre},salario ${empleado.salario}` )
}

const salarioPromedio = calcularSalarioPromedio(empleados)
//.tofixed => nos muestra la cantidad deigitos despues de la coma 
console.log(`salario promedio es ${salarioPromedio.toFixed(2)}`)

//

console.log("informacio de empleado: ");
for ( const empleado of empleados){
    imprimirInfoEmpleado(empleado);
}