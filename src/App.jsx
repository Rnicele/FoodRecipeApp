import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* Fallback for unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
