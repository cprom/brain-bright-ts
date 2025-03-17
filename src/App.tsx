
import Header from "./components/header/index";
import Home from "./Pages/home/index";
import Math from "./Pages/math/index";
import Reading from "./Pages/reading/index";
import Writing from "./Pages/writing/index";
import Counting from "./Pages/math/counting/index";
import Addition from "./Pages/math/addition/index";
import Subtraction from "./Pages/math/subtraction/index";
import Multiplication from "./Pages/math/multiplication/index";
import Division from "./Pages/math/division/index";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#B197FC', // purple
      dark: '#74C0FC'  // blue
    },
    secondary: {
      main: '#FFD43B' // yellow
    },
    warning: {
      main: '#FFA047' // green
    },
    success: {
      main: '#63E6bE', // orange
      
    },
    error: {
      main: '#FF6161' //red
    }

  },


})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
        <BrowserRouter basename="/brain-bright-ts">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/math" element={<Math/>}/>
            <Route path="/reading" element={<Reading/>}/>
            <Route path="/writing" element={<Writing/>}/>
            <Route path="/math/counting" element={<Counting/>}/>
            <Route path="/math/addition" element={<Addition/>}/>
            <Route path="/math/subtraction" element={<Subtraction/>}/>
            <Route path="/math/multiplication" element={<Multiplication/>}/>
            <Route path="/math/division" element={<Division/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
