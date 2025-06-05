import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogPage from "./pages/DogPage";


import './App.css'

function App() {

  return (
     <BrowserRouter>
      <Routes>
        {/* página principal  ->  DogsPage */}
        <Route path="/" element={<DogPage />} />

        {/* /dogs para mantenerla */}
        <Route path="/dogs" element={<DogPage />} />

        {/* cualquier otra ruta redirige a / */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
