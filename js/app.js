/**
 * Ejercicios básicos
 */

let set_background_body_30segundos_timmer;
let list_add_elements_timmer = [];
let list_add_elements_typed = [];
let ejecutar_todo_funciones = [];


function background_body_aguamarina() {
    console.log('- Enunciado: Cambio de color de fondo de la página a tono azul aguamarina.');
    document.body.style.backgroundColor = "#9FD5D1";
}

function font_body_arial() {
    console.log('- Enunciado: La fuente de la letra del body deberá ser Arial.');
    document.body.style.fontFamily = "Arial";
}

function color_body_red() {
    console.log('- Enunciado: Color rojo de las letras en el body.');
    document.body.style.color = "red";
}

function border_body_3px() {
    console.log('- Enunciado: Los bordes deben de tener 3px solid con color rojo.');
    document.body.style.border = "3px solid red";
}

function background_body_30segundos() {
    let log = '- Enunciado: Una función qué haga cambiar el fondo de color cada 30 segundos. (Pista setInterval).';

    //comprobamos si ya hay un timmer y si es así lo cancelamos
    if (set_background_body_30segundos_timmer) {
        log += '\n- Ya hay un timmer. Cancelándolo.';
        clearInterval(set_background_body_30segundos_timmer);
    }

    log += '\n- Lanzamos el setInterval cada 30 segundos';
    set_background_body_30segundos_timmer = setInterval(set_background_body_30segundos, 30000);

    console.log(log + '\n- Lo ejecutamos la primera vez (para ver que cambia).');
    set_background_body_30segundos();
}
function set_background_body_30segundos() {

    //Generamos un color aleatorio (grupo de 6 dígitos hexadecimales)
    var digitos = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += digitos[Math.floor(Math.random() * 16)];
    }

    // Establecemos el fondo con una opacidad del 30% (50HEX)
    color += '50';
    document.body.style.backgroundColor = color;
    console.log('- setInterval: Cambio color fondo a: ' + color);
}


/**
 * Estructuras de nodos
 */

function body_firstChild_color() {
    console.log('- Enunciado: Utiliza el primer elemento del body y cambia el color de la letra a azul.');
    document.body.firstElementChild.style.color = "blue";
}

function list_iterate() {
    console.log('- Enunciado: Entrar en el elemento lista y recorrer los objetos mostrando cada elemento iterando.');

    // Seleccionamos todos los elementos de la lista ordenada
    let li = document.querySelectorAll('ol > li');

    //establecemos un tiempo para disparar los eventos
    let time = 0;

    // Recorremos los li
    for (let item of li) {

        // ponemos el fondo gris
        setTimeout(() => {
            console.log('\n- Resaltando el elemento de la lista: ' + item.innerHTML);
            item.classList.toggle('background-grey');
        }, time);

        //sumamos medio segundo
        time += 350;

        // Quitamos el fondo gris
        setTimeout(() => {
            item.classList.toggle('background-grey');
        }, time);

        //sumamos medio segundo
        time += 350;
    }
}

function list_add_elements() {
    console.log('- Enunciado: Añadir a la lista elementos 4, 5 y 6.');

    // Seleccionamos la lista ordenada
    let ol = document.querySelectorAll('ol')[0];

    //establecemos un tiempo para disparar los eventos
    let time = 0;

    // Añadimos los elementos
    let elementos = [4, 5, 6];
    for (let item of elementos) {

        if (list_add_elements_typed[item] | list_add_elements_timmer[item]) {
            console.log('\n- Ya está creado el elemento object ' + item);
        } else {
            list_add_elements_timmer[item] = setTimeout(() => {
                console.log('\n-Añadiendo a la lista: object ' + item);
                ol.innerHTML += '<li id="object_' + item + '"></li>';
                list_add_elements_typed[item] = new Typed('#object_' + item, {
                    strings: ['object ' + item],
                    typeSpeed: 30,
                });
            }, time);

            //sumamos medio segundo
            time += 500;
        }

    }
}

function table_title_random() {
    console.log('- Enunciado: Seleccionando el Id de la tabla, iterar y cambiar los campos de los nombres por un número random de 0 a 100.');

    // Cogemos la tabla por id
    let tabla = document.getElementById('tabla');
    // Cogemos todas las celdas de la segunda fila
    let celdas = tabla.getElementsByTagName('tr')[1].querySelectorAll('td');
    let time = 0;

    celdas.forEach((celda, index) => {
        // Generamos un aleatorio entre 0 y 100
        let random = Math.floor(Math.random() * 101);

        console.log('- Celda a cambiar (' + index + '): ' + celda.innerHTML
            + '\n- Nuevo valor: ' + random);

        setTimeout(() => {
            celda.innerHTML = '';
            let typed = new Typed(celda, {
                strings: [String(random)],
                typeSpeed: 30,
            });
        }, time);


        //sumamos medio segundo
        time += 150;
    });
}

function querySelector_link_bgGreen() {
    console.log('Enunciado: Utilizar QuerySelector para elegir la clase de los enlaces y cambiar el fondo a verde.');

    let enlaces = document.querySelectorAll('.enlaces > a');

    for (let enlace of enlaces) {
        enlace.style.backgroundColor = "#77e077";
    }

}


function ejecutar_todo() {

    // Cogemos todos los elementos del panel
    let funciones = document.querySelectorAll('.panel.derecha li');

    let time = 0;

    // Recorremos las funciones
    funciones.forEach((item, index) => {
        // Excluimos la primera opción (es esta misma)
        if (index > 0) {
            
            // Obtenemos el valor de onclick para llamar a la función
            let funcion = item.getAttribute('onclick');
            
            // Quitamos los 2 últimos caracteres ()
            funcion = funcion.substring(0, funcion.length - 2);
            
            //tiempo por defecto entre ejecuciones
            let time_wait=1000;
            
            // Modificamos el tiempo según función
            switch( funcion ) {
                case 'list_iterate':
                    time_wait = 2500;
                    break;
                case 'list_add_elements':
                    time_wait = 2000;
                    break;
            }
            
            // Lanzamos cuando le corresponda (1 segundo de diferencia)
            setTimeout(function a(){
                item.classList.add('active');
                window[funcion]();
            }, time);
    
            // Quitamos el resalte de la actividad a los 950ms desde que se lanzó
            setTimeout(function a(){
                item.classList.remove('active');
            }, time+time_wait);
        
            //sumamos lo que corresponda
            time += time_wait;

        }
    });


}

/**
 * Funcionalidad
 */

// Mostrar / ocultar los enunciados
window.addEventListener("load", function () {

    // Recorremos todos los paneles
    let panels = document.querySelectorAll(".panel");
    for (let item of panels) {

        // Asignamos evento click a los legend
        item.querySelector(".panel_ocultar").addEventListener("click", function () {

            // Toggle class
            item.classList.toggle('panel_hidden');

            // Reajustamos los tamaños de los paneles
            reajustar_paneles();

        });
    }

    // Reajustamos márgenes y tamaños de paneles
    reajustar_paneles();
});
window.addEventListener("resize", reajustar_paneles);

function reajustar_paneles() {

    let panel_derecha = document.querySelectorAll(".derecha")[0];
    let panel_abajo = document.querySelectorAll(".abajo")[0];
    let scroll_panel_derecha = false;

    //comprobamos si hay barras de scrool
    if( panel_derecha.scrollHeight > panel_derecha.clientHeight ) {
        scroll_panel_derecha = true;
    }

    // Panel lateral
    if (panel_derecha.classList.contains('panel_hidden')) {
        document.body.style.marginRight = '26px';
        panel_abajo.style.right = '0px';
   
    } else {
        panel_abajo.style.right = '';
    }

    // Margin right del body (para salvar el panel lateral)
    // Calculamos el ancho del panel derecho
    let panel_derecha_width = window.getComputedStyle(panel_derecha).width;
    console.log('derecha_width: ' + panel_derecha_width);
    panel_derecha_width = Number( panel_derecha_width.substring(0, panel_derecha_width.length - 2) );

    if( scroll_panel_derecha ) {
        // Incrementamos 15px que es el tamaño de la barra de scroll
        panel_derecha_width += 15;
    }
    
    // Actualizamos el margen derecho (8px es el margen de body por defecto)
    document.body.style.marginRight = panel_derecha_width + 8 + 'px';

    // Panel consola
    if (panel_abajo.classList.contains('panel_hidden')) {
        document.body.style.marginBottom = "18px";
    } else {
        document.body.style.marginBottom = '';
    }

}


// Actualiamos la consola
if (typeof console != "undefined")
    if (typeof console.log != 'undefined')
        console.mytemp = console.log;
    else
        console.mytemp = function () { };

console.log = function (message) {
    console.mytemp(message);

    let scroll = document.querySelector('#console_log');

    // Insertamos la hora
    let date = new Date;

    // Insertamos el log
    scroll.innerHTML += '<li><span class="date">'
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '</span>'
        + '<pre>' + message + '</pre></li>';

    //hacemos scrool hasta el final siempre
    scroll.scroll({
        top: scroll.scrollHeight,
        behavior: 'smooth'
    });


};
console.error = console.debug = console.info = console.log