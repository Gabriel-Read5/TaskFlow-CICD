# Documentación del Pipeline CI/CD – TaskFlow

## 1. Introducción

El proyecto TaskFlow implementa un proceso de integración y entrega continua (CI/CD) utilizando GitHub Actions.

El objetivo del pipeline es automatizar las actividades de validación, pruebas, construcción y despliegue de la aplicación web, reduciendo la intervención manual y facilitando la detección temprana de errores.

La configuración se encuentra en:

`.github/workflows/ci-cd.yml`

## 2. Herramienta utilizada

**GitHub Actions** es la herramienta seleccionada para automatizar el flujo CI/CD.

Permite ejecutar instrucciones definidas en un archivo YAML cada vez que ocurre un evento determinado dentro del repositorio.

En TaskFlow se utiliza para ejecutar pruebas, generar cobertura, construir la aplicación y publicarla mediante GitHub Pages.

## 3. Eventos que activan el pipeline

El flujo se ejecuta ante dos eventos:

- `push`: cuando se publican cambios en la rama `main`.
- `pull_request`: cuando se crea o actualiza una solicitud de integración dirigida a `main`.

Esto permite validar los cambios antes de incorporarlos a la rama principal.

## 4. Etapas del pipeline

### 4.1. Checkout del repositorio

Se utiliza la acción:

`actions/checkout@v4`

Esta etapa obtiene el código fuente del repositorio para que GitHub Actions pueda trabajar con él.

### 4.2. Configuración de Node.js

Se utiliza:

`actions/setup-node@v4`

Se configura Node.js 24 para proporcionar el entorno necesario para ejecutar las herramientas del proyecto.

También se habilita la caché de npm para optimizar la instalación de dependencias.

### 4.3. Instalación de dependencias

Se ejecuta:

```bash
npm ci
```

Este comando instala las dependencias utilizando el archivo `package-lock.json`, manteniendo versiones consistentes entre las ejecuciones.

### 4.4. Ejecución de pruebas automatizadas

Se ejecuta:

```bash
npm run test -- --coverage
```

Vitest ejecuta las pruebas unitarias y genera un informe de cobertura utilizando el proveedor V8.

Se implementaron siete pruebas para verificar:

1. Creación correcta de tareas.
2. Cálculo de estadísticas.
3. Cambio del estado de una tarea.
4. Eliminación de tareas.
5. Reversión del estado de tareas completadas.
6. Intento de eliminación de una tarea inexistente.
7. Intento de cambiar el estado de una tarea inexistente.

En la validación local se obtuvieron los siguientes resultados:

| Métrica | Resultado |
|---|---:|
| Pruebas aprobadas | 7 de 7 |
| Pruebas fallidas | 0 |
| Statements | 100% |
| Branches | 100% |
| Functions | 100% |
| Lines | 100% |

El porcentaje de cobertura corresponde al módulo `taskManager.js`, que fue el archivo instrumentado por Vitest.

### 4.5. Construcción de la aplicación

Se ejecuta:

```bash
npm run build
```

Vite genera una versión optimizada de la aplicación para producción.

Los archivos resultantes se almacenan en la carpeta `dist`.

### 4.6. Preparación del artefacto

Se utiliza:

`actions/upload-pages-artifact@v3`

Esta acción almacena los archivos generados en `dist` para que puedan utilizarse en el proceso de despliegue.

### 4.7. Despliegue

El segundo trabajo utiliza:

`actions/deploy-pages@v4`

Esta etapa publica la aplicación en GitHub Pages.

El despliegue depende de que el trabajo `build-and-test` finalice correctamente y solamente se ejecuta cuando el evento corresponde a un `push` en la rama `main`.

## 5. Dependencias entre trabajos

El pipeline está dividido en dos trabajos principales:

**Build and Test**

- Obtiene el código.
- Configura Node.js 24.
- Instala dependencias.
- Ejecuta pruebas y cobertura.
- Construye la aplicación.
- Prepara el artefacto.

**Deploy to GitHub Pages**

- Espera la finalización satisfactoria de Build and Test.
- Recibe los archivos preparados.
- Publica la aplicación.

La dependencia se establece mediante:

```yaml
needs: build-and-test
```

## 6. Permisos de GitHub Actions

El pipeline utiliza permisos específicos para realizar las operaciones necesarias.

- `contents: read`: permite acceder al contenido del repositorio.
- `pages: write`: permite publicar en GitHub Pages.
- `id-token: write`: permite generar el token de identidad requerido para el despliegue.

## 7. Flujo de ejecución

El funcionamiento general puede representarse de la siguiente manera:

```text
Desarrollador realiza cambios
            |
            v
      Git Push a main
            |
            v
     GitHub Actions
            |
            v
     Checkout del código
            |
            v
      Configurar Node.js 24
            |
            v
     Instalar dependencias
            |
            v
     Ejecutar 7 pruebas
            |
            v
     Generar cobertura
            |
            v
    Construir con Vite
            |
            v
     Preparar artefacto
            |
            v
    ¿Push a la rama main?
            |
       Sí   |   No
        |       |
        v       v
     Desplegar  Finalizar
        |
        v
    GitHub Pages
        |
        v
 Aplicación publicada
```

## 8. Verificación del pipeline

La ejecución del pipeline puede consultarse desde la pestaña Actions del repositorio.

En esta sección se pueden revisar:

- Estado de cada ejecución.
- Trabajos completados.
- Pasos ejecutados.
- Mensajes de error.
- Duración de las ejecuciones.

Una ejecución satisfactoria se identifica mediante el indicador verde de GitHub Actions.

Repositorio:

https://github.com/Gabriel-Read5/TaskFlow-CICD

Históricamente se verificaron ejecuciones exitosas del workflow. Las nuevas modificaciones deberán validarse mediante una ejecución adicional después de enviarlas al repositorio.

## 9. Resultados

La implementación permitió automatizar las pruebas, la construcción y el despliegue de TaskFlow.

Durante las validaciones locales se consiguieron los siguientes resultados:

- Siete pruebas unitarias aprobadas.
- Cero pruebas fallidas.
- 100% de cobertura en el módulo `taskManager.js`.
- Instalación correcta de las dependencias mediante `npm ci`.
- Compilación de producción exitosa mediante Vite.
- Ejecución local satisfactoria de la aplicación.

El proceso facilita la validación de cambios y permite mantener una versión publicada de la aplicación mediante GitHub Pages.

## 10. Conclusión

La implementación del pipeline CI/CD permitió aplicar conceptos de automatización y control de calidad dentro del desarrollo de software.

La integración de GitHub Actions, Vitest, Vite y GitHub Pages proporciona un flujo organizado que reduce las tareas manuales y facilita la publicación de nuevas versiones de la aplicación.

La incorporación de siete pruebas unitarias y los resultados de cobertura obtenidos fortalecen la validación de la lógica principal de TaskFlow.

Además, la utilización de Node.js 24 permite mantener el entorno local alineado con la versión configurada en el pipeline.