# Informe de implementación del proyecto TaskFlow
## Implementación de un pipeline CI/CD con GitHub Actions

**Proyecto:** TaskFlow – Aplicación web de gestión de tareas  
**Estudiante:** Gabriel Read / 2024-2521 
**Repositorio:** https://github.com/Gabriel-Read5/TaskFlow-CICD  
**Tecnologías:** HTML, CSS, JavaScript, Vite, Vitest y GitHub Actions.

---

## 1. Introducción

El presente informe describe el desarrollo e implementación de TaskFlow, una aplicación web diseñada para gestionar tareas de manera sencilla y organizada. El proyecto se desarrolló con el objetivo de aplicar los conceptos de integración continua y entrega continua (CI/CD), utilizando GitHub Actions como herramienta principal para automatizar las pruebas, la construcción y el despliegue de la aplicación.

La implementación permite comprender cómo un proyecto de software puede incorporar procesos automatizados para mejorar la calidad del código, reducir errores y facilitar la publicación de nuevas versiones.

Además del desarrollo de la aplicación, se preparó una estructura de pruebas automatizadas y documentación técnica para explicar el funcionamiento del proyecto.

## 2. Objetivos del proyecto

### 2.1 Objetivo general

Desarrollar una aplicación web funcional e implementar un pipeline CI/CD mediante GitHub Actions que permita automatizar las pruebas, la construcción y el despliegue de la aplicación.

### 2.2 Objetivos específicos

- Desarrollar una aplicación web para administrar tareas.
- Organizar el código mediante módulos JavaScript.
- Implementar pruebas unitarias utilizando Vitest.
- Generar reportes de cobertura de código.
- Configurar un workflow de GitHub Actions.
- Automatizar la construcción de la aplicación.
- Publicar la aplicación utilizando GitHub Pages.
- Documentar los procedimientos de desarrollo y despliegue.

## 3. Tecnologías y herramientas utilizadas

Para desarrollar el proyecto se utilizaron las siguientes herramientas:

| Herramienta | Función |
|---|---|
| HTML5 | Estructura de la aplicación. |
| CSS3 | Diseño visual y adaptación de la interfaz. |
| JavaScript | Lógica y funcionalidades de TaskFlow. |
| Node.js | Entorno de ejecución de JavaScript. |
| npm | Administración de dependencias. |
| Vite | Herramienta de desarrollo y construcción. |
| Vitest | Ejecución de pruebas automatizadas. |
| jsdom | Simulación de un entorno DOM para pruebas. |
| Git | Control de versiones. |
| GitHub | Alojamiento del repositorio. |
| GitHub Actions | Automatización del pipeline CI/CD. |
| GitHub Pages | Publicación de la aplicación web. |

## 4. Desarrollo de la aplicación

TaskFlow se desarrolló como una aplicación web que permite administrar tareas desde una interfaz sencilla.

Entre sus funcionalidades principales se encuentran:

- Crear nuevas tareas.
- Visualizar las tareas registradas.
- Marcar tareas como completadas.
- Cambiar el estado de una tarea.
- Eliminar tareas.
- Consultar estadísticas de tareas pendientes, completadas y totales.

La estructura del proyecto separa la lógica de administración de tareas de la interfaz gráfica.

El módulo `taskManager.js` contiene las funciones principales para crear, consultar, completar y eliminar tareas. Por otro lado, `app.js` se encarga de conectar estas funciones con los elementos de la interfaz.

Esta separación facilita el mantenimiento del código y permite probar la lógica de manera independiente.

## 5. Implementación de pruebas automatizadas

Para verificar el funcionamiento de la lógica de la aplicación se utilizó Vitest.

Se implementaron pruebas unitarias para comprobar diferentes operaciones del administrador de tareas, incluyendo:

- Creación de tareas.
- Cálculo de estadísticas.
- Cambio del estado de una tarea.
- Eliminación de tareas.
- Reversión del estado de una tarea completada.
- Eliminación de identificadores inexistentes.

También se configuró la generación de reportes de cobertura mediante `@vitest/coverage-v8`.

Los comandos utilizados son:

```bash
npm run test
```

Para ejecutar las pruebas con cobertura:

```bash
npx vitest run --coverage
```

La ejecución de estas pruebas permite detectar errores en la lógica antes de integrar los cambios al proyecto.

## 6. Configuración del pipeline CI/CD

La automatización se implementó mediante un archivo denominado `ci-cd.yml`, ubicado en:

`.github/workflows/ci-cd.yml`

El pipeline se ejecuta cuando se realizan cambios mediante `push` en la rama `main` o cuando se crea un Pull Request dirigido a dicha rama.

El workflow está compuesto por dos trabajos principales.

### 6.1 Build and Test

Este trabajo se encarga de preparar y validar el proyecto.

Sus pasos son:

1. Obtener el código fuente del repositorio mediante GitHub Actions.
2. Configurar Node.js.
3. Instalar las dependencias utilizando `npm ci`.
4. Ejecutar las pruebas automatizadas y generar el reporte de cobertura.
5. Construir la aplicación mediante `npm run build`.
6. Subir la carpeta `dist` como artefacto para el despliegue.

### 6.2 Deploy to GitHub Pages

Este segundo trabajo se ejecuta después de que el proceso de construcción y pruebas haya finalizado correctamente.

Su responsabilidad es publicar la versión construida de TaskFlow en GitHub Pages.

El despliegue está condicionado a que el evento sea un `push` realizado sobre la rama `main`. Por esta razón, los Pull Requests permiten validar los cambios sin publicar automáticamente una nueva versión.

Esta separación permite mantener un proceso controlado de integración y publicación.

## 7. Control de versiones

Git se utilizó para administrar los cambios realizados durante el desarrollo.

El repositorio se alojó en GitHub, lo que permitió almacenar el código fuente, mantener el historial de modificaciones y ejecutar automáticamente los workflows.

La rama principal utilizada fue `main`.

Los cambios se registraron mediante commits y se enviaron al repositorio remoto utilizando Git.

Repositorio:

https://github.com/Gabriel-Read5/TaskFlow-CICD

## 8. Despliegue de la aplicación

Para publicar TaskFlow se utilizó GitHub Pages con GitHub Actions como fuente de despliegue.

Primero se configuró GitHub Pages desde los ajustes del repositorio. Posteriormente, el pipeline se encargó de generar la versión de producción y publicarla automáticamente.

La aplicación quedó disponible públicamente en la siguiente dirección:

https://gabriel-read5.github.io/TaskFlow-CICD/

El despliegue exitoso permitió comprobar que la aplicación podía accederse desde un navegador después de completar el proceso automatizado.

## 9. Resultados obtenidos

Durante la implementación se lograron los siguientes resultados:

- Se desarrolló una aplicación web funcional para la gestión de tareas.
- Se organizó la lógica de negocio en módulos independientes.
- Se incorporaron pruebas unitarias mediante Vitest.
- Se configuró la generación de reportes de cobertura.
- Se creó un pipeline CI/CD mediante GitHub Actions.
- Se automatizaron las etapas de instalación, pruebas y construcción.
- Se configuró la publicación automática mediante GitHub Pages.
- Se verificó una ejecución exitosa del workflow.
- Se publicó una versión funcional de TaskFlow en internet.
- Se preparó documentación para explicar el desarrollo, la contribución y el despliegue.

La ejecución exitosa del pipeline y la disponibilidad de la aplicación publicada demuestran que la integración entre GitHub Actions y GitHub Pages funciona correctamente.

## 10. Dificultades y soluciones

Durante el desarrollo se presentaron algunos detalles técnicos que requirieron ajustes.

Uno de ellos estuvo relacionado con la ubicación del archivo `index.html`. Inicialmente, la estructura del proyecto no coincidía con la ubicación esperada por Vite, lo que impedía realizar correctamente la construcción de la aplicación.

La solución consistió en colocar `index.html` en el directorio raíz del proyecto y actualizar las referencias a los archivos CSS y JavaScript.

También se identificó una advertencia relacionada con la versión local de Node.js y los requisitos de algunas dependencias. Para mantener una configuración compatible con el pipeline, se estableció Node.js 24 en GitHub Actions.

Estas correcciones permitieron continuar con las pruebas y el despliegue.

## 11. Conclusión

La implementación de TaskFlow permitió aplicar conocimientos de desarrollo web, control de versiones, pruebas automatizadas e integración continua.

La incorporación de GitHub Actions facilitó la automatización de las tareas necesarias para validar y construir la aplicación, mientras que GitHub Pages permitió publicar el resultado sin necesidad de realizar manualmente cada etapa del despliegue.

El proyecto demuestra la importancia de integrar prácticas DevOps en el desarrollo de software, especialmente cuando se busca mejorar la calidad, mantener un flujo de trabajo organizado y facilitar la entrega de nuevas versiones.

Finalmente, se cumplieron los objetivos principales mediante la creación de una aplicación funcional, la implementación de pruebas automatizadas, la configuración del pipeline CI/CD y la publicación de TaskFlow en un entorno accesible públicamente.