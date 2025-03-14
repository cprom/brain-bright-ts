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
      main: '#63E6bE' // green
    },
    success: {
      main: '#FFA047', // orange
      light: '#FFZ0X0' // red
    }
  }
})

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/math",
      element: <Math />,
    },
    {
      path: "/reading",
      element: <Reading />,
    },
    {
      path: "/writing",
      element: <Writing />,
    },
    {
      path: "/math/counting",
      element: <Counting />,
    },
    {
      path: "/math/addition",
      element: <Addition />,
    },
    {
      path: "/math/subtraction",
      element: <Subtraction />,
    },
    {
      path: "/math/multiplication",
      element: <Multiplication />,
    },
    {
      path: "/math/division",
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
