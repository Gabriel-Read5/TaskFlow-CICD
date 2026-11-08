# Guía de despliegue – TaskFlow

## 1. Introducción

Este documento describe el procedimiento utilizado para desplegar la aplicación web TaskFlow mediante GitHub Pages y GitHub Actions.

El proceso permite automatizar la construcción y publicación de la aplicación cada vez que se realizan cambios en la rama principal del repositorio.

## 2. Requisitos

Para trabajar con el despliegue se necesita:

- Una cuenta de GitHub.
- Un repositorio que contenga el proyecto TaskFlow.
- Node.js 24.
- npm.
- Git.
- Un archivo de configuración de GitHub Actions.

## 3. Configuración de GitHub Pages

Para habilitar GitHub Pages:

1. Acceder al repositorio en GitHub.
2. Entrar en la sección **Settings**.
3. Seleccionar **Pages** en el menú lateral.
4. En la opción **Build and deployment**, seleccionar **GitHub Actions** como fuente de publicación.

Esta configuración permite que el workflow controle automáticamente el despliegue.

## 4. Construcción de la aplicación

Vite se utiliza para generar una versión optimizada de TaskFlow.

Para ejecutar la construcción localmente:

```bash
npm run build
```

El proceso genera una carpeta llamada `dist`, que contiene los archivos preparados para producción.

## 5. Ejecución del pipeline

El workflow se encuentra en:

`.github/workflows/ci-cd.yml`

Cuando se realiza un `push` a la rama `main`, GitHub Actions ejecuta las siguientes etapas:

1. Descarga el código del repositorio.
2. Configura Node.js.
3. Instala las dependencias mediante `npm ci`.
4. Ejecuta las pruebas automatizadas y genera el reporte de cobertura.
5. Construye la aplicación con Vite.
6. Sube los archivos generados como artefacto.
7. Publica la aplicación utilizando GitHub Pages.

Los eventos de Pull Request también ejecutan las pruebas y la construcción, pero no realizan el despliegue.

## 6. Verificación del despliegue

Para comprobar que el despliegue se realizó correctamente:

1. Acceder a la pestaña **Actions** del repositorio.
2. Seleccionar la ejecución más reciente del workflow.
3. Verificar que los trabajos de construcción, pruebas y despliegue hayan finalizado correctamente.
4. Abrir la dirección pública de GitHub Pages.

**Repositorio:**

https://github.com/Gabriel-Read5/TaskFlow-CICD

**Aplicación publicada:**

https://gabriel-read5.github.io/TaskFlow-CICD/

## 7. Actualización de la aplicación

Para publicar una nueva versión:

1. Realizar los cambios necesarios en el código.
2. Ejecutar las pruebas localmente.
3. Comprobar que la aplicación se construye correctamente.
4. Registrar los cambios mediante Git.
5. Enviar los cambios a la rama `main`.

Ejemplo:

```bash
git add .
git commit -m "Update TaskFlow application"
git push origin main
```

GitHub Actions detectará el cambio y ejecutará nuevamente el pipeline.

## 8. Solución de problemas

Si el despliegue presenta errores, se recomienda:

- Revisar los registros de ejecución en GitHub Actions.
- Comprobar que las dependencias estén correctamente instaladas.
- Verificar que las pruebas automatizadas finalicen sin errores.
- Confirmar que la carpeta `dist` se haya generado.
- Revisar que GitHub Pages esté configurado para utilizar GitHub Actions.
- Comprobar que el workflow tenga los permisos necesarios para publicar.

## 9. Seguridad y permisos

El workflow utiliza permisos específicos para limitar el acceso:

- `contents: read`: permite consultar el contenido del repositorio.
- `pages: write`: permite publicar el sitio en GitHub Pages.
- `id-token: write`: permite generar el token de identidad necesario para el despliegue.

La separación de permisos ayuda a mantener un proceso de publicación controlado.

## 10. Conclusión

La implementación de GitHub Pages junto con GitHub Actions permite automatizar la publicación de TaskFlow, reduciendo los pasos manuales y facilitando la entrega continua de nuevas versiones.

Este procedimiento demuestra cómo integrar herramientas de CI/CD en un proyecto web utilizando un flujo de trabajo automatizado.