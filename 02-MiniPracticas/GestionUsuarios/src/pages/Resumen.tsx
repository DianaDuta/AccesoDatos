import { Typography, Box } from "@mui/material";
import { useUsuario } from "../context/usuario";

function Summary() {
  const { usuario } = useUsuario();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Resumen de registro</Typography>

      {usuario.nombre ? (
        <>
          <Typography><b>Nombre:</b> {usuario.nombre}</Typography>
          <Typography><b>Email:</b>  {usuario.email}</Typography>
          {usuario.edad && <Typography><b>Edad:</b> {usuario.edad}</Typography>}
        </>
      ) : (
        <Typography>No hay datos guardados. Ve a “Register”.</Typography>
      )}
    </Box>
  );
}

export default Summary;