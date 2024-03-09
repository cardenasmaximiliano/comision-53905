//nos traemos las url y las opciones para tener los juegos de la api
const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const opciones = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44be1a9a09msh911140abb95b0a0p107ab0jsnf3e26d7550b6',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

//funcion para obtener elementos del carrito.
 function obtenerElementosCarritoDesdeLocalStorage (){
    const elementosCarritoGuardados = localStorage.getItem('elementosCarrito');
    return elementosCarritoGuardados ? JSON.parse(elementosCarritoGuardados) : [];
 }
// funcion de guardar los elementos

function guardarElementosCarritoEnLocalStorage(){
   localStorage.setItem('elementosCarrito', JSON.stringify(elementosCarrito))
}


//creamos la funcion para cachar o obtener los juegos de la api

async function obtenerJuegos(){
    try {
        const respuesta = await fetch(url, opciones);
        const datos = await respuesta.json();
        const primerosDiezJuegos= datos.slice(0, 6);
        console.log(datos);
        
        //dentro del tray deberiamos aplicarle los precios de los juegos

        primerosDiezJuegos.forEach(juego =>{
            switch(juego.title){
                case 'Blade and Soul':
                    juego.precio = 10;
                    break;
                case 'Trove':
                    juego.precio = 50;
                    break;
               
                case 'ArcheAge':
                    juego.precio = 40;
                    break;
                   
                case 'Neverwinter':
                        juego.precio = 60;
                        break;
                case  'Guild Wars 2':
                        juego.precio = 70;
                        break;
                case  'Roblox':
                        juego.precio = 80;
                        break;
                default:
                    juego.precio = 0; //precio por defecto sea 0
                    break;
            }
        })


        return primerosDiezJuegos;
    } catch (error) {
        console.error(error);
    }
}

obtenerJuegos()

async function renderizarJuegos(){
    const contenedorJuegos = document.getElementById('contenedorJuegos');
    const datosJuegos = await obtenerJuegos();

    datosJuegos.forEach(juego => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';

         const titulo = document.createElement('h2');
         titulo.textContent = juego.title;

         const imagen = document.createElement('img');
         imagen.src = juego.thumbnail

         const descripcion = document.createElement('p');
         descripcion.textContent = juego.short_description;
         const precio = document.createElement('p');
         precio.textContent = `precio: $${juego.precio || 'gratis'}`;

         const botonComprar = document.createElement('button');
         botonComprar.textContent = 'comprar';
         botonComprar.addEventListener('click', () => agregarAlCarrito(juego))
    
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonComprar)
        
        contenedorJuegos.appendChild(tarjeta);
    
        });
}

// elementos del carrito y total

const elementosCarrito = obtenerElementosCarritoDesdeLocalStorage();
let totalCarrito = 0;

//funcion apra agregar juegos al carrito

function agregarAlCarrito(juego){
    elementosCarrito.push(juego);
    if(juego.precio){
        totalCarrito += parseFloat(juego.precio)
    }
    guardarElementosCarritoEnLocalStorage();
    renderizarCarrito();
}

//funcion renderizado del producto
function renderizarCarrito(){
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarritoElemento = document.getElementById ('totalCarrito')
    listaCarrito.innerHTML = '';
    elementosCarrito.forEach(item =>{
        const elementoLista = document.createElement('li');
        elementoLista.textContent = item.title;
        listaCarrito.appendChild(elementoLista);
    })
    totalCarritoElemento.textContent = totalCarrito.toFixed(2);
}


renderizarJuegos();