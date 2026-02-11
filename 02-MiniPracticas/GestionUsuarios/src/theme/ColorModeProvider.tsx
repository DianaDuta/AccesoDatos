import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState, type PropsWithChildren } from "react";


export const ColorContexto = createContext({ alternar: () => {} });
export const usarModoColor = () => useContext(ColorContexto);

export function ColorModeProvider({ children }: PropsWithChildren) {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const paleta = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: { main: "#1976d2" },
                    ...(mode === "dark" && {
                        background: { default: "#121212", paper: "#1e1e1e" },
                    }),
                },
            }),
        [mode]
    );

    const alternarModo = () => setMode((m) => (m === "light" ? "dark" : "light"));

    return (
        <ColorContexto.Provider value={{ alternar: alternarModo }}>
            <ThemeProvider theme={paleta}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorContexto.Provider>
    );
} 