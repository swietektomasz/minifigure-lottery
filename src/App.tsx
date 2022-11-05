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
  return (
    <MinifigureProvider>
      <RouterProvider router={router} />
    </MinifigureProvider>
  );
}

export default App;
