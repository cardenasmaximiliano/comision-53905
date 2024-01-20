//Crea un programa que determine si un producto está en stock en una tienda en línea. Para que un producto esté disponible, debe estar marcado como "en stock" o tener un precio con descuento. Si alguna de estas condiciones se cumple, muestra un mensaje de "Producto disponible"; de lo contrario, muestra un mensaje de "Producto agotado".

let enStock = true;
let precioCondescuento = false; 

if (enStock || precioCondescuento) {
    console.log("producto disponible")
}
else{
    console.log("producto agotado")
}

//ejercico 3 

let iniciarSesion = prompt("¿Has iniciado sesion? contestar con SI o NO")

if(iniciarSesion === "no"){
    console.log("por favor, inicia sesion")
}else{
    console.log("bienvenido de nuevo");
}

//ejercicio 4

let nombreUsuario = prompt("ingresar nombre usuario:");
let password = prompt("ingrese contraseña"); //prompt devuelve string

if(nombreUsuario === "admin" && (password === "secreta" || password === "123456")){
    console.log("puede acceder")
}else{
    console.log("hay algun error, vuelve a insertas los datos");
}

