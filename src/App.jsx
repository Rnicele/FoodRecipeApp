import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define other routes as needed */}
          <Route path="*" element={<ErrorPage />} />
          {/* Fallback for unknown routes */}
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
