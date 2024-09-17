//Iniciar un arreglo para administrar tareas.
let tareas = [];

function menu(){
    return parseInt(prompt(
        `'Opciones Disponibles'

        1. Agregar Tarea
        2. Ver Tareas
        3. Marcar Tarea comocompletada
        4. Salir

        Elige una opción:`));
}

// función para manejar el flujo del programa

function iniciarprograma(){
    let continuar = true;
    while (continuar){
        let opcion = menu();
        switch(opcion){
            case 1:
                agregartarea();
                break;
            case 2:
                vertarea();
                break;
            case 3:
                marcartareacompletada();
                break;
            case 4:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opcion no válida. Intenta nuevamente.");
        }
    }
    alert("Programa Finalizado.");
}

// Agregar una tarea

function agregartarea(){
    let nombre = prompt("Ingresa el nombre de la tarea: ");
    if(nombre){
        // declarar un objeto para tarea
        let tarea = {
            nombre:nombre,
            completada:false
        };
        tareas.push(tarea);
        alert("Tarea agregada correctamente.");

    }else{
        alert("El nombre de la tarea no puede estar vacío.");
    }
}

// Ver todas las tareas

function vertarea(){

    if(tareas.length === 0){
        alert("No existen tareas asignadas.");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea,index)=>{
            mensaje += `${index+1}. ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"}] \n `
        });
        alert(mensaje);        
    }
}

// Cambiar estado de las tareas

function marcartareacompletada(){
    let numero = parseInt(prompt("Introduce el número de la tarea a completar: "));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(`La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada.`);
    }else{
        alert("Número de tarea no válido.");
    }
}