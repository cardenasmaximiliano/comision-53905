// document.getElementById('loginFormulario').addEventListener('submit',function(e){
//     e.preventDefault();

//     let usuario = document.getElementById('usuario').value;
//     let password = document.getElementById('password').value;

//     //verificar las credenciales

//     if(usuario === 'usuario' && password === 'contraseña'){
//         localStorage.setItem('logCorrecto', true);

//         //esta linea de codigo lo que hace es redireccionarnos a otro HTML
//         window.location.href = 'sesion.html';
//     }else{
//         document.getElementById('mensajeLogin').innerText = 'No son correcto los datos'
//     }

// })
// // comprobar si el usuario contectado

// window.addEventListener('load', function(){
//     if(localStorage.getItem('logCorrecto')) {
//         window.location.href = 'sesion.html'; //redirigiendo a la pagina asignada
//     }
// })


//carrito de compras

// Datos de productos (simulados)
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 20 },
    { id: 3, nombre: 'Producto 3', precio: 30 },
  ];
  
  // Función para renderizar los productos en el DOM
  function renderizarProductos() {
    const contenedorProductos = document.getElementById('productosContainer');
    contenedorProductos.innerHTML = '';
  
    productos.forEach(producto => {
      const elementoProducto = document.createElement('div');
      
      elementoProducto.textContent = `${producto.nombre} - $${producto.precio}`;
      elementoProducto.addEventListener('click', () => agregarAlCarrito(producto));
      contenedorProductos.appendChild(elementoProducto);
    });
  }
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto) {
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    itemsCarrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
    renderizarCarrito();
  }
  
  // Función para renderizar los productos en el carrito
  function renderizarCarrito() {
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('items-carrito');
    listaCarrito.innerHTML = '';
  
    itemsCarrito.forEach(item => {
      const elementoCarrito = document.createElement('li');
      
      elementoCarrito.textContent = `${item.nombre} - $${item.precio}`;
      listaCarrito.appendChild(elementoCarrito);
    });
  }
  
  // Renderizar productos al cargar la página
  window.addEventListener('load', () => {
    renderizarProductos();
    renderizarCarrito();
  });
  