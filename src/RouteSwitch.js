import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  )
}

export default RouteSwitch;