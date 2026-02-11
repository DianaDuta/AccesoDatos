// src/App.tsx
import "./App.css";
import { ColorModeProvider } from "./theme/ColorModeProvider";
import NavigationBar from "./components/NavigationBar";
import { UserProvider} from "./context/usuario";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Informacion from "./pages/Informacion";
import Registro from "./pages/Registro";
import Resumen from "./pages/Resumen";

function App() {
  return (
    <ColorModeProvider>
      <UserProvider>
        <Router>
          <NavigationBar />
          
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/resumen" element={<Resumen />} />
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </Router>
      </UserProvider>
    </ColorModeProvider>
  );
}

export default App;

