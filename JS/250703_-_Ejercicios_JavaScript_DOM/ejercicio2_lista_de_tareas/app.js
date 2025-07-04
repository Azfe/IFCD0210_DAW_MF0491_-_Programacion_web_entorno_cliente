// Ejercicio 2: Lista de Tareas
// Autor: Alejandro Zapata
// Descripción: Este script permite agregar tareas a una lista, marcarlas como completadas y eliminarlas.

// Seleccionar elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const infoMessage = document.getElementById('infoMessage');

// Función para agregar una nueva tarea
function addNewTask() {
    // Obtener el valor del input y eliminar espacios en blanco
    const taskText = taskInput.value.trim();

    // Verificar que el campo de texto no esté vacío
    if (taskText === '') {
        infoMessage.style.display = 'block';        
        infoMessage.textContent = 'Por favor, ingresa una tarea válida';

        // Mostrar el mensaje durante 3 segundos
        setTimeout(() => {
            infoMessage.style.display = 'none';
        }, 3000);
        return;
    }

    // Crear elemento de lista (li)
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    // Crear span para el texto de la tarea
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text';
    taskSpan.textContent = taskText;

    // Crear botón para eliminar la tarea
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'X';

    // Agregar evento al botón de eliminar
    deleteBtn.addEventListener('click', () => {
        // Eliminar el elemento de la lista
        setTimeout(() => {
            taskList.removeChild(listItem);
        }, 200);
    });

    // Agregar elementos al item de lista
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Agregar el item de la lista al taskList
    taskList.appendChild(listItem);

    // Limpiar el campo de entrada
    taskInput.value = '';

    // Enfocar nuevamente el input para facilitar la entrada de nuevas tareas
    taskInput.focus();
}

// Agregar evento al botón de añadir tarea
addTaskBtn.addEventListener('click', addNewTask);

// Agregar evento para permitir añadir tarea con Enter
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addNewTask();
    }
});