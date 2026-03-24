import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Paid from "./pages/Paid";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
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
