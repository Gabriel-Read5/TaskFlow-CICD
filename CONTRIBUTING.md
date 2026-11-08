# Guía de contribución – TaskFlow

## 1. Introducción

Gracias por tu interés en contribuir al proyecto TaskFlow.

Este documento establece las pautas y procedimientos que deben seguir los colaboradores para realizar modificaciones, corregir errores o proponer nuevas funcionalidades.

El objetivo es mantener una estructura organizada, asegurar la calidad del código y facilitar el trabajo colaborativo.

## 2. Requisitos previos

Antes de contribuir al proyecto, se recomienda contar con las siguientes herramientas:

- Git instalado.
- Node.js 24.
- npm.
- Visual Studio Code u otro editor de código.
- Una cuenta de GitHub.
- Conocimientos básicos de HTML, CSS y JavaScript.

## 3. Obtener el proyecto

Clona el repositorio utilizando:

```bash
git clone https://github.com/Gabriel-Read5/TaskFlow-CICD.git
```

Accede al directorio:

```bash
cd TaskFlow-CICD
```

Instala las dependencias:

```bash
npm ci
```

Este comando utiliza el archivo `package-lock.json` para instalar las versiones de dependencias definidas para el proyecto.

## 4. Crear una rama de trabajo

Antes de realizar modificaciones, crea una nueva rama:

```bash
git checkout -b feature/nueva-funcionalidad
```

Se recomienda utilizar nombres descriptivos para identificar el propósito de cada cambio.

Ejemplos:

- `feature/agregar-filtros`
- `fix/corregir-estadisticas`
- `docs/actualizar-readme`

Esto permite mantener organizados los cambios y facilita su revisión antes de incorporarlos a la rama principal.

## 5. Estándares de desarrollo

Para mantener la calidad del código, se recomienda:

- Utilizar nombres descriptivos para variables y funciones.
- Mantener una estructura organizada.
- Evitar la duplicación innecesaria de código.
- Separar la lógica de negocio de la interfaz.
- Documentar las funciones cuando sea necesario.
- Mantener la compatibilidad con las tecnologías utilizadas en el proyecto.
- Evitar incorporar dependencias innecesarias.
- Comprobar que las modificaciones no afecten las funcionalidades existentes.

## 6. Pruebas antes de contribuir

Antes de enviar cambios, ejecuta las pruebas automatizadas:

```bash
npm run test
```

Para comprobar la cobertura:

```bash
npx vitest run --coverage
```

Actualmente, el proyecto cuenta con **15 pruebas automatizadas**, distribuidas de la siguiente manera:

- 7 pruebas unitarias en `src/taskManager.test.js`.
- 8 pruebas de integración en `src/app.test.js`.

Las pruebas unitarias verifican las operaciones principales del administrador de tareas, mientras que las pruebas de integración comprueban la interacción entre la interfaz y la lógica de la aplicación.

Durante la validación local se obtuvieron los siguientes resultados:

- 15 pruebas aprobadas.
- 0 pruebas fallidas.
- 100% de cobertura de statements.
- 100% de cobertura de branches.
- 100% de cobertura de functions.
- 100% de cobertura de lines.

Estos porcentajes corresponden a los módulos `app.js` y `taskManager.js`, según el informe de cobertura generado por Vitest.

También verifica que la aplicación pueda construirse correctamente:

```bash
npm run build
```

Todos estos procesos deben finalizar sin errores antes de proponer la integración de los cambios.

## 7. Registrar los cambios

Agrega los archivos modificados:

```bash
git add .
```

Crea un commit con un mensaje descriptivo:

```bash
git commit -m "Add new task management functionality"
```

Se recomienda utilizar mensajes breves que expliquen claramente el propósito de los cambios.

Ejemplos:

- `Add task filtering functionality`
- `Fix task statistics calculation`
- `Update project documentation`
- `Improve integration test coverage`

## 8. Publicar los cambios

Envía la rama al repositorio remoto:

```bash
git push origin feature/nueva-funcionalidad
```

Después, crea un Pull Request en GitHub dirigido a la rama `main`.

El Pull Request debe incluir una descripción de los cambios realizados y, cuando corresponda, los resultados de las pruebas ejecutadas.

## 9. Revisión e integración

Los cambios propuestos deben revisarse antes de incorporarse a la rama principal.

El pipeline de GitHub Actions ejecutará automáticamente las pruebas y la construcción de la aplicación para validar las modificaciones.

Los cambios que presenten errores deberán corregirse antes de su integración.

Una vez aprobados, los cambios podrán incorporarse a `main`, permitiendo que el proceso CI/CD realice las tareas correspondientes.

## 10. Reporte de errores

Si encuentras un problema, proporciona:

- Una descripción clara del error.
- Los pasos necesarios para reproducirlo.
- El resultado esperado.
- El resultado obtenido.
- Capturas de pantalla cuando sean útiles.

Los reportes deben incluir suficiente información para facilitar la identificación y solución del problema.

## 11. Propuestas de mejoras

Las nuevas funcionalidades pueden proponerse mediante Issues de GitHub, explicando su utilidad y el comportamiento esperado.

Se recomienda describir el problema que se desea resolver y cómo la mejora propuesta podría beneficiar al proyecto.

Repositorio:

https://github.com/Gabriel-Read5/TaskFlow-CICD

## 12. Agradecimientos

Toda contribución que ayude a mejorar TaskFlow es bienvenida.

Gracias por colaborar con el desarrollo y mantenimiento del proyecto.