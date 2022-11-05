import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Lottery } from "./components";
import { MinifigureProvider } from "./context/Minifigures";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "lottery", element: <Lottery /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
