// const btnUno = document.getElementById('btnUno');

// btnUno.addEventListener('click', ()=>{
//     Swal.fire({
//         title: "coderhouse",
//         text: "aprende haciendo",
//         imageUrl: "../lista-de-verificacion.png",
//         confirmButtonText:"aceptar"


//     })
// })

// const btnDos = document.getElementById("btnDos");
// btnDos.addEventListener("click", ()=>{
//     const Toast = Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.onmouseenter = Swal.stopTimer;
//           toast.onmouseleave = Swal.resumeTimer;
//         }
//       });
//       Toast.fire({
//         imageUrl: "../lista-de-verificacion.png",
//         title: "producto comprado"
//       });
// })



// Swal.bindClickHandler();
// /* Bind a mixin to a click handler */
// Swal.mixin({
//   toast: true
// }).bindClickHandler("data-swal-toast-template");


// const tostify = document.getElementById('tostify');

// tostify.addEventListener('click',()=>{
//     Toastify({
//         text: "producto agregado al carrito",
//         duration: 2000,
//         position: "right",
//         gravity: "top",
//         style:{
//             background: "red"
//         }

//     }).showToast();
// });

/** finanzas **/


// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['aprobados', 'desaprobados', 'revisar'],
//     datasets: [{
//       label: 'alumnos',
//       data: [90,10,14],
//       borderWidth: 1,
//       backgroundColor: 'red',
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
// var cleave = new Cleave('.input-phone', {
//     phone: true,
//     phoneRegionCode: '{country}',
//   })


//   let granimInstance = new Granim({
//     element: '#canvas-basic',
//     direction: 'left-right',
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#ff9966', '#ff5e62'],
//                 ['#00F260', '#0575E6'],
//                 ['#e1eec3', '#f05053']
//             ]
//         }
//     }
// });


// new TypeIt("#simpleUsage", {
//     strings: "hola chicos",
//     speed: 50,
//     waitUntilVisible: true,
// }).go();

const DateTime = luxon.DateTime;

const navidad = DateTime.local(2014, 12,24, 12, 1);
console.log(navidad)