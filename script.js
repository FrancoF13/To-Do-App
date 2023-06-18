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

//Funcion para Iniciar el temporizador del Pomodoro
function startTimer() {
  const listItem = this.parentNode;
  const timerSpan = listItem.querySelector('.taskTimer');
  const timerButton = listItem.querySelector(button);
  timerButton.disable = true; 

  let timeLeft = 25 * 60; //25 minutos

const timerInterval = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft% 60;
  timerSpan.textContent = `${minutes}:${seconds.toString().padStrart(2, '0')}`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timerSpan.textContent = 'time is up!';
    timerSpan.classList.add('completed');
    timerButton.disable = false;
  }

    timerleft --;
  },100);
}
// Agregar evento de clic al botón de agregar tarea
addButton.addEventListener('click', addTask);

//Evento Para agregar una tarea al presionar la tecla "Enter"
taskInput,addEventListener('Keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});