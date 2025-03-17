
import Header from "./components/header";
import Home from "./Pages/home";
import Math from "./Pages/math";
import Reading from "./Pages/reading";
import Writing from "./Pages/writing";
import Counting from "./Pages/math/counting";
import Addition from "./Pages/math/addition";
import Subtraction from "./Pages/math/subtraction";
import Multiplication from "./Pages/math/multiplication";
import Division from "./Pages/math/division";


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
        <BrowserRouter>
          <Routes>
            <Route path="/brain-bright-ts/" element={<Home/>}/>
            <Route path="/brain-bright-ts/home/" element={<Home/>}/>
            <Route path="/brain-bright-ts/math" element={<Math/>}/>
            <Route path="/brain-bright-ts/reading" element={<Reading/>}/>
            <Route path="/brain-bright-ts/writing" element={<Writing/>}/>
            <Route path="/brain-bright-ts/math/counting" element={<Counting/>}/>
            <Route path="/brain-bright-ts/math/addition" element={<Addition/>}/>
            <Route path="/brain-bright-ts/math/subtraction" element={<Subtraction/>}/>
            <Route path="/brain-bright-ts/math/multiplication" element={<Multiplication/>}/>
            <Route path="/brain-bright-ts/math/division" element={<Division/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
