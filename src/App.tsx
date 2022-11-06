import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Lottery, Shipment } from "./components";
import { MinifigureProvider } from "./context/Minifigures";

function App() {
  return (
    <MinifigureProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/shipment" element={<Shipment />} />
        </Routes>
      </BrowserRouter>
    </MinifigureProvider>
  );
}

export default App;
