import { CssBaseline, Container, Grid } from "@mui/material";
import MiHero from "./components/miHero";
import MiBar from "./components/miBar";
import MiContent from "./components/miContent";

import './App.css'


function App() {

  return (

    <>
      <CssBaseline />
      <MiBar />
      <MiHero />
      <MiContent />
    </>
  )
}


export default App
