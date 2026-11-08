# Informe de implementaciÃ³n del proyecto TaskFlow
## ImplementaciÃ³n de un pipeline CI/CD con GitHub Actions

**Proyecto:** TaskFlow â€“ AplicaciÃ³n web de gestiÃ³n de tareas
**Estudiante:** Gabriel Read / 2024-2521
**Repositorio:** https://github.com/Gabriel-Read5/TaskFlow-CICD
**TecnologÃ­as:** HTML, CSS, JavaScript, Node.js, Vite, Vitest y GitHub Actions.

---

## 1. IntroducciÃ³n

El presente informe describe el desarrollo e implementaciÃ³n de TaskFlow, una aplicaciÃ³n web diseÃ±ada para gestionar tareas de manera sencilla y organizada. El proyecto se desarrollÃ³ con el objetivo de aplicar los conceptos de integraciÃ³n continua y entrega continua (CI/CD), utilizando GitHub Actions como herramienta principal para automatizar las pruebas, la construcciÃ³n y el despliegue de la aplicaciÃ³n.

La implementaciÃ³n permite comprender cÃ³mo un proyecto de software puede incorporar procesos automatizados para mejorar la calidad del cÃ³digo, reducir errores y facilitar la publicaciÃ³n de nuevas versiones.

AdemÃ¡s del desarrollo de la aplicaciÃ³n, se preparÃ³ una estructura de pruebas automatizadas y documentaciÃ³n tÃ©cnica para explicar el funcionamiento del proyecto.

## 2. Objetivos del proyecto

### 2.1 Objetivo general

Desarrollar una aplicaciÃ³n web funcional e implementar un pipeline CI/CD mediante GitHub Actions que permita automatizar las pruebas, la construcciÃ³n y el despliegue de la aplicaciÃ³n.

### 2.2 Objetivos especÃ­ficos

- Desarrollar una aplicaciÃ³n web para administrar tareas.
- Organizar el cÃ³digo mediante mÃ³dulos JavaScript.
- Implementar pruebas unitarias utilizando Vitest.
- Implementar pruebas de integraciÃ³n para verificar la interacciÃ³n de la interfaz.
- Generar reportes de cobertura de cÃ³digo.
- Configurar un workflow de GitHub Actions.
- Automatizar la construcciÃ³n de la aplicaciÃ³n.
- Publicar la aplicaciÃ³n utilizando GitHub Pages.
- Documentar los procedimientos de desarrollo y despliegue.

## 3. TecnologÃ­as y herramientas utilizadas

Para desarrollar el proyecto se utilizaron las siguientes herramientas:

| Herramienta | FunciÃ³n |
|---|---|
| HTML5 | Estructura de la aplicaciÃ³n. |
| CSS3 | DiseÃ±o visual y adaptaciÃ³n de la interfaz. |
| JavaScript | LÃ³gica y funcionalidades de TaskFlow. |
| Node.js 24.22.0 | Entorno de ejecuciÃ³n de JavaScript. |
| npm 11.19.1 | AdministraciÃ³n de dependencias. |
| Vite 7.3.7 | Herramienta de desarrollo y construcciÃ³n. |
| Vitest 5.1.0 | EjecuciÃ³n de pruebas automatizadas. |
| jsdom 27.4.0 | SimulaciÃ³n de un entorno DOM para pruebas. |
| @vitest/coverage-v8 5.1.0 | GeneraciÃ³n de reportes de cobertura. |
| Git | Control de versiones. |
| GitHub | Alojamiento del repositorio. |
| GitHub Actions | AutomatizaciÃ³n del pipeline CI/CD. |
| GitHub Pages | PublicaciÃ³n de la aplicaciÃ³n web. |

## 4. Desarrollo de la aplicaciÃ³n

TaskFlow se desarrollÃ³ como una aplicaciÃ³n web que permite administrar tareas desde una interfaz sencilla.

Entre sus funcionalidades principales se encuentran:

- Crear nuevas tareas.
- Visualizar las tareas registradas.
- Marcar tareas como completadas.
- Cambiar el estado de una tarea.
- Eliminar tareas.
- Consultar estadÃ­sticas de tareas pendientes, completadas y totales.

La estructura del proyecto separa la lÃ³gica de administraciÃ³n de tareas de la interfaz grÃ¡fica.

El mÃ³dulo `taskManager.js` contiene las funciones principales para crear, consultar, completar y eliminar tareas. Por otro lado, `app.js` se encarga de conectar estas funciones con los elementos de la interfaz.

Esta separaciÃ³n facilita el mantenimiento del cÃ³digo y permite probar la lÃ³gica de manera independiente, asÃ­ como verificar su integraciÃ³n con la interfaz de usuario.

## 5. ImplementaciÃ³n de pruebas automatizadas

Para verificar el funcionamiento de la aplicaciÃ³n se utilizÃ³ Vitest, un framework de pruebas para JavaScript.

Se implementaron dos conjuntos de pruebas: pruebas unitarias y pruebas de integraciÃ³n.

### 5.1 Pruebas unitarias

Se desarrollaron siete pruebas unitarias para comprobar diferentes operaciones del administrador de tareas:

1. CreaciÃ³n correcta de una tarea.
2. CÃ¡lculo de estadÃ­sticas de tareas pendientes, completadas y totales.
3. Cambio del estado de una tarea.
4. EliminaciÃ³n correcta de una tarea.
5. ReversiÃ³n del estado de una tarea completada.
6. Comportamiento al intentar eliminar una tarea inexistente.
7. Comportamiento al intentar cambiar el estado de una tarea cuyo identificador no existe.

Estas pruebas se encuentran en `src/taskManager.test.js` y permiten comprobar el comportamiento de las funciones principales del mÃ³dulo `taskManager.js`.

### 5.2 Pruebas de integraciÃ³n

TambiÃ©n se implementaron ocho pruebas de integraciÃ³n en `src/app.test.js`, utilizando Vitest y jsdom para simular el entorno del navegador.

Estas pruebas verifican:

1. Renderizado inicial de la interfaz y estadÃ­sticas.
2. CreaciÃ³n de tareas mediante el formulario.
3. ActualizaciÃ³n de las estadÃ­sticas despuÃ©s de agregar tareas.
4. Cambio del estado de una tarea entre completada y pendiente.
5. EliminaciÃ³n de tareas desde la interfaz.
6. Rechazo de tareas con contenido vacÃ­o.
7. ProtecciÃ³n frente a contenido HTML ingresado como texto.
8. Comportamiento de los clics realizados fuera de los botones de acciÃ³n.

Estas pruebas permiten comprobar que la interfaz y la lÃ³gica de administraciÃ³n de tareas trabajan correctamente en conjunto.

### 5.3 ConfiguraciÃ³n y ejecuciÃ³n de pruebas

Se configurÃ³ Vitest para utilizar jsdom como entorno de pruebas y `@vitest/coverage-v8` como proveedor de cobertura.

Los comandos utilizados para ejecutar las pruebas son:

```bash
npm run test
```

Para ejecutar las pruebas con cobertura:

```bash
npx vitest run --coverage
```

### 5.4 Resultados de las pruebas

Durante la validaciÃ³n local se obtuvieron los siguientes resultados:

| Indicador | Resultado |
|---|---:|
| Archivos de prueba aprobados | 2 de 2 |
| Pruebas unitarias aprobadas | 7 de 7 |
| Pruebas de integraciÃ³n aprobadas | 8 de 8 |
| Pruebas automatizadas totales | 15 de 15 |
| Pruebas fallidas | 0 |
| Statements | 100% |
| Branches | 100% |
| Functions | 100% |
| Lines | 100% |

El informe de cobertura generado por Vitest refleja un 100% en todas las mÃ©tricas para los siguientes mÃ³dulos:

- `app.js`
- `taskManager.js`

Estos resultados corresponden a los archivos instrumentados por Vitest y demuestran que las funciones y ramas de cÃ³digo evaluadas en ambos mÃ³dulos estÃ¡n cubiertas por las pruebas implementadas.

## 6. ConfiguraciÃ³n del pipeline CI/CD

La automatizaciÃ³n se implementÃ³ mediante un archivo denominado `ci-cd.yml`, ubicado en:

`.github/workflows/ci-cd.yml`

El pipeline se ejecuta cuando se realizan cambios mediante `push` en la rama `main` o cuando se crea un Pull Request dirigido a dicha rama.

El workflow estÃ¡ compuesto por dos trabajos principales.

### 6.1 Build and Test

Este trabajo se encarga de preparar y validar el proyecto.

Sus pasos son:

1. Obtener el cÃ³digo fuente del repositorio mediante GitHub Actions.
2. Configurar Node.js 24.
3. Instalar las dependencias utilizando `npm ci`.
4. Ejecutar las 15 pruebas automatizadas y generar el reporte de cobertura.
5. Construir la aplicaciÃ³n mediante `npm run build`.
6. Subir la carpeta `dist` como artefacto para el despliegue.

### 6.2 Deploy to GitHub Pages

Este segundo trabajo se ejecuta despuÃ©s de que el proceso de construcciÃ³n y pruebas haya finalizado correctamente.

Su responsabilidad es publicar la versiÃ³n construida de TaskFlow en GitHub Pages.

El despliegue estÃ¡ condicionado a que el evento sea un `push` realizado sobre la rama `main`. Por esta razÃ³n, los Pull Requests permiten validar los cambios sin publicar automÃ¡ticamente una nueva versiÃ³n.

Esta separaciÃ³n permite mantener un proceso controlado de integraciÃ³n y publicaciÃ³n.

## 7. Control de versiones

Git se utilizÃ³ para administrar los cambios realizados durante el desarrollo.

El repositorio se alojÃ³ en GitHub, lo que permitiÃ³ almacenar el cÃ³digo fuente, mantener el historial de modificaciones y ejecutar automÃ¡ticamente los workflows.

La rama principal utilizada fue `main`.

Los cambios se registraron mediante commits y se enviaron al repositorio remoto utilizando Git.

**Repositorio:**

https://github.com/Gabriel-Read5/TaskFlow-CICD

## 8. Despliegue de la aplicaciÃ³n

Para publicar TaskFlow se utilizÃ³ GitHub Pages con GitHub Actions como fuente de despliegue.

Primero se configurÃ³ GitHub Pages desde los ajustes del repositorio. Posteriormente, el pipeline se encargÃ³ de generar la versiÃ³n de producciÃ³n y publicarla automÃ¡ticamente.

La aplicaciÃ³n quedÃ³ disponible pÃºblicamente en la siguiente direcciÃ³n:

https://gabriel-read5.github.io/TaskFlow-CICD/

El despliegue permitiÃ³ comprobar que la aplicaciÃ³n podÃ­a accederse desde un navegador despuÃ©s de completar el proceso automatizado.

## 9. Resultados obtenidos

Durante la implementaciÃ³n se lograron los siguientes resultados:

- Se desarrollÃ³ una aplicaciÃ³n web funcional para la gestiÃ³n de tareas.
- Se organizÃ³ la lÃ³gica de negocio en mÃ³dulos independientes.
- Se incorporaron siete pruebas unitarias mediante Vitest.
- Se implementaron ocho pruebas de integraciÃ³n mediante Vitest y jsdom.
- Se alcanzaron 15 pruebas automatizadas aprobadas, sin fallos.
- Se obtuvo un 100% de cobertura en statements, branches, functions y lines para `app.js` y `taskManager.js`.
- Se configurÃ³ la generaciÃ³n de reportes de cobertura.
- Se creÃ³ un pipeline CI/CD mediante GitHub Actions.
- Se automatizaron las etapas de instalaciÃ³n, pruebas y construcciÃ³n.
- Se configurÃ³ la publicaciÃ³n mediante GitHub Pages.
- Se realizaron ejecuciones exitosas del workflow en GitHub Actions.
- Se comprobÃ³ localmente el funcionamiento de la aplicaciÃ³n.
- Se ejecutÃ³ satisfactoriamente la compilaciÃ³n de producciÃ³n con Vite.
- Se preparÃ³ documentaciÃ³n para explicar el desarrollo, la contribuciÃ³n y el despliegue.

Las validaciones locales realizadas con Node.js 24.22.0 confirmaron que las dependencias se instalaron correctamente, las 15 pruebas fueron aprobadas, la cobertura de los mÃ³dulos `app.js` y `taskManager.js` alcanzÃ³ el 100% y la compilaciÃ³n de producciÃ³n finalizÃ³ satisfactoriamente.

Las modificaciones documentales y de pruebas incorporadas posteriormente deberÃ¡n validarse mediante una nueva ejecuciÃ³n del pipeline despuÃ©s de enviarse al repositorio.

## 10. Dificultades y soluciones

Durante el desarrollo se presentaron algunos detalles tÃ©cnicos que requirieron ajustes.

Uno de ellos estuvo relacionado con la ubicaciÃ³n del archivo `index.html`. Inicialmente, la estructura del proyecto no coincidÃ­a con la ubicaciÃ³n esperada por Vite, lo que impedÃ­a realizar correctamente la construcciÃ³n de la aplicaciÃ³n.

La soluciÃ³n consistiÃ³ en colocar `index.html` en el directorio raÃ­z del proyecto y actualizar las referencias a los archivos CSS y JavaScript.

TambiÃ©n se identificÃ³ una advertencia relacionada con la versiÃ³n local de Node.js y los requisitos de algunas dependencias. Inicialmente se utilizaba Node.js 25.6.1, por lo que se decidiÃ³ alinear el entorno local con la versiÃ³n utilizada en GitHub Actions.

Para solucionar esta situaciÃ³n, se instalÃ³ Node.js 24.22.0. Posteriormente, se reinstalaron las dependencias mediante `npm ci` y se ejecutaron nuevamente las pruebas automatizadas, el anÃ¡lisis de cobertura y la compilaciÃ³n de producciÃ³n.

Las validaciones finalizaron correctamente, con 15 pruebas aprobadas, un 100% de cobertura en los mÃ³dulos `app.js` y `taskManager.js` y una compilaciÃ³n exitosa mediante Vite.

AdemÃ¡s, se actualizÃ³ el archivo `.gitignore` para excluir el directorio `dist/`, evitando incorporar al control de versiones los archivos generados automÃ¡ticamente durante la compilaciÃ³n.

## 11. ConclusiÃ³n

La implementaciÃ³n de TaskFlow permitiÃ³ aplicar conocimientos de desarrollo web, control de versiones, pruebas automatizadas e integraciÃ³n continua.

La incorporaciÃ³n de GitHub Actions facilitÃ³ la automatizaciÃ³n de las tareas necesarias para validar y construir la aplicaciÃ³n, mientras que GitHub Pages permitiÃ³ publicar el resultado sin necesidad de realizar manualmente cada etapa del despliegue.

La implementaciÃ³n de siete pruebas unitarias y ocho pruebas de integraciÃ³n permitiÃ³ verificar tanto la lÃ³gica principal del administrador de tareas como su interacciÃ³n con la interfaz de usuario.

Asimismo, la obtenciÃ³n de un 100% de cobertura en statements, branches, functions y lines para `app.js` y `taskManager.js` representa un resultado importante en la validaciÃ³n del cÃ³digo instrumentado.

Finalmente, se cumplieron los objetivos principales mediante la creaciÃ³n de una aplicaciÃ³n funcional, la implementaciÃ³n de pruebas automatizadas, la configuraciÃ³n del pipeline CI/CD y la publicaciÃ³n de TaskFlow en un entorno accesible pÃºblicamente.

El proyecto demuestra la importancia de integrar prÃ¡cticas DevOps en el desarrollo de software, especialmente cuando se busca mejorar la calidad, mantener un flujo de trabajo organizado y facilitar la entrega de nuevas versiones.
