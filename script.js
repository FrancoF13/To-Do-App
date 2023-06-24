const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Botones de modo día y modo noche
const dayModeButton = document.getElementById('day-mode-button');
const nightModeButton = document.getElementById('night-mode-button');
const navbar = document.getElementById('navbar');

dayModeButton.addEventListener('click', function() {
  document.body.classList.remove('night-mode');
  navbar.classList.remove('night-mode');
});

nightModeButton.addEventListener('click', function() {
  document.body.classList.add('night-mode');
  navbar.classList.add('night-mode');
});


// Sonidos
const startSound = new Audio('styles/sounds/audio-comienzo.mp3');
const finishSound = new Audio('styles/sounds/audio-final.mp3');
const deleteSound = new Audio('styles/sounds/audio-borrar.mp3');

let timerInterval; // Variable para almacenar el intervalo del temporizador
let timeLeft = 0; // Variable para almacenar el tiempo restante del temporizador
let isPaused = false; // Variable para controlar si el temporizador está pausado

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
    event.preventDefault();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTask(listItem);
      playSound(deleteSound);
    });

    const timerContainer = document.createElement('div');
    timerContainer.classList.add('timer-container');

    const timerSpan = document.createElement('span');
    timerSpan.classList.add('task-timer');
    timerContainer.appendChild(timerSpan);

    const startButton = createButton('Start', function () {
      startTimer(timerSpan);
      playSound(startSound);
    });
    timerContainer.appendChild(startButton);

    const pauseButton = createButton('Pause', function () {
      pauseTimer();
    });
    timerContainer.appendChild(pauseButton);

    const resumeButton = createButton('Resume', function () {
      resumeTimer();
      playSound(startSound);
    });
    timerContainer.appendChild(resumeButton);

    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);
    listItem.appendChild(timerContainer);
    taskList.appendChild(listItem);

    taskInput.value = '';
  }
}

function deleteTask(listItem) {
  taskList.removeChild(listItem);
}

function startTimer(timerSpan) {
  clearInterval(timerInterval); // Limpiar el intervalo anterior

  timeLeft = 25 * 60; // 25 minutos

  timerInterval = setInterval(() => {
    if (isPaused) return; // Si el temporizador está pausado, no hacer nada

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerSpan.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerSpan.textContent = 'Time is up!';
      timerSpan.classList.add('completed');
      playSound(finishSound);
    }

    timeLeft--;

    // Actualizar el temporizador cada segundo
    if (timeLeft < 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  isPaused = false;
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function createButton(text, clickHandler) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  button.classList.add('task-button');
  return button;
}
