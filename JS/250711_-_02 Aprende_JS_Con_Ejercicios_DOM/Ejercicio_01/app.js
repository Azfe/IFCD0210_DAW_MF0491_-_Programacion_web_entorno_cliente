// Declaración de variables
const btnGuardar = document.getElementById('btn-task'),
    list = document.getElementById('list'),
    inputTask = document.getElementById('task');

// Declaración de array
let tasks = [{
    id: 1,
    title: 'First task'
}];

// Obtiene las tareas
const getTasks = () => {
    if(tasks.length){
        list.innerHTML = ``; // Limpia la lista
        tasks.forEach(elemento => {
            const li = document.createElement('li');
            li.innerHTML = `<p>${elemento.title}</p>
            <button id="delete-task" data-id="${elemento.id}" class="delete-task">Eliminar</button>`;
            li.classList.add('items'); // Añade la clase items de estilos css al elemento li
            list.appendChild(li); // Añade elemento hijo li a elemento padre lista
        }); 
    }else list.innerHTML = `<h4>No hay tareas pendientes</h4>` 
}

// Guardar tarea
const saveTask = () => {
    const task = {
        id: new Date().getTime(),
        title: inputTask.value
    }

    tasks.push(task);
    inputTask.value = "";
    getTasks();
}

// Eliminar tarea
const deleteTask = (id) => {
    console.log(id);
    let newTasks = [];
    newTasks = tasks.filter(elemento => parseInt(elemento.id) !== parseInt(id));
    console.log(newTasks);
    tasks = newTasks;
    getTasks();
}

// Eventos
document.addEventListener('DOMContentLoaded', (e) => getTasks());
document.addEventListener('click', (e) => {
    if(e.target === btnGuardar) saveTask();
    if(e.target.matches('#delete-task')) deleteTask(e.target.dataset.id);
});

// Añadir tarea al pulsar Enter
inputTask.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && inputTask.value.trim() !== '') {
        saveTask();
    }
});