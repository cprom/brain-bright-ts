
import Header from "./components/header/";
import Home from "./Pages/home/";
import Math from "./Pages/math";
import Reading from "./Pages/reading/";
import Writing from "./Pages/writing/";
import Counting from "./Pages/math/counting/";
import Addition from "./Pages/math/addition/";
import Subtraction from "./Pages/math/subtraction/";
import Multiplication from "./Pages/math/multiplication/";
import MultiplicationRandomProblemSets from "./Pages/math/multiplication/multiplication-random-problem-sets";
import Division from "./Pages/math/division/";
import Register from "./components/auth/register";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer";
import MultiplicationTableProblemSets from "./Pages/math/multiplication/multiplication-table-problem-sets";
import DivisionTableProblemSets from "./Pages/math/division/division-table-problem-sets";
import DivisionRandomProblemSets from "./Pages/math/division/division-random-problem-sets";
import MultiplicationTables from "./Pages/math/multiplication/multiplication-table";
import DivisionTables from "./Pages/math/division/division-table";
import { AuthProvider } from "./contexts/authContext";
import Login from "./components/auth/login"
import Alphabet from "./Pages/reading/alphabet";
import Words from "./Pages/reading/words";
import Sentences from "./Pages/reading/sentences";

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
      main: '#FFA047' // orange
    },
    success: {
      main: '#63E6bE', // green
      
    },
    error: {
      main: '#FF6161' //red
    }

  },


})


function App() {

  return (
    <AuthProvider>
         <ThemeProvider theme={theme}>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="brain-bright-ts/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="brain-bright-ts/math" element={<Math/>}/>
            <Route path="brain-bright-ts/reading" element={<Reading/>}/>
            <Route path="brain-bright-ts/reading/alphabet" element={<Alphabet/>}/>
            <Route path="brain-bright-ts/reading/words" element={<Words/>}/>
            <Route path="brain-bright-ts/reading/sentences" element={<Sentences/>}/>
            <Route path="brain-bright-ts/writing" element={<Writing/>}/>
            <Route path="brain-bright-ts/math/counting" element={<Counting/>}/>
            <Route path="brain-bright-ts/math/addition" element={<Addition/>}/>
            <Route path="brain-bright-ts/math/subtraction" element={<Subtraction/>}/>
            <Route path="brain-bright-ts/math/multiplication" element={<Multiplication/>}/>
            <Route path="brain-bright-ts/math/multiplication/practice" element={<MultiplicationRandomProblemSets/>}/>
            <Route path="brain-bright-ts/math/multiplication/table" element={<MultiplicationTableProblemSets/>}/>
            <Route path="brain-bright-ts/math/multiplication/tables" element={<MultiplicationTables/>}/>
            <Route path="brain-bright-ts/math/division" element={<Division/>}/>
            <Route path="brain-bright-ts/math/division/table" element={<DivisionTableProblemSets/>}/>
            <Route path="brain-bright-ts/math/division/tables" element={<DivisionTables/>}/>
            <Route path="brain-bright-ts/math/division/practice" element={<DivisionRandomProblemSets/>}/>
          </Routes>
          </BrowserRouter>
        <Footer/>
    </ThemeProvider>
    </AuthProvider>
  )
}

export default App;
