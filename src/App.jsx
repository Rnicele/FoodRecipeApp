import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <div className="App">
      <Header foodData={foodData} setFoodData={setFoodData} />
      <Recipes foodData={foodData} setFoodId={setFoodId} foodId={foodId} />
    </div>
  );
}

export default App;
