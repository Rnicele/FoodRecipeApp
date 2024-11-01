import { useState } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Define other routes as needed */}
            <Route path="*" element={<ErrorPage />} />
            {/* Fallback for unknown routes */}
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
