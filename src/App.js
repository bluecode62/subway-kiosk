import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Paid from "./pages/Paid";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const updateScale = () => {
      const scale = Math.min(
        window.innerWidth / 1200,
        window.innerHeight / 1000
      );
  
      const kiosk = document.querySelector(".kiosk");
  
      if (kiosk) {
        const offsetY = (window.innerHeight - 1000 * scale) / 2;
  
        kiosk.style.transform =
          `scale(${scale}) translateY(${offsetY / scale}px)`;
      }
    };
  
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);
  return (
    <div className="App">
      <div className="kiosk-wrapper">
        <div className="kiosk">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paid" element={<Paid />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
