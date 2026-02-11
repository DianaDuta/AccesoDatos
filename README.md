# Portfolio de Desarrollo React

> Colección estructurada de aplicaciones para la inicialización en React.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-REDUX-purple?style=for-the-badge)

## Arquitectura del Repositorio

### [03-ProyectoFinal](./03-ProyectoFinal)
Aplicación avanzada que implementa una arquitectura escalable basada en Contextos.

* **[Gestion-Usuarios-Tema](./03-ProyectoFinal/Gestion-Usuarios-Tema):**
  * **Gestión de Estado Global:** Uso de `UserProvider` para la sesión y `ColorModeProvider` para el tema (Dark/Light Mode), evitando el *prop-drilling*.
  * **Enrutamiento:** Navegación protegida y estructurada con `react-router-dom`.
  * **Clean Architecture:** Separación clara entre lógica (`context`), UI (`components/pages`) y estilos (`theme`).

### [02-MiniPracticas](./02-MiniPracticas)
Ejercicios focalizados en funcionalidades específicas de aplicaciones web.

* **[App-Gestion-Datos](./02-MiniPracticas/App-Gestion-Datos):** (CRUD)
  * Gestión completa de registros (Crear, Leer, Actualizar, Borrar).
  * Consumo de servicios asíncronos con Axios.

* **[App-Clima](./02-MiniPracticas/App-Clima):**
  * Consumo de APIs externas (OpenWeather) y manejo de promesas.

* **[Login-Basico](./02-MiniPracticas/Login-Basico):**
  * Lógica de formularios controlados y validación condicional.

### [01-Juegos](./01-Juegos)
Desarrollo de lógica algorítmica y matrices de estado.
* **4 en Raya:** Algoritmo de detección de victoria en matriz bidimensional.
* **3 en Raya:** Gestión de historial de movimientos (Time Travel).

---

## Instrucciones de Ejecución

Este repositorio es un **monorepo**. Cada carpeta es un proyecto independiente con sus propias dependencias.

1. **Navegar a la carpeta del proyecto:**
   ```bash
   cd 03-ProyectoFinal/Gestion-Usuarios-Tema