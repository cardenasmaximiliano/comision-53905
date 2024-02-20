//storage => una Api en los navegadores web que nos permiten almacenar informacion.

//localStorage y sessionStorage

//localStorage => la info se a va a guardar en el navegador de forma indefinida. 
//Cuando cerramos el navegador y lo volvemos a abrir,y permanecen los cambios

//sessionStorage => la info se guarda de forma temporal. Los datos almacenados los vamos a mantener,
//siempre y cuando tengamos el navegador abierto.

//setItem => es un metodo para almacenar datos de manera local en el navegador. 

// localStorage.setItem(una llave, un valor)

// localStorage.setItem("saludo","buenas gente");

// localStorage.setItem("numero", 1234);

// localStorage.setItem("booleano", true);

//getItem => es el metodo con el cual nosotros vamos a recuperar el valor asociado a las llaves. 


let saludo = localStorage.getItem("numero");
let numero = parseInt(saludo);
console.log(typeof numero);


const modo = document.getElementById("modo");

//setear la info

modo.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    //document.body = aca accdemos a los elementos html en body
    //classlist = propiedad con la accedoemos a css
    //toggle = metodo con el cual cambiamos los estados.
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark")
    }else{
        localStorage.setItem("modo","claro");
    }
    //es verificar si el nombre de una clase esta presente en el elemento
})

//recuperar esa informacion

const bodyModo= localStorage.getItem("modo");

if(bodyModo ==="dark"){
    document.body.classList.add("dark");
}
else{
    document.body.classList.remove("dark");
}

localStorage.setItem("saludo","buenas gente");

localStorage.setItem("numero", 1234);

localStorage.setItem("booleano", true);

//removeitem => es eliminar especificamente un elemento almacenado, a traves de su clave.
//

localStorage.removeItem('saludo');

//clear => elimina todos los elementos almacenados en el local.
//

localStorage.clear();


//json => javaScript obeject Notation, formato de intercambio de datos,
// que tiene una sintaxis ligera y facil de leer. 
//json convierte datos en string

let persona = {nombre:"pedro", edad:25, ciudad:"mar del plata"};

const personaJSON = JSON.stringify(persona);

localStorage.setItem("persona", personaJSON);

const usuarioEnElLocal = localStorage.getItem("persona");
console.log(usuarioEnElLocal)

//JSON.parse, convierte el JSON, de string a objeto. 

const usuarioObjeto = JSON.parse(usuarioEnElLocal);
console.log(usuarioObjeto);

