# Dog API

> Buscador de imágenes de perros por raza que utiliza la API pública de Dog CEO.

Esta aplicación permite al usuario introducir una raza de perro (en inglés) y obtener aleatoriamente 3 imágenes de dicha raza. Es un ejercicio práctico para iniciarse en el consumo de APIs REST, el manejo de asincronía y feedback de usuario.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![MUI](https://img.shields.io/badge/MUI-Material--UI-007FFF?logo=mui)

## Características

* **Búsqueda Dinámica:** Input controlado para buscar razas específicas.
* **Feedback Visual:**
    * Botón con estado de carga (`LoadingButton`) para evitar múltiples peticiones.
    * Mensajes de alerta (`Alert`) si la raza no existe o hay error de red.
* **Consumo de API Externa:** Conexión con `dog.ceo/api` usando `fetch` y `async/await`.
* **Routing:** Configuración básica con `react-router-dom` para gestionar la vista principal.

## Stack Tecnológico

* **React Router Dom:** Manejo de rutas (`/` y `/dogs`).
* **Material UI (MUI):**
    * `Grid`: Diseño responsive para la galería de imágenes.
    * `Card`: Presentación elegante de las fotos.
    * `TextField` & `LoadingButton`: Formulario interactivo.
* **TypeScript:** Interfaces definidas para las respuestas de la API (`APIResponse`) y las props de los componentes.

## Estructura del Código

```text
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/
│   │   ├── DogCard.tsx       # Componente UI: Tarjeta individual para cada imagen
│   │   └── DogForm.tsx       # Componente UI: Input de búsqueda y botón de carga
│   ├── pages/
│   │   └── DogPage.tsx       # Lógica principal: Petición a la API y gestión de estados
│   ├── App.css
│   ├── App.tsx               # Configuración de rutas (React Router)
│   ├── index.css             # Estilos globales
│   ├── main.tsx              # Punto de entrada de la aplicación
│   └── vite-env.d.ts         # Definición de tipos de Vite
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts