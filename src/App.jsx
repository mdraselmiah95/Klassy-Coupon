import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CouponCreate from "./pages/CouponCreate";
import UserCreate from "./pages/UserCreate";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import Coupons from "./components/coupon/Coupons";

function App() {
  return (
    <BrowserRouter>
      <Contact />
      <Menu />
      <Routes>
        <Route path="/" element={<CouponCreate />} />
        <Route path="/coupon" element={<Coupons />} />
        <Route path="/users" element={<UserCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
