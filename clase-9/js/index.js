//CUANDO ESTAMOS MANIPULANDO EL DOM DESDE JS, LAS ETIQUETAS PASAN A LLAMARSE NODOS.

//DOCUMENT => OBJETO GLOBAL CON EL CUAL NOSOTROS DESDE JAVASCRIPT PODEMOS ACCEDER A LAS ETIQUETAS DE HTML

//ES OBJETO NOS PROPORCIONA UNA INTERFAZ PARA INTERACTUAR CON ELEMENTOS, NOSOTROS PODEMOS CREAR ELIMINAR ETC ETC ETC.

//5 maneras de acceder al dom

// getElementById => es un metodo del objeto document, y lo utilizamos para 
//seleccionar los id del HTML

// const pId = document.getElementById('pId');
// console.log(pId)

// //getElementsByClassName => se utiliza para seleccionar las clases declaradas en HTML.

// const pClass = document.getElementsByClassName('pClass');
// console.log(pClass)

// //getElementsByTagName => se utiliza si queremos llamar a una etiqueta en HTML

// const li = document.getElementsByTagName("li");
// console.log(li);

// ///////////////////

// // querySelector => nos recuerda a la manera de trabajar de  CSS.
// //querySelector nos llama 1 etiqueta a la vez

// const queryTag = document.querySelectorAll("span")
// console.log(queryTag);

// //las clases se llaman como en CSS con un . adelante del nombre asignado
// const queryClass = document.querySelector(".queryClass")
// console.log(queryClass);

// const queryId = document.querySelectorAll("#queryid")
// console.log(queryId);

// //querySelectorAll => con este llamamos a todos

//manipulacion de los nodos

//innerText => forma de acceder al texto visible dentro de un elemento

// const h1Elementos = document.getElementById("hElementos");

// h1Elementos.innerText = "elementos en Js";
// console.log(h1Elementos)


// //innerHTML => lo utilizamos para obtener o crear contenido HTML dentro de un elemento. 
// //innerHTML incluye a todas etiquetas HTML

// const contenedorSection = document.getElementById("contenedorSection")

// contenedorSection.innerHTML = ` 
//                                 <div>
//                                     <h1>card1</h1>
//                                     <p>parrafo en mi contenedor</p>
//                                 </div>
//                                 `

// //createElement => es el metodo con el cual nosotros podemos crear 
// //nuevos NODOS osea digamos nuevas etiquetas.
// //HTML en el dom

// const crearElemento = document.getElementById("crearElemento");

// const parrafo = document.createElement("p");

// parrafo.innerText = "creamos un parrafo desde Js";
// parrafo.className = "claseJs"

// //appendChild=> es el metodo que utilizamos para agregar un nodo como hijo
// //a A UNA ETIQUETA(nodo) YA EXISTENTE

// crearElemento.appendChild(parrafo);

// //CLASSLIST => es un objeto que nos va a permitir, agregar quitar, 
// //alterar clases en CSS.

// const parrafoList = document.getElementById("parrafoList");


// //va a agregar una clase al elemento
// parrafoList.classList.add("pepito");

// //remover una clase 
// parrafoList.classList.remove("pepito");

// //ayuda a alternar entre clases

// parrafoList.classList.toggle("pepito")

const links = [
    {text: "inicio", url: "../index.html"},
    {text: "elementos", url: "./elementos.html"},
    {text: "componentes", url: "./componentes.html"}
]

const navBar = document.getElementById("navBar")

links.forEach(link =>{
    const ancla = document.createElement('a');
    ancla.textContent = link.text;
    ancla.href = link.url;
    navBar.appendChild(ancla);
})


//cards

//definimos la clase producto
class Producto{
    constructor(id,nombre,description,imagen,precio){
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.imagen = imagen;
        this.precio = precio;
    }

}

//array de objetos de productos

const productosArray =[
    new Producto("1","arroz","gallo","url",1500),
    new Producto("2","azucar","ledesma","url",2500),
    new Producto("3","aceite","patito","url",3500),
    new Producto("4","jabon","chuavechito","url",2500),
]

//llamamos a nuestro nodos desde html
const contenedorProductos = document.getElementById("productos-container");

//ahora vamos a crear una funcion que itere y cree una nueva card

function agregarCards(productos){
    productos.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                            <h2>${producto.nombre}</h2>
                            <img src="${producto.imagen}" alt="">
                            <p>${producto.description}</p>
                            <p>precio: $ ${producto.precio}</p>
                            `
    contenedorProductos.appendChild(card);
    })
}

agregarCards(productosArray);