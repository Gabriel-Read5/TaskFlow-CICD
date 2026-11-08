
# TaskFlow - Proyecto CI/CD

## 1. Descripción del proyecto

TaskFlow es una aplicación web para la gestión de tareas, desarrollada con JavaScript, HTML y CSS. El proyecto tiene como propósito implementar un flujo de integración continua y entrega continua (CI/CD) utilizando GitHub Actions y GitHub Pages.

## 2. Objetivos

- Desarrollar una aplicación web funcional para administrar tareas.
- Implementar pruebas unitarias y de integración automatizadas con Vitest.
- Medir la cobertura del código.
- Configurar un pipeline CI/CD con GitHub Actions.
- Automatizar la construcción de la aplicación.
- Publicar la aplicación mediante GitHub Pages.

## 3. Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| HTML5 | Estructura de la aplicación. |
| CSS3 | Diseño y estilos. |
| JavaScript | Lógica de programación. |
| Node.js 24 LTS | Entorno de ejecución. |
| npm | Administración de dependencias. |
| Vite 7 | Herramienta de construcción. |
| Vitest 5 | Framework de pruebas automatizadas. |
| jsdom | Simulación del entorno del navegador para las pruebas de integración. |
| Git y GitHub | Control de versiones y repositorio. |
| GitHub Actions | Automatización del pipeline CI/CD. |
| GitHub Pages | Publicación de la aplicación. |

## 4. Funcionalidades

La aplicación permite:

- Crear nuevas tareas.
- Consultar las tareas registradas.
- Marcar tareas como completadas.
- Deshacer el estado de una tarea completada.
- Eliminar tareas.
- Consultar estadísticas de tareas pendientes, completadas y totales.

## 5. Estructura del proyecto

```text
TaskFlow-CICD/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── src/
│   ├── app.js
│   ├── app.test.js
│   ├── taskManager.js
│   ├── taskManager.test.js
│   └── style.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
├── README.md
├── PIPELINE.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
└── INFORME_IMPLEMENTACION.md
```

## 6. Instalación y configuración

Requisitos:

- Node.js 24 LTS.
- npm.
- Git.

Clonar el repositorio:

```bash
git clone https://github.com/Gabriel-Read5/TaskFlow-CICD.git
cd TaskFlow-CICD
```

Instalar dependencias:

```bash
npm ci
```

## 7. Ejecución local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite proporcionará una dirección local para acceder a la aplicación desde el navegador.

## 8. Pruebas automatizadas

Ejecutar las pruebas:

```bash
npm run test
```

Ejecutar las pruebas con cobertura:

```bash
npx vitest run --coverage
```

### 8.1. Pruebas unitarias

Se implementaron siete pruebas unitarias para verificar las funciones del administrador de tareas:

1. Creación correcta de tareas.
2. Cálculo de estadísticas.
3. Cambio del estado de una tarea.
4. Eliminación de tareas.
5. Reversión del estado de una tarea completada.
6. Intento de eliminación de una tarea inexistente.
7. Intento de cambiar el estado de una tarea inexistente.

### 8.2. Pruebas de integración

Se implementaron ocho pruebas de integración utilizando Vitest y jsdom para comprobar el funcionamiento de la aplicación y su interacción con el DOM:

1. Renderizado inicial de la lista y las estadísticas.
2. Agregar una tarea mediante el formulario.
3. Actualización de las estadísticas al agregar una tarea.
4. Completar y deshacer una tarea desde la interfaz.
5. Eliminar una tarea desde la interfaz.
6. Rechazar tareas con contenido vacío o espacios.
7. Mostrar de forma segura el contenido introducido por el usuario.
8. Ignorar clics que no correspondan a botones de acción.

### 8.3. Resultados de validación

Las pruebas automatizadas obtuvieron los siguientes resultados:

| Métrica | Resultado |
|---|---:|
| Archivos de prueba aprobados | 2/2 |
| Pruebas unitarias | 7/7 |
| Pruebas de integración | 8/8 |
| Total de pruebas aprobadas | 15/15 |
| Pruebas fallidas | 0 |

### 8.4. Cobertura del código

Se utilizó el proveedor V8 de `@vitest/coverage-v8` para medir la cobertura del código.

Resultados obtenidos:

| Archivo | Statements | Branches | Functions | Lines |
|---|---:|---:|---:|---:|
| app.js | 100% | 100% | 100% | 100% |
| taskManager.js | 100% | 100% | 100% | 100% |
| **Total** | **100%** | **100%** | **100%** | **100%** |

La cobertura del 100% corresponde a los dos archivos de código instrumentados por Vitest: `app.js` y `taskManager.js`.

## 9. Construcción de producción

Para generar la versión de producción:

```bash
npm run build
```

La herramienta Vite genera los archivos optimizados dentro del directorio `dist/`.

La compilación local se completó satisfactoriamente utilizando Node.js 24.22.0.

## 10. Pipeline CI/CD

El proyecto utiliza GitHub Actions para automatizar los siguientes procesos:

1. Obtener el código del repositorio.
2. Configurar Node.js 24.
3. Instalar las dependencias.
4. Ejecutar las pruebas automatizadas.
5. Generar el reporte de cobertura.
6. Construir la aplicación con Vite.
7. Preparar los archivos para su publicación.
8. Publicar la aplicación en GitHub Pages.

El pipeline se ejecuta mediante eventos `push` y `pull_request` dirigidos a la rama `main`.

## 11. Enlaces del proyecto

**Repositorio GitHub:**

https://github.com/Gabriel-Read5/TaskFlow-CICD

**Aplicación publicada:**

https://gabriel-read5.github.io/TaskFlow-CICD/

## 12. Resultados obtenidos

Durante la implementación se consiguió:

- Desarrollar una aplicación web funcional.
- Implementar siete pruebas unitarias automatizadas.
- Implementar ocho pruebas de integración.
- Alcanzar 15 pruebas automatizadas aprobadas.
- Obtener un 100% de cobertura en statements, branches, functions y lines para los archivos instrumentados.
- Configurar un repositorio público en GitHub.
- Implementar un pipeline CI/CD mediante GitHub Actions.
- Automatizar las pruebas y la construcción de la aplicación.
- Publicar la aplicación mediante GitHub Pages.
- Validar localmente la instalación, las pruebas, la cobertura y la compilación.

## 13. Autor

**Gabriel-Read5**

Proyecto académico de implementación de CI/CD utilizando GitHub Actions.