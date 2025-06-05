import { AppBar, Button, IconButton, Stack, Toolbar, Tooltip, useTheme } from "@mui/material";
import { usarModoColor } from "../theme/ColorModeProvider";
import { Link as RouterLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


function NavigationBar() {
  const { palette } = useTheme();
  const { alternar } = usarModoColor();
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <Button component={RouterLink} to="/home" color="inherit">Home</Button>
            <Button component={RouterLink} to="/about" color="inherit">Informacion</Button>
            <Button component={RouterLink} to="/register" color="inherit">Registro</Button>
            <Button component={RouterLink} to="/summary" color="inherit">Resumen</Button>
          </Stack>

          {/* Botón modo oscuro / claro */}
          <Tooltip title="Toggle theme">
            <IconButton color="inherit" onClick={alternar}>
              {palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      

    </>
  );
}

export default NavigationBar;