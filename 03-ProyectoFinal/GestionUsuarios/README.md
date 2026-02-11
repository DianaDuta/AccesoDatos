# Gestión de Usuarios & Tema Dinámico

> **Proyecto Final de ejercicios React**
> Aplicación SPA (Single Page Application) desarrollada con **React, TypeScript y Material UI** que implementa una arquitectura basada en **Contextos Globales** para la gestión de estado y preferencias de usuario.

![React](https://img.shields.io/badge/React-19-blue?logo=react&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&style=for-the-badge)
![MUI](https://img.shields.io/badge/MUI-Material--UI-007FFF?logo=mui&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&style=for-the-badge)

## Características Principales

Este proyecto consolida conocimientos avanzados de React, evitando el *prop-drilling* y mejorando la escalabilidad:

### 1. Gestión de Estado Global (Context API)
* **Usuario (`UserProvider`):** Permite compartir los datos de sesión (Nombre, Email, Edad) entre componentes distantes (`Registro.tsx` ➔ `Resumen.tsx`) sin pasar props manualmente.
* **Tema (`ColorModeProvider`):** Control global del modo **Oscuro / Claro** (Dark/Light Mode) que persiste en toda la aplicación y adapta automáticamente los colores de Material UI.

### 2. Navegación SPA (React Router v7)
* Sistema de rutas declarativo con `react-router-dom`.
* Redirección automática (`<Navigate />`) de la raíz `/` a `/home`.
* Página 404 personalizada para rutas no existentes.
* Navegación fluida sin recargas de página mediante componentes `Link`.

### 3. Formularios y UI Moderna
* **FormData:** Captura eficiente de datos de formularios no controlados en la página de Registro.
* **Material UI v7:** Uso intensivo de componentes pre-estilizados (`AppBar`, `TextField`, `Stack`, `Card`) y sistema de diseño responsivo.

## Estructura del Código

La arquitectura sigue el principio de separación de responsabilidades:

```text
/
├── public/              # Assets estáticos (vite.svg)
├── src/
│   ├── components/
│   │   └── NavigationBar.tsx  # Barra de navegación con botón de cambio de tema
│   ├── context/
│   │   └── usuario.tsx        # Contexto y Hook (useUsuario) para datos de sesión
│   ├── pages/
│   │   ├── Home.tsx           # Página de bienvenida
│   │   ├── Informacion.tsx    # Detalles del proyecto
│   │   ├── Registro.tsx       # Formulario con validación y guardado en Contexto
│   │   └── Resumen.tsx        # Visualización de datos leídos del Contexto
│   ├── theme/
│   │   └── ColorModeProvider.tsx # Lógica del Dark/Light Mode y ThemeProvider
│   ├── App.tsx          # Configuración de Providers y Rutas
│   ├── main.tsx         # Punto de entrada (Renderizado del Root)
│   └── index.css        # Estilos globales y reset
├── index.html
├── package.json
└── tsconfig.json