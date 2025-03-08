import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./Pages/home";
import Math from "./Pages/math";
import Reading from "./Pages/reading";
import Writing from "./Pages/writing";

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
    {
      path: "/writing",
      element: <Writing />,
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
