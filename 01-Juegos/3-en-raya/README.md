#  JUEGO: 3 en raya

> Juego de estrategia clásica implementado en una cuadrícula de 3x3 utilizando React y Material UI.

Este proyecto es el clásico "Tres en Raya", donde el objetivo es alinear 3 fichas en un tablero de 12 casillas.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![MUI](https://img.shields.io/badge/MUI-Material--UI-007FFF?logo=mui)

## Características

* **Tablero 3x3:** Cuadrícula interactiva de 12 celdas.
* **Gestión de Turnos:** Alternancia automática entre Jugador 1 (O) y Jugador 2 (X).
* **Detección de Victoria:** Algoritmo que verifica en tiempo real las combinaciones ganadoras posibles (filas, columnas y diagonales).
* **Interfaz Moderna:** Componentes visuales estilizados con **Material UI** (Paper, Icons, Stacks).
* **Reinicio:** Botón para resetear el estado del juego sin recargar la página.

## Tecnologías Utilizadas

* **React Hooks:** Uso intensivo de `useState` para controlar el array del tablero (`Array(12)`), el turno actual y el estado del ganador.
* **TypeScript:** Tipado estricto para las props de los componentes y estados (`"X" | "O" | null`).
* **Material UI:**
    * `Grid` / `Box`: Para el layout CSS Grid del tablero.
    * `Paper` & `IconButton`: Para la estética de las casillas.
    * `Icons`: `CloseIcon` (X) y `RadioButtonUncheckedIcon` (O).

## Estructura del Código

```text
/
├── src/
│   ├── components/
│   │   ├── Casilla.tsx       # Componente UI: Renderiza la celda y el icono (X/O)
│   │   └── Tablero.tsx       # Lógica: Estado del juego, algoritmo de victoria y Grid
│   ├── App.tsx               # Layout principal (MUI Box + CssBaseline)
│   ├── main.tsx              # Punto de entrada de la aplicación
│   └── index.css             # Estilos globales y reset
├── package.json
└── tsconfig.json

## Ejecución

1.  Debes estar en la carpeta del proyecto.
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```