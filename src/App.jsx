import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
          {/* Fallback for unknown routes */}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
