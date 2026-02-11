import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useUsuario } from "../context/usuario";


function Registro() {
    const { setUser } = useUsuario();

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formaDatos = new FormData(e.currentTarget);
        const datos = {
            nombre:  formaDatos.get("nombre")  as string,
            email: formaDatos.get("email") as string,
            edad:   formaDatos.get("edad")   as string,
        };

        setUser(datos);
        e.currentTarget.reset();          // para limpiar los inputs
        alert("Datos guardados en contexto ✔︎");
    }

    return (
        <Box sx={{ p: 3, maxWidth: 400, mx: "auto" }}>
            <Typography variant="h4" gutterBottom>Registro</Typography>

            <Stack component="form" gap={2} onSubmit={onSubmit} autoComplete="off">
            
                <TextField label="Nombre" name="nombre" required />
                <TextField label="Email"  name="email" type="email" required />
                <TextField label="Edad"   name="edad"   type="number" />
                
                <Button type="submit" variant="contained">Enviar</Button>
            </Stack>
        </Box>
    );
}

export default Registro;