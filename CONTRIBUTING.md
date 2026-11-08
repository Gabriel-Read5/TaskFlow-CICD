# Guía de contribución – TaskFlow

## 1. Introducción

Gracias por tu interés en contribuir al proyecto TaskFlow.

Este documento establece las pautas y procedimientos que deben seguir los colaboradores para realizar modificaciones, corregir errores o proponer nuevas funcionalidades.

El objetivo es mantener una estructura organizada y facilitar el trabajo colaborativo.

## 2. Requisitos previos

Antes de contribuir al proyecto, se recomienda contar con:

- Git instalado.
- Node.js 24 LTS.
- npm.
- Visual Studio Code u otro editor.
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

## 5. Estándares de desarrollo

Para mantener la calidad del código, se recomienda:

- Utilizar nombres descriptivos para variables y funciones.
- Mantener una estructura organizada.
- Evitar duplicación innecesaria de código.
- Separar la lógica de negocio de la interfaz.
- Documentar las funciones cuando sea necesario.
- Mantener la compatibilidad con las tecnologías utilizadas en el proyecto.

## 6. Pruebas antes de contribuir

Antes de enviar cambios, ejecuta las pruebas automatizadas:

```bash
npm run test
```

Para comprobar la cobertura:

```bash
npx vitest run --coverage
```

También verifica que la aplicación pueda construirse correctamente:

```bash
npm run build
```

Todos estos procesos deben finalizar sin errores.

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

## 8. Publicar los cambios

Envía la rama al repositorio remoto:

```bash
git push origin feature/nueva-funcionalidad
```

Después, crea un Pull Request en GitHub dirigido a la rama `main`.

## 9. Revisión e integración

Los cambios propuestos deben revisarse antes de incorporarse a la rama principal.

El pipeline de GitHub Actions ejecutará automáticamente las pruebas y la construcción de la aplicación para validar las modificaciones.

Los cambios que presenten errores deberán corregirse antes de su integración.

## 10. Reporte de errores

Si encuentras un problema, proporciona:

- Una descripción clara del error.
- Los pasos necesarios para reproducirlo.
- El resultado esperado.
- El resultado obtenido.
- Capturas de pantalla cuando sean útiles.

## 11. Propuestas de mejoras

Las nuevas funcionalidades pueden proponerse mediante Issues de GitHub, explicando su utilidad y el comportamiento esperado.

## 12. Agradecimientos

Toda contribución que ayude a mejorar TaskFlow es bienvenida.

Gracias por colaborar con el desarrollo y mantenimiento del proyecto.