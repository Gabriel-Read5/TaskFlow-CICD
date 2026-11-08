
import { describe, it, expect } from 'vitest';

import {
    createTask,
    getTaskStats,
    toggleTask,
    deleteTask
} from './taskManager.js';

describe('Pruebas del administrador de tareas', () => {

    // Prueba 1: Crear una tarea
    it('debe crear una tarea correctamente', () => {
        const task = createTask('Estudiar programación');

        expect(task.title).toBe('Estudiar programación');
        expect(task.completed).toBe(false);
        expect(task.id).toBeDefined();
    });

    // Prueba 2: Calcular estadísticas
    it('debe calcular correctamente las estadísticas', () => {
        const tasks = [
            { id: '1', title: 'Tarea 1', completed: false },
            { id: '2', title: 'Tarea 2', completed: true },
            { id: '3', title: 'Tarea 3', completed: false }
        ];

        const stats = getTaskStats(tasks);

        expect(stats.pending).toBe(2);
        expect(stats.completed).toBe(1);
        expect(stats.total).toBe(3);
    });

    // Prueba 3: Completar una tarea
    it('debe cambiar el estado de una tarea', () => {
        const tasks = [
            { id: '1', title: 'Estudiar', completed: false }
        ];

        const result = toggleTask(tasks, '1');

        expect(result[0].completed).toBe(true);
    });

    // Prueba 4: Eliminar una tarea
    it('debe eliminar una tarea correctamente', () => {
        const tasks = [
            { id: '1', title: 'Tarea 1', completed: false },
            { id: '2', title: 'Tarea 2', completed: false }
        ];

        const result = deleteTask(tasks, '1');

        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('2');
    });

    // Prueba 5: Deshacer una tarea completada
    it('debe permitir deshacer una tarea completada', () => {
        const tasks = [
            { id: '1', title: 'Estudiar', completed: true }
        ];

        const result = toggleTask(tasks, '1');

        expect(result[0].completed).toBe(false);
    });

    // Prueba 6: Intentar eliminar una tarea inexistente
    it('no debe modificar la lista si la tarea no existe', () => {
        const tasks = [
            { id: '1', title: 'Tarea 1', completed: false }
        ];

        const result = deleteTask(tasks, '999');

        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
    });

});
