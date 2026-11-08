# TaskFlow - Proyecto CI/CD

## 1. Descripción del proyecto

TaskFlow es una aplicación web para la gestión de tareas, desarrollada con JavaScript, HTML y CSS. El proyecto tiene como propósito implementar un flujo de integración continua y entrega continua (CI/CD) utilizando GitHub Actions y GitHub Pages.

## 2. Objetivos

- Desarrollar una aplicación web funcional para administrar tareas.
- Implementar pruebas unitarias automatizadas con Vitest.
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
| Vitest 5 | Framework de pruebas unitarias. |
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
│   ├── taskManager.js
│   ├── taskManager.test.js
│   └── app.js
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

### Resultados de validación

Se implementaron siete pruebas unitarias para verificar:

1. Creación correcta de tareas.
2. Cálculo de estadísticas.
3. Cambio del estado de una tarea.
4. Eliminación de tareas.
5. Reversión del estado de una tarea completada.
6. Intento de eliminación de una tarea inexistente.
7. Intento de cambiar el estado de una tarea inexistente.

Resultados obtenidos:

| Métrica | Resultado |
|---|---:|
| Archivos de prueba aprobados | 1/1 |
| Pruebas aprobadas | 7/7 |
| Pruebas fallidas | 0 |
| Statements | 100% |
| Branches | 100% |
| Functions | 100% |
| Lines | 100% |

**Nota:** El 100% de cobertura corresponde al módulo `taskManager.js`, instrumentado por Vitest, y no representa necesariamente la cobertura de toda la aplicación.

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
7. Publicar la aplicación en GitHub Pages.

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
- Alcanzar un 100% de cobertura en el módulo `taskManager.js`.
- Configurar un repositorio público en GitHub.
- Implementar un pipeline CI/CD mediante GitHub Actions.
- Automatizar las pruebas y la construcción de la aplicación.
- Publicar la aplicación mediante GitHub Pages.
- Validar localmente la instalación, las pruebas y la compilación.

## 13. Autor

**Gabriel-Read5**

Proyecto académico de implementación de CI/CD utilizando GitHub Actions.