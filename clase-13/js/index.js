//
const productos =[

    {id: 1, nombre: "producto1", imagen: "./assets/lista.png", precio: 2000 },
    {id: 2, nombre: "producto2", imagen: "https://placehold.co/600x400", precio: 1000 },
    {id: 3, nombre: "producto3", imagen: "https://placehold.co/600x400", precio: 1500 }

]

let cantidadItemsCarrito = 0;

//

let carrito = JSON.parse(localStorage.getItem('carrito') )|| [];

//funcion contador

function actualizarIconoCarrito(){
    const iconoCarrito = document.getElementById('cantidad-items');
    if(iconoCarrito){
        iconoCarrito.textContent = cantidadItemsCarrito;
    }
}

//funcion para mostrar los productos

function mostrarItemsCarrito(){
    const contenedorItemsCarrito = document.getElementById('items-carrito');
    contenedorItemsCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.textContent = producto.nombre;
    });
    contenedorItemsCarrito.appendChild(item);
}

//funcion para las tarjetas

function crearTarjetaProducto(){
    const contenedor = document.getElementById('contenedor-productos');


    productos.forEach(producto =>{
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-producto');


        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.classList.add('imagen-producto');
        tarjeta.appendChild(imagen);
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        nombre.classList.add('nombre-producto');
        tarjeta.appendChild(nombre);

        const precio = document.createElement('p');
        precio.textContent = producto.precio;
        precio.classList.add('precio-producto');
        tarjeta.appendChild(precio);

        const botonCompra = document.createElement('button');
        botonCompra.textContent = 'agregar producto';
        botonCompra.classList.add('boton-compra');
        botonCompra.addEventListener('click',()=>{
            carrito.push(producto); //agregamos el producto al carrito :D
            localStorage.setItem('carrito', JSON.stringify(carrito));
            cantidadItemsCarrito++;
            actualizarIconoCarrito();
            mostrarItemsCarrito();
        })

        tarjeta.appendChild(botonCompra)

        contenedor.appendChild(tarjeta);

    })
}

//llamamos a las funciones

crearTarjetaProducto();

actualizarIconoCarrito();

mostrarItemsCarrito();