
// Importar las funciones del administrador de tareas
import {
    createTask,
    getTaskStats,
    toggleTask,
    deleteTask
} from './taskManager.js';

// Elementos principales de la aplicación
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const pendingCount = document.getElementById('pending-count');
const completedCount = document.getElementById('completed-count');
const totalCount = document.getElementById('total-count');

// Almacenamiento temporal de tareas
let tasks = [];

// Evitar que el contenido de una tarea se interprete como HTML
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

// Actualizar estadísticas
function updateStats() {
    const stats = getTaskStats(tasks);

    pendingCount.textContent = stats.pending;
    completedCount.textContent = stats.completed;
    totalCount.textContent = stats.total;
}

// Mostrar las tareas en pantalla
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML =
            '<p class="empty-message">No tienes tareas todavía.</p>';
    }

    tasks.forEach(task => {
        const taskElement = document.createElement('div');

        taskElement.className = task.completed
            ? 'task-item completed'
            : 'task-item';

        taskElement.innerHTML = `
            <span class="task-title">${escapeHTML(task.title)}</span>

            <div class="task-actions">
                <button data-action="toggle" data-id="${task.id}">
                    ${task.completed ? 'Deshacer' : 'Completar'}
                </button>

                <button class="delete-btn"
                    data-action="delete" data-id="${task.id}">
                    Eliminar
                </button>
            </div>
        `;

        taskList.appendChild(taskElement);
    });

    updateStats();
}

// Agregar una tarea
taskForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = taskInput.value.trim();

    if (!title) {
        return;
    }

    tasks.push(createTask(title));

    taskInput.value = '';

    renderTasks();
});

// Completar o eliminar tareas
taskList.addEventListener('click', event => {
    const button = event.target.closest('button[data-action]');

    if (!button) {
        return;
    }

    const taskId = button.dataset.id;
    const action = button.dataset.action;

    if (action === 'toggle') {
        tasks = toggleTask(tasks, taskId);
    }

    if (action === 'delete') {
        tasks = deleteTask(tasks, taskId);
    }

    renderTasks();
});

// Mostrar estado inicial
renderTasks();
