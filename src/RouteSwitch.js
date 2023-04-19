import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Components/Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;