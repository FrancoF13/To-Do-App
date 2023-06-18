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

    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');

    const timerSpan = document.createElement('span');
    timerSpan.classList.add('task-timer');
    timerContainer.appendChild(timerSpan);

    const timerButton = document.createElement('button');
    timerButton.textContent = 'Start Timer';
    timerButton.addEventListener('click', function () {
      startTimer(timerSpan);
    });
    timerContainer.appendChild(timerButton);

    listItem.appendChild(deleteButton);
    listItem.appendChild(timerContainer);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
}

// Función para eliminar una tarea
function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}

// Función para iniciar el temporizador de Pomodoro
function startTimer(timerSpan) {
  let timeLeft = 25 * 60; // 25 minutos

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerSpan.textContent = 'Time is up!';
      timerSpan.classList.add('completed');
    }

    timeLeft--;

    // Actualizar el temporizador cada segundo
    if (timeLeft < 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Evento para agregar una tarea al hacer clic en el botón 
addButton.addEventListener('click', addTask);

// Evento para agregar una tarea al presionar la tecla "Enter" 
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
