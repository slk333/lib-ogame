import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { StructureCosts } from "./pages/DEMOStructureCosts";
import { ShipyardCosts } from "./pages/DEMOShipyardCosts";
import { Production } from "./pages/DEMOProduction";
import { Fleet } from "./pages/DEMOFleet";
import { Debug } from "./pages/DEMODebug";
import "./mini.css";
import "./layout.css";

function App() {
  return (
    <BrowserRouter>
      <nav aria-label="Calculators">
        <ul>
          <li><NavLink to="/" end>Structures Costs</NavLink></li>
          <li><NavLink to="/shipyard">Shipyard Costs</NavLink></li>
          <li><NavLink to="/production">Production</NavLink></li>
          <li><NavLink to="/fleet">Flight &amp; Cargo</NavLink></li>
          <li><NavLink to="/debug">Debug</NavLink></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<StructureCosts />} />
          <Route path="/shipyard" element={<ShipyardCosts />} />
          <Route path="/production" element={<Production />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/debug" element={<Debug />} />
          <Route path="*" element={<p>Page not found. <Link to="/">Go home</Link></p>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
