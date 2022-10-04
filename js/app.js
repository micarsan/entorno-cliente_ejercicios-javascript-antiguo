/**
 * Ejercicios básicos
 */

let set_background_body_30segundos_timmer;

function background_body_aguamarina() {
    console.log('Enunciado: Cambio de color de fondo de la página a tono azul aguamarina.');
    document.body.style.backgroundColor="#9FD5D1";
}

function font_body_arial() {
    console.log('Enunciado: La fuente de la letra del body deberá ser Arial.');
    document.body.style.fontFamily="Arial";
}

function color_body_red() {
    console.log('Enunciado: Color rojo de las letras en el body.');
    document.body.style.color="red";
}

function border_body_3px() {
    console.log('Enunciado: Los bordes deben de tener 3px solid con color rojo.');
    document.body.style.border="3px solid red";
}

function background_body_30segundos() {
    console.log('Enunciado: Una función qué haga cambiar el fondo de color cada 30 segundos. (Pista setInterval).');
    
    console.log('Lo ejecutamos la primera vez (para ver que cambia).');
    set_background_body_30segundos();
    
    //comprobamos si ya hay un timmer y si es así lo cancelamos
    if( set_background_body_30segundos_timmer ) {
        console.log('Ya hay un timmer. Cancelándolo.');
        clearInterval(set_background_body_30segundos_timmer);
    }
    
    console.log('Lanzamos el setInterval cada 30 segundos');
    set_background_body_30segundos_timmer = setInterval(set_background_body_30segundos, 30000);
}
function set_background_body_30segundos() {

    //Generamos un color aleatorio (grupo de 6 dígitos hexadecimales)
    var digitos = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += digitos[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor=color;
}


/**
 * Estructuras de nodos
 */

 function body_firstChild_color() {
    console.log('Enunciado: Utiliza el primer elemento del body y cambia el color de la letra a azul.');
    document.body.firstChild.style.color="blue";
}

function list_iterate() {
    console.log('Enunciado: Entrar en el elemento lista y recorrer los objetos mostrando cada elemento iterando.');    
    let li = document.querySelectorAll('ol > li');
    for( item of li ) {
        console.log('Elemento: ' + item.innerHTML);
        item.style.backgroundColor="red";
    }
}

function list_add_elements() {
    console.log('Enunciado: Añadir a la lista elementos 4, 5 y 6.');
    
}

function table_title_random() {
    console.log('Enunciado: Seleccionando el Id de la tabla, iterar y cambiar los campos de los nombres por un número random de 0 a 100.');
    
}

function querySelector_link_bgGreen() {
    console.log('Enunciado: Utilizar QuerySelector para elegir la clase de los enlaces y cambiar el fondo a verde.');
    
}


/**
 * Funcionalidad
 */

// Mostrar / ocultar los enunciados
window.addEventListener("load", function() {

    let fielsets = document.querySelectorAll("fieldset");
    for ( let item of fielsets ) {
        item.querySelector("legend").addEventListener("click", function() {
            this.parentElement.querySelector("ul").classList.toggle('display-none');
        });
    }
    


/*
    document.querySelectorAll("fieldset legend").addEventListener("click", function(e){
        e.backgroundColor = 'red';
    });
*/
});


// Actualiamos la consola
if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.mytemp = console.log;
    else
        console.mytemp = function() {};

console.log = function(message) {
    console.mytemp(message);

    let scroll = document.querySelector('#console_log');
    
    // Insertamos la hora
    let date = new Date;
//    scroll.innerHTML += '<span class="date">'
//        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '</span>'

    // Insertamos el log
    scroll.innerHTML +=  '<li><span class="date">'
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '</span>'
        + '<p>' + message + '</p></li>';
    
    //hacemos scrool hasta el final siempre
    scroll.scroll({
        top:scroll.scrollHeight,
        behavior: 'smooth'
    });

    
};
console.error = console.debug = console.info =  console.log