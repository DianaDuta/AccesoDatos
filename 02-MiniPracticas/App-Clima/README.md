# App Clima

> Aplicación de consulta meteorológica en tiempo real que consume la API de WeatherAPI.com, implementada con TypeScript y Material UI.

Este proyecto demuestra el manejo de **peticiones asíncronas (Fetch API)**, la gestión de estados complejos mediante **Custom Hooks** y el uso seguro de **variables de entorno**.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![MUI](https://img.shields.io/badge/MUI-Material--UI-007FFF?logo=mui)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite)

## Funcionalidades

* **Búsqueda en Tiempo Real:** Consulta el clima actual de cualquier ciudad del mundo.
* **Gestión de Estados de Carga:** Feedback visual (`LoadingButton`) mientras se realiza la petición.
* **Manejo de Errores:** Visualización de mensajes de error en el input si la ciudad no existe o la API falla.
* **Diseño Responsivo:** Interfaz limpia y centrada utilizando componentes de Material UI.

## Tecnologías y Conceptos

* **Custom Hook (`useWeather`):** Abstracción de la lógica de negocio. Maneja el ciclo de vida de la petición API, el estado `loading`, `error` y los datos del clima.
* **Variables de Entorno:** Uso de `.env` y `import.meta.env` para proteger la API Key.
* **Material UI:** Uso de `TextField`, `LoadingButton` y `Typography` para una UI rápida y estética.
* **Async/Await:** Gestión moderna de promesas para el consumo de datos.

## Estructura del Código

```text
/
├── src/
│   ├── hooks/
│   │   └── useWeather.ts     # Lógica Core: Fetch a la API y gestión de estado
│   ├── App.tsx               # UI Principal: Formulario y tarjeta de resultados
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── .env                      # (No incluido en repo) Configuración de API Key
├── package.json
└── tsconfig.json

## Instalación y Configuración

Para ejecutar este proyecto en local, necesitarás una API Key gratuita de [WeatherAPI.com](https://www.weatherapi.com/).

Sigue estos pasos:

1.  **Clonar el repositorio y entrar en la carpeta:**
    *(Si ya tienes el repositorio clonado, ve al paso 2)*.

2.  **Instalar las dependencias:**
    Asegúrate de estar dentro de la carpeta `02-MiniPracticas/App-Clima` y ejecuta:
    ```bash
    npm install
    ```

3.  **Configurar la API Key:**
    El proyecto utiliza variables de entorno para proteger las credenciales.
    * Crea un archivo llamado `.env` en la raíz de esta carpeta (`App-Clima`).
    * Añade la siguiente línea dentro del archivo, pegando tu clave de WeatherAPI:

    ```env
    VITE_API_KEY=tu_clave_api_aqui_sin_comillas
    ```

    > **Nota:** El nombre de la variable debe ser exactamente `VITE_API_KEY` para que Vite la reconozca.

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  **Abrir en el navegador:**
    Haz clic en el enlace que aparece en la terminal.