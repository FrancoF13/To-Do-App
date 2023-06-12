// Obtener elementos del DOM
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Función para agregar una tarea
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
}

// Función para eliminar una tarea
function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}

// Agregar evento de clic al botón de agregar tarea
addButton.addEventListener('click', addTask);