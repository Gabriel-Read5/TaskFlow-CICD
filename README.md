# TaskFlow – Aplicación de gestión de tareas

## 1. Descripción del proyecto

TaskFlow es una aplicación web desarrollada para facilitar la organización y administración de tareas personales. Permite agregar nuevas tareas, marcarlas como completadas, eliminarlas y visualizar estadísticas sobre su estado.

Este proyecto fue desarrollado como parte de una práctica académica de integración y entrega continua (CI/CD), utilizando GitHub Actions para automatizar las pruebas, la construcción y el despliegue de la aplicación.

## 2. Objetivos

- Desarrollar una aplicación web funcional para administrar tareas.
- Implementar pruebas unitarias automatizadas.
- Medir la cobertura del código.
- Configurar un pipeline CI/CD mediante GitHub Actions.
- Automatizar la construcción y publicación de la aplicación.
- Utilizar Git y GitHub para el control de versiones.

## 3. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| HTML5 | Estructura de la aplicación |
| CSS3 | Diseño y estilos visuales |
| JavaScript | Lógica de la aplicación |
| Node.js | Entorno de ejecución |
| Vite | Servidor de desarrollo y construcción |
| Vitest | Pruebas automatizadas |
| jsdom | Entorno DOM para pruebas |
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| GitHub Actions | Automatización CI/CD |
| GitHub Pages | Publicación de la aplicación |

## 4. Funcionalidades

- Agregar tareas.
- Completar tareas.
- Deshacer tareas completadas.
- Eliminar tareas.
- Visualizar el número de tareas pendientes.
- Visualizar el número de tareas completadas.
- Consultar el total de tareas registradas.
- Interfaz adaptable a dispositivos móviles.

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
│   ├── style.css
│   ├── taskManager.js
│   └── taskManager.test.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 6. Instalación y ejecución

### Requisitos previos

- Node.js 24 LTS recomendado.
- npm.
- Git.
- Visual Studio Code u otro editor de código.

### Clonar el repositorio

```bash
git clone https://github.com/Gabriel-Read5/TaskFlow-CICD.git
```

### Entrar en el directorio

```bash
cd TaskFlow-CICD
```

### Instalar dependencias

```bash
npm ci
```

### Ejecutar la aplicación

```bash
npm run dev
```

Vite proporcionará una dirección local para acceder a la aplicación desde el navegador.

## 7. Pruebas automatizadas

El proyecto utiliza Vitest para verificar el funcionamiento de las funciones principales del administrador de tareas.

Para ejecutar las pruebas:

```bash
npm run test
```

Para ejecutar las pruebas con cobertura:

```bash
npx vitest run --coverage
```

Las pruebas verifican:

1. Creación de tareas.
2. Cálculo de estadísticas.
3. Cambio del estado de las tareas.
4. Eliminación de tareas.
5. Deshacer tareas completadas.
6. Comportamiento al intentar eliminar una tarea inexistente.

## 8. Integración y entrega continua (CI/CD)

El proyecto utiliza GitHub Actions mediante el archivo:

`.github/workflows/ci-cd.yml`

El pipeline se ejecuta automáticamente cuando se realizan cambios en la rama `main` o se crea un Pull Request dirigido a dicha rama.

El proceso incluye:

1. Obtener el código del repositorio.
2. Configurar Node.js.
3. Instalar las dependencias.
4. Ejecutar las pruebas automatizadas.
5. Generar el análisis de cobertura.
6. Construir la aplicación con Vite.
7. Preparar los archivos de producción.
8. Desplegar la aplicación en GitHub Pages cuando corresponde.

## 9. Despliegue

La aplicación está publicada mediante GitHub Pages.

**Enlace de acceso:**

https://gabriel-read5.github.io/TaskFlow-CICD/

**Repositorio:**

https://github.com/Gabriel-Read5/TaskFlow-CICD

## 10. Resultados obtenidos

Durante la implementación se consiguió:

- Desarrollar una aplicación web funcional.
- Implementar seis pruebas unitarias automatizadas.
- Configurar Vitest para analizar la cobertura del código.
- Crear un repositorio público en GitHub.
- Configurar un pipeline automatizado con GitHub Actions.
- Construir la aplicación mediante Vite.
- Desplegar satisfactoriamente la aplicación en GitHub Pages.

## 11. Autor

**Gabriel-Read5**

Proyecto académico de implementación de CI/CD utilizando GitHub Actions.

