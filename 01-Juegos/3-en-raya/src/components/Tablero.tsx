import { useState } from "react";
import { Box, Stack, Button, Chip } from "@mui/material";
import Casilla from "./Casilla";

type Casilla = "X" | "O" | null;
const tableroInicial: Casilla[] = Array(9).fill(null);

export default function Tablero() {
    /* ---------- estado ---------- */
    const [tablero, setTablero] = useState<Casilla[]>(tableroInicial);
    const [turno, setTurno] = useState<"X" | "O">("O");            // jugador 1 = O
    const [ganador, setGanador] = useState<Casilla>(null);

    /* --------- comprobaciones ----------- */
    const lineas = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],      // filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],      // columnas
        [0, 4, 8], [2, 4, 6],                 // diagonales
    ];

    const comprobarGanador = (next: Casilla[]) => {
        for (const [a, b, c] of lineas)
        if (next[a] && (next[a] === next[b]) && (next[a] === next[c])) return next[a];
        return null;
    };

    /* ---------- manejadores ---------- */
    const handleClick = (idx: number) => {
        if (tablero[idx] || ganador) return;

        const next = tablero.slice();
        next[idx] = turno;
        setTablero(next);

        const win = comprobarGanador(next);
        setGanador(win);
        setTurno((prev) => (prev === "O" ? "X" : "O"));
    };

    const reset = () => {
        setTablero(tableroInicial);
        setGanador(null);
        setTurno("O");
    };

    /* ---------- UI ---------- */
    return (
        <Stack
            spacing={2}
            p={2}
            border={1}
            borderColor="plum"
            maxWidth={370}
            mx="auto"
        >
        <Stack direction="row" spacing={1} justifyContent="center">
            <Chip
                label={ganador ? `PLAYER ${ganador === "O" ? 1 : 2} WINS` : `NEXT: PLAYER ${turno === "O" ? 1 : 2}`}
                color="warning"
                variant="outlined"
            />
            {ganador && (
                <Chip
                    label={`PLAYER ${ganador === "O" ? 1 : 2} WINS`}
                    color="warning"
                    variant="outlined"
                />
            )}
            <Button variant="contained" color="success" onClick={reset}>
                NEW GAME
            </Button>
        </Stack>

        {/* tablero 3×3 */}
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
            }}
        >
            {tablero.map((casilla, i) => (
                <Casilla key={i} value={casilla} onClick={() => handleClick(i)} />
            ))}
        </Box>
    </Stack>
  );
}