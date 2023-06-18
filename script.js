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

    const timerSpan = document.createElement('span');
    timerSpan.classList.add(task-timer);

    const timerButton = document.createElement('button');
    timerButton.textContent = 'Start Timer';
    timerButton.addEventListener('click', startTimer);

    listItem.appendChild(deleteButton);
    listItem.appendChild(timerSpan);
    listItem.appendChild(timerButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
}

// Función para eliminar una tarea
function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}

//Funcion para Iniciar el temporizador Pomodoro
function

// Agregar evento de clic al botón de agregar tarea
addButton.addEventListener('click', addTask);