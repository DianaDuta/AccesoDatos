import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";


interface Props {
    onSearch: (breed: string) => void;
    loading: boolean;
}

export default function DogForm({ onSearch, loading }: Props) {
  const [raza, setRaza] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (raza.trim()) onSearch(raza.trim().toLowerCase());
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "grid", gap: 2, maxWidth: 400, mx: "auto" }}
    >
      <TextField
        label="Raza de perro (en inglés)"
        value={raza}
        onChange={(e) => setRaza(e.target.value)}
        required
      />

      <LoadingButton            
        variant="contained"
        type="submit"
        loading={loading}
        loadingIndicator="Buscando..."
      >
        Buscar
      </LoadingButton>
    </Box>
  );
}