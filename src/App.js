import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Paid from "./pages/Paid";

function App() {
  return (
    <div className="App">
        <div className="kiosk">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/paid" element={<Paid />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
