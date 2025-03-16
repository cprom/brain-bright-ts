import Login from "./components/auth/login";
import Register from "./components/auth/register";

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

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

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
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/brain-bright-ts/login",
      element: <Login />,
    },
    {
      path: "/brain-bright-ts/register",
      element: <Register />,
    },
    {
      path: "/brain-bright-ts/home",
      element: <Home />,
    },
    {
      path: "/brain-bright-ts/math",
      element: <Math />,
    },
    {
      path: "/brain-bright-ts/reading",
      element: <Reading />,
    },
    {
      path: "/brain-bright-ts/writing",
      element: <Writing />,
    },
    {
      path: "/brain-bright-ts/math/counting",
      element: <Counting />,
    },
    {
      path: "/brain-bright-ts/math/addition",
      element: <Addition />,
    },
    {
      path: "/brain-bright-ts/math/subtraction",
      element: <Subtraction />,
    },
    {
      path: "/brain-bright-ts/math/multiplication",
      element: <Multiplication />,
    },
    {
      path: "/brain-bright-ts/math/division",
      element: <Division />,
    },
  ];
  const routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
      <Header />
      <br/><br/><br/>
      <div>{routesElement}</div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
