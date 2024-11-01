import { useState } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

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
