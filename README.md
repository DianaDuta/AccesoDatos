# Portfolio de Desarrollo React

> Colección estructurada de aplicaciones para la inicialización en React.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-REDUX-purple?style=for-the-badge)

## Arquitectura del Repositorio

### [01-Juegos](./01-Juegos)
Desarrollo de lógica algorítmica y matrices de estado.
* **4 en Raya:** Algoritmo de detección de victoria en matriz bidimensional.
* **3 en Raya:** juego clásico de estrategia.

### [02-MiniPracticas](./02-MiniPracticas)
Ejercicios focalizados en funcionalidades específicas de aplicaciones web.

* **[App-Gestion-Datos](./02-MiniPracticas/Dog-API):**
Buscador de imágenes por raza utilizando la API de Dog CEO.
  

* **[App-Clima](./02-MiniPracticas/App-Clima):**
Aplicación meteorológica basada en un Custom Hook (useWeather) para abstraer la lógica de la API de WeatherAPI

### [03-ProyectoFinal](./03-ProyectoFinal)
Aplicación SPA avanzada que consolida patrones de diseño para aplicaciones escalables, eliminando el *prop-drilling* y optimizando la experiencia de usuario.

* **Gestión de Estado Global (Context API):**
    * **`UserProvider`**: Persistencia de datos de sesión (Nombre, Email, Edad) compartidos entre componentes distantes.
    * **`ColorModeProvider`**: Control global de **Modo Oscuro / Claro** que adapta automáticamente toda la interfaz de Material UI.
* **Navegación SPA (React Router v7):**
    * Estructura de rutas declarativa con redirecciones inteligentes (`<Navigate />`) y gestión de errores 404.
* **Arquitectura y UI:**
    * Implementación de **Material UI v7** con captura de datos mediante `FormData`.
    * Separación estricta de responsabilidades: lógica de estado en `/context`, tematización en `/theme` y vistas en `/pages`.

----------

## Instrucciones de Ejecución

Este repositorio es un **monorepo**. Cada carpeta es un proyecto independiente con sus propias dependencias.

1. **Navegar a la carpeta del proyecto:**
   ```bash
   cd 03-ProyectoFinal/Gestion-Usuarios-Tema
2. **Instalar dependencias:**
   ```bash
   npm install
3. **Ejecutar:**
   ```bash
   npm run dev