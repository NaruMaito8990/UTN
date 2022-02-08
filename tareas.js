function guardar(){
        var boton = document.getElementById('grabar');
        boton.addEventListener('click', nuevaTarea);
        mostrarTareas();

}


function nuevaTarea(){
    var clave = document.getElementById('id').value;
    var tarea = document.getElementById('tarea').value;
    var urgencia = document.getElementById('urgencia').value;
    var fecha = document.getElementById('fecha').value;

    var valores = [tarea, urgencia, fecha];

    localStorage.setItem(clave, valores);
    mostrarTareas();



}


function mostrarTareas() {
    var  caja = document.getElementById('mostrar-tareas');

    for (var i=0; i < localStorage.length; i++){
        var id = localStorage.key(i);
        var valor= localStorage.getItem(id);
        var valorArray = valor.split(",");
            console.log(valorArray[0]);
        caja.innerHTML += 
        '<p class="titulo-tarea">'+id+ ' - Fecha: '+ valorArray[2] +
        '</p><p>'+'<span class="mostrar-urgencia">' + 'Urgencia: '+ valorArray[1]+ '</span>' + '</p><p>' + 
        valorArray[0] + '</p>' + 
        '<p><a href="#" class="borrar-tarea" onclick="borrar(\''+id+'\')">Completado!</a></p>';
    }

}
function borrar(clave) {
    localStorage.removeItem(clave);
    alert('tarea completa!')
    location.reload();


}

function borrarTodo() {
    localStorage.clear();
    alert('Borraste todo')
    location.reload();

}
window.addEventListener('load', guardar);

