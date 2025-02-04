import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
