//XMLHttpRequest => (XHR)=> NOS PERMITE HACER SOLICITUDES http. 
//de manera asincrona desde el navegador. Nos permite traer o enviar informacion, mientras el usuario este en el sitio, 
//sin interrumpir la experiencia


// //siempre tenemos que traernos la url con la informacion. JSON. 
// const  url = "http://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();

// //cuando se hace la peticion ajax, nos tiene que devolver una respuesta. 
// function manejadora(){
//     if(this.readyState === 4 && this.status === 200){

//         //this.readyState => es el esta de la solicitud. 
//         /**
//          * 0 (unset) => la solicitud no se inicio
//          * 1 (opened)=> la conexion con el servidor ha sido establecido.
//          * 2(header received) => si la cabecera ha recibido respuesta
//          * 3(loading)=> descargar la respuesta
//          * 4(done) => la operacion esta completa
//          */

//         /*
//         this.status => esta propiedad nos va indicar el codigo de estado de HTTP frente a la respuesta del servidor
//             200 => codigo que el estado de la solicitud se cumplio correctamente.
//             400 => codigo de estado en el cual nos dice que hay un error la solicitud.
//             500 => error del servidor interno. 
//             */ 
        



//             //los datos obtenidos se van a guardar en una constante
//         const datos = JSON.parse(this.response);
//         console.log(datos);
//         mostrarUsuario(datos)
//         document.getElementById("app");

//         function mostrarUsuario(datos){
//             datos.forEach(usuarios => {
//                 const div = document.createElement("div");
//                 div.innerText =`${usuarios.name} `;
                
//                 app.appendChild(div)
//             });
//         }
//     }
// } 

// //crear un evento donde llamamos al evento load y le pasamos como parametro la funcion
// xhr.addEventListener('load',manejadora);

// xhr.open("GET",url);

// /**
//  * get => pedimos informacion
//  * post => vamos a enviar informacion
//  * put => actualizar la informacion
//     delete => eliminar informacion.
// */ 


// //metodo.send => lo utilizamos para enviar la solicitud de HTTP al servidor
// xhr.send()


//FETCH => FUNCION DE JS  que nos permite realizar solicitud HTTP mucho mas rapido y facilll no como lo de recien. 

//fetch (url, opciones)

// const  url = "http://jsonplaceholder.typicode.com/users";

// const app = document.getElementById("app");

// fetch(url)
//     .then(response => response.json())
//     .then((datos) =>{
//         console.log(datos)
//         mostrarUsuario(datos);
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log("proceso finalizado"));

//     function mostrarUsuario(datos){
//                datos.forEach(usuarios => {
//                const div = document.createElement("div");
//                   div.innerText =`${usuarios.name} `;
                    
//                 app.appendChild(div)
//                })
//     }

///

// const app = document.getElementById("app");

// const url = "https://pokeapi.co/api/v2/pokemon/"

// for(let i =1; i < 20; i++){
    
// fetch(url + i) 
//     .then (response => response.json())
//     .then(data => mostrarPokemon(data));
// }

// function mostrarPokemon(data){
//     const div = document.createElement("div");
//     div.innerHTML = `
//         <h2>${data.name}</h2>
//         <img src=" ${data.sprites.other["official-artwork"].front_default}" alt=" ">

//         `
//     app.append(div)
// }

//async await => nace 2017 ecma8 

// sync palabra clave, se utiliza para definir funciones asincronas. 
//ASYNC cuando la definimos como funcion asincrona, vamos a esperar a que esta nos devuelva una promesa.

//AWAIT => es la espera de la resolucion de la promesa declara con el ASYNC


// //async function fetchData(){
//     try{
//         //espera que la promesa sea resuelta y se ejecute 

//         //const response = await fetch("url");


//     }



// } catch(error){
//     console.error( "mensaje que no funciono ")
// }

// //siempre se llama a la funcion
// fetchData()


async function fetchPokemon(){
    try{
        const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon/2")
        const data = await pokeApi.json()
        console.log(data)
    }
    catch(error){
        console.log("error");
    }
}


fetchPokemon()

// const pokePedida = async () =>{
//     try{
//         const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon/2")
//     }
//     catch{

//     }
// }

