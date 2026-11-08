
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Pruebas de integración de TaskFlow', () => {

    beforeEach(async () => {
        // Preparar el HTML necesario para ejecutar la aplicación
        document.body.innerHTML = `
            <main>
                <form id="task-form">
                    <input id="task-input" type="text">
                    <button type="submit">Agregar</button>
                </form>

                <div id="task-list"></div>

                <span id="pending-count">0</span>
                <span id="completed-count">0</span>
                <span id="total-count">0</span>
            </main>
        `;

        // Reiniciar el módulo para comenzar con una lista vacía
        vi.resetModules();

        // Cargar la aplicación después de preparar el HTML
        await import('./app.js');
    });

    // Prueba 1: Renderizado inicial
    it('debe mostrar la lista vacía y las estadísticas iniciales', () => {
        expect(
            document.querySelector('.empty-message')
        ).not.toBeNull();

        expect(
            document.getElementById('pending-count').textContent
        ).toBe('0');

        expect(
            document.getElementById('completed-count').textContent
        ).toBe('0');

        expect(
            document.getElementById('total-count').textContent
        ).toBe('0');
    });

    // Prueba 2: Agregar una tarea desde el formulario
    it('debe agregar una tarea y mostrarla en pantalla', () => {
        const input = document.getElementById('task-input');
        const form = document.getElementById('task-form');

        input.value = 'Estudiar programación';

        form.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        );

        expect(
            document.querySelector('.task-title').textContent
        ).toBe('Estudiar programación');

        expect(input.value).toBe('');
    });

    // Prueba 3: Actualizar las estadísticas
    it('debe actualizar las estadísticas al agregar una tarea', () => {
        const input = document.getElementById('task-input');
        const form = document.getElementById('task-form');

        input.value = 'Realizar proyecto';

        form.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        );

        expect(
            document.getElementById('pending-count').textContent
        ).toBe('1');

        expect(
            document.getElementById('completed-count').textContent
        ).toBe('0');

        expect(
            document.getElementById('total-count').textContent
        ).toBe('1');
    });

    // Prueba 4: Completar y deshacer una tarea
    it('debe completar y deshacer una tarea desde la interfaz', () => {
        const input = document.getElementById('task-input');
        const form = document.getElementById('task-form');

        input.value = 'Preparar presentación';

        form.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        );

        const taskList = document.getElementById('task-list');

        let toggleButton = taskList.querySelector(
            'button[data-action="toggle"]'
        );

        toggleButton.click();

        expect(
            taskList.querySelector('.task-item').classList.contains('completed')
        ).toBe(true);

        expect(
            document.getElementById('completed-count').textContent
        ).toBe('1');

        expect(
            document.getElementById('pending-count').textContent
        ).toBe('0');

        // Deshacer la tarea
        toggleButton = taskList.querySelector(
            'button[data-action="toggle"]'
        );

        toggleButton.click();

        expect(
            taskList.querySelector('.task-item').classList.contains('completed')
        ).toBe(false);

        expect(
            document.getElementById('pending-count').textContent
        ).toBe('1');

        expect(
            document.getElementById('completed-count').textContent
        ).toBe('0');
    });

    // Prueba 5: Eliminar una tarea
    it('debe eliminar una tarea desde la interfaz', () => {
        const input = document.getElementById('task-input');
        const form = document.getElementById('task-form');

        input.value = 'Tarea para eliminar';

        form.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        );

        const deleteButton = document.querySelector(
            'button[data-action="delete"]'
        );

        deleteButton.click();

        expect(
            document.querySelector('.task-item')
        ).toBeNull();

        expect(
            document.querySelector('.empty-message')
        ).not.toBeNull();

        expect(
            document.getElementById('total-count').textContent
        ).toBe('0');
    });

    // Prueba 6: Rechazar tareas vacías
    it('no debe agregar tareas cuando el campo está vacío', () => {
        const input = document.getElementById('task-input');
        const form = document.getElementById('task-form');

        input.value = '   ';

        form.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        );

        expect(
            document.querySelector('.task-item')
        ).toBeNull();

        expect(
            document.getElementById('total-count').textContent
        ).toBe('0');
    });

    // Prueba 7: Evitar interpretar HTML introducido como texto
    it('debe mostrar texto de forma segura y no ejecutar HTML', () => {
        const input = document.getElementById('task-input');
        const form = document.getElementById('task-form');

        const maliciousText = '<img src=x onerror=alert(1)>';

        input.value = maliciousText;

        form.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        );

        expect(
            document.querySelector('#task-list img')
        ).toBeNull();

        expect(
            document.querySelector('.task-title').textContent
        ).toBe(maliciousText);
    });

    // Prueba 8: Ignorar clics que no correspondan a botones de acción
    it('no debe modificar las tareas al hacer clic fuera de los botones', () => {
        const taskList = document.getElementById('task-list');

        taskList.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true
            })
        );

        expect(
            document.querySelector('.empty-message')
        ).not.toBeNull();

        expect(
            document.getElementById('total-count').textContent
        ).toBe('0');
    });

});
