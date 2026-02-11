import { createContext, useContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface UserData {
    nombre?: string;
    email?: string;
    edad?: string;
}

interface Ctx {
    usuario: UserData;
    setUser: (u: UserData) => void;
}

const UsuarioCtx = createContext<Ctx | null>(null);
export const useUsuario = () => useContext(UsuarioCtx)!;

export function UserProvider({ children }: PropsWithChildren) {
    // Inicializar el estado del usuario como objeto vacío
    const [usuario, setUser] = useState<UserData>({});
    return <UsuarioCtx.Provider value={{ usuario, setUser }}>{children}</UsuarioCtx.Provider>;
}