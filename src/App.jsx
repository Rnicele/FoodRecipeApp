import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <ErrorBoundary>
      <div className="App">
        <Header foodData={foodData} setFoodData={setFoodData} />
        <Recipes foodData={foodData} setFoodId={setFoodId} foodId={foodId} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
