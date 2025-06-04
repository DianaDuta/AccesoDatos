

import { useState } from 'react';
import './App.css'
import { Box, Container, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;
console.log("LA KEY QUE LEE VITE →", import.meta.env.VITE_API_KEY);

function App() {
  /* --- --- --- ESTADO --- --- ---*/
  const [ciudad, setCiudad] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState({error: false, message: ""});
  const [clima, setClima] = useState({
    ciudad: "",
    pais: "",
    temperatura: 0,
    condicion: "",
    icono: "",
    textoCondicion: "",
  });

  /* --- --- --- FUNCIONES --- --- ---*/
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCargando(true);
    setError({ error: false, message: "" });

    try {
      if (!ciudad.trim()) throw { message: "El campo ciudad es obligatorio" };
      
      const respuesta = await fetch(API_WEATHER + encodeURIComponent(ciudad));
      const datos = await respuesta.json();

      if (datos.error) { throw { message: datos.error.message }};

      setClima({
        ciudad: datos.location.name,
        pais: datos.location.country,
        temperatura: datos.current.temp_c,
        condicion: datos.current.condition.code,
        icono: datos.current.condition.icon,
        textoCondicion: datos.current.condition.text,
      });
    } catch (ex: any) {
        setError({ error: true, message: ex.message || "Error al obtener el clima" }); 
    } finally {
      setCargando(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        El Tiempo
      </Typography>

      {/* --- --- --- FORMULARIO --- --- ---*/}
      <Box
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        sx={{ display: "grid", gap: 2 }}
      >
        <TextField
          label="Ciudad"
          variant="outlined"
          required
          fullWidth
          size="small"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          error={error.error}
          helperText={error.error ? error.message : ""}
        />
          <LoadingButton
          type="submit"
          variant="contained"
          loading={cargando}
          loadingIndicator="Cargando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      {/* --- --- --- RESULTADO --- --- ---*/}
      {clima.ciudad && (
        <Box
            sx={{
            mt: 4,
            display: "grid",
            gap: 2,
            textAlign: "center",
            borderRadius: 2,
            p: 3,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">
            {clima.ciudad}, {clima.pais}
          </Typography>
            <Box
            component="img"
            alt={clima.textoCondicion}
            src={clima.icono}
            sx={{ margin: "0 auto", width: 96, height: 96 }}
          />

          <Typography variant="h2">{clima.temperatura}ºC</Typography>
          <Typography variant="h5">{clima.textoCondicion}</Typography>
        </Box>
      )}
    </Container>
  );
}


export default App
