
import Header from "./components/header/";
import Home from "./Pages/home/";
import Math from "./Pages/math/";
import Reading from "./Pages/reading/";
import Writing from "./Pages/writing/";
import Counting from "./Pages/math/counting/";
import Addition from "./Pages/math/addition/";
import Subtraction from "./Pages/math/subtraction/";
import Multiplication from "./Pages/math/multiplication/";
import MultiplicationRandomProblemSets from "./Pages/math/multiplication/multiplication-random-problem-sets";
import Division from "./Pages/math/division/";


import { HashRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer";
import MultiplicationTableProblemSets from "./Pages/math/multiplication/multiplication-table-problem-sets";
import DivisionTableProblemSets from "./Pages/math/division/division-table-problem-sets";
import DivisionRandomProblemSets from "./Pages/math/division/division-random-problem-sets";

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
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/math" element={<Math/>}/>
            <Route path="/reading" element={<Reading/>}/>
            <Route path="/writing" element={<Writing/>}/>
            <Route path="/math/counting" element={<Counting/>}/>
            <Route path="/math/addition" element={<Addition/>}/>
            <Route path="/math/subtraction" element={<Subtraction/>}/>
            <Route path="/math/multiplication" element={<Multiplication/>}/>
            <Route path="/math/multiplication/practice" element={<MultiplicationRandomProblemSets/>}/>
            <Route path="/math/multiplication/table" element={<MultiplicationTableProblemSets/>}/>
            <Route path="/math/division" element={<Division/>}/>
            <Route path="/math/division/table" element={<DivisionTableProblemSets/>}/>
            <Route path="/math/division/practice" element={<DivisionRandomProblemSets/>}/>
          </Routes>
        </HashRouter>
        <Footer/>
    </ThemeProvider>
  )
}

export default App;
