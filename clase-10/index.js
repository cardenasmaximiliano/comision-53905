const btn = document.getElementById("btn");

//primera manera de ejecutar eventos

// addEventListener (evento, funcion que queremos que se ejecute)

btn.addEventListener('click', function(){
    alert('se esta ejecutando el evento')
})

const cambiarColor = document.getElementById("cambiarColor");

cambiarColor.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});

//segunda manera de ejecutar eventos

//la segunda manera que tenemos es a traves de los nodos.

const btnNodo = document.getElementById("btnNodo");

//el evento es click, on
btnNodo.onclick = function(){
    alert('se esta ejecutando el evento a traves de un nodo')
}


let menuBoton = document.getElementById("menuBoton");
let menu = document.getElementById('menu')

menuBoton.onclick = function(){
    menu.style.display= (menu.style.display === 'block')? 'none' : 'block';
};

//tercera manera de ejecutar eventos 

function jsEnHTML(){
    alert("este evento esta corriendo en HTML")
}


//eventos con raton => nos permite interactuar a traves del mouse con html

const caja = document.getElementById("caja");

//mouseover = se ejecuta cuanto estamos sobre elemento
caja.onmouseover = ()=>{
    console.log("ingreso el mouse")
}


//mouseout = se ejecuta cuando el mouse no esta sobre el elemento
caja.addEventListener('mouseout', function(){
    console.log("el mouse esta fuera")
})

//mousemove = va a detectar el movimiento del mouse sobre el elemento.

caja.onmouseover= () =>{
    console.log("pasaste el mouse por la caja")
}


let enlace = document.getElementById("enlace");

enlace.addEventListener('mousemove',function(){
    alert ('pasaste por encima campeon')
})


//mousedown y mouseup = oprimen y sueltan el boton
caja.onmousedown = function(){
    console.log("deja oprimido  el boton")}

caja.onmouseup= function(){
    console.log("suelta el mouse el mouse")
}

//eventos de teclado

//keydown y keyup => cuando se presiona una tecla y cuando se deja soltar

let campoTexto = document.getElementById('campoTexto');

campoTexto.onkeydown = ()=>{
    console.log('presionaste una tecla KD')
}
campoTexto.onkeyup = ()=>{
    console.log('soltaste una tecla KP')
}

const pizarrita = document.getElementById("pizarrita");
const contexto = pizarrita.getContext("2d");
let dibujando = false;

//evento mouse para dibujar

pizarrita.addEventListener('mousedown',function(event){
    dibujando = true;
    dibujar(event.pageX - pizarrita.offsetLeft, event.pageY - pizarrita.offsetTop);

});

pizarrita.addEventListener('mousemove',function(event){
    if(dibujando){
        dibujar(event.pageX - pizarrita.offsetLeft, event.pageY - pizarrita.offsetTop);

    }
})

pizarrita.addEventListener('mouseup',function(){
    dibujando = false
})

function dibujar (x, y){
    contexto.fillstyle= 'black';
    contexto.fillRect(x,y,5,5);
}

// document.addEventListener('keydown',function(event){
//     if(event.key ==="delete"){
//         contexto.clearRect(0,0, pizarrita.width, pizarrita.height)
//     }
// })


//change = evento que nos permite modificar valores

let seleccion = document.getElementById('seleccion');
let contenido = document.getElementById("contenido")

seleccion.addEventListener('change',function(){
    if(this.value === 'opcion1'){
        contenido.textContent = 'se selecciono la opcion1'
    } else if (this.value === "opcion2"){
        contenido.textContent =" se selecciono la opcion2"
    }



})



/// traer los diferentes inputs

let nombreInput = document.getElementById("nombre");
let apellidoInput = document.getElementById("apellido");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");

emailInput.addEventListener('input', function(){
    if(!this.validity.valid){
        emailError.style.display = 'block';
    } else{
        emailError.style.display = 'none';
    }
})

let registroForm = document.getElementById("registroForm");

registroForm.addEventListener ("submit", function(event){
    event.preventDefault(); //
    if(!nombreInput.validity.valid || !apellidoInput.validity.valid || !emailInput.validity.valid){
        if(!nombreInput.validity.valid){
            alert("ingresa tu nombre bien por favor")
        }
        if(!apellidoInput.validity.valid){
            alert("ingresa tu apellido bien por favor")
        }
        if(!emailInput.validity.valid){
            emailError.style.display = "block";
            alert("ingresa tu mail bien por favor")
        }
    }else{
        alert("registro aprobado")
    }
    
})
