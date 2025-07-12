# 🌍 Country Browser App 🚀

¡Bienvenido a la aplicación **Country Browser App**! Una potente y dinámica herramienta desarrollada con Angular que te permite explorar información detallada de países de diversas maneras. Esta aplicación es ideal para aprender geografía, investigar datos demográficos o simplemente satisfacer tu curiosidad sobre el mundo.

Demuestra habilidades avanzadas en el desarrollo frontend, incluyendo el manejo de rutas, la interacción con APIs externas, la manipulación dinámica del DOM, y la creación de componentes reutilizables e interactivos.

## ✨ Características Principales

### 🔍 Buscador y Navegación por Categorías

La aplicación cuenta con un sistema de búsqueda y navegación versátil dividido en tres categorías principales, accesibles a través de un menú intuitivo:

1.  **Búsqueda por Capital:**
    * Introduce el nombre de una capital y obtén información detallada del país al que pertenece.
    * Los resultados se muestran en una **tabla dinámica** con las siguientes columnas:
        * **Siglas (CCA3):** Código de tres letras del país.
        * **Bandera:** Imagen de la bandera del país.
        * **Nombre del País:** Nombre oficial del país.
        * **Capital:** La capital buscada.
        * **Población:** Cifra de población destacada con un **badge rojo y letras blancas**.
        * **Más Información:** Un botón para acceder a los detalles completos del país.

2.  **Búsqueda por País:**
    * Introduce el nombre de un país y obtén los mismos datos detallados presentados en la tabla dinámica, con su bandera, siglas, capital y población.

3.  **Búsqueda por Región (Continente):**
    * En esta categoría, encontrarás un **botón por cada continente**.
    * Al hacer clic en un continente, se cargará una tabla con todos los países pertenecientes a esa región, mostrando los mismos datos (siglas, bandera, nombre, capital, población).

### 📊 Detalles Completos del País (Ventana Dinámica)

Al pulsar el botón "Más Información" en cualquier resultado de búsqueda o lista de continentes, se abrirá una **ventana modal dinámica y arrastrable** que muestra los datos extendidos del país:

* **Nombre del País:** Nombre oficial.
* **Población:** Cifra total de habitantes.
* **Región y Subregión:** A qué región y subregión geográfica pertenece.
* **Siglas (CCA3):** Código de tres letras.
* **Bandera en Grande:** Una versión más grande de la bandera.
* **Control de Opacidad de la Bandera:** Un deslizador dentro de la ventana te permite hacer la bandera más o menos translúcida, añadiendo interactividad y personalización.

### 📱 Diseño Responsivo

* La aplicación está diseñada para adaptarse y ofrecer una experiencia de usuario óptima en diferentes tamaños de pantalla, desde ordenadores de escritorio hasta dispositivos móviles.

## 🛠️ Tecnologías Utilizadas

### Frontend:

* [**Angular**](https://angular.io/) - Framework robusto para la construcción de la interfaz de usuario.
* [**RxJS**](https://rxjs.dev/) - Para la gestión de flujos de datos asíncronos y optimización de búsquedas (e.g., `debounceTime`).
* **API Externa de Países:** Se conecta a una API externa (como REST Countries API o similar) para obtener la información detallada de los países.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación **Country Browser App** en tu entorno local, sigue estos pasos:

### Requisitos Previos

* Node.js (versión 18 o superior)
* npm o Yarn

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/Browser-country-app](https://github.com/Jose-designer-23/Browser-country-app)
    cd Browser-country-app
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

3.  **Iniciar la aplicación:**
    ```bash
    ng serve
    ```

4.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
* **Generar Componentes, Servicios, etc.:**
    ```bash
    ng generate component nombre-del-componente
    ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas: ng generate --help
    ```
* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```
