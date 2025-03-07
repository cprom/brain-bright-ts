import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";
import Math from "./components/math";
import Reading from "./components/reading";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";


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
  ];
  const routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <br/><br/><br/>
      <div>{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
