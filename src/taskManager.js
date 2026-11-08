
// Crear una nueva tarea
export function createTask(title) {
    return {
        id: Date.now().toString() + Math.random().toString(16).slice(2),
        title: title.trim(),
        completed: false
    };
}

// Calcular las estadísticas de las tareas
export function getTaskStats(tasks) {
    const completed = tasks.filter(task => task.completed).length;
    const pending = tasks.length - completed;

    return {
        pending,
        completed,
        total: tasks.length
    };
}

// Cambiar el estado de una tarea
export function toggleTask(tasks, taskId) {
    return tasks.map(task =>
        task.id === taskId
            ? { ...task, completed: !task.completed }
            : task
    );
}

// Eliminar una tarea
export function deleteTask(tasks, taskId) {
    return tasks.filter(task => task.id !== taskId);
}
