import styles from "../styles/home.module.css";

import Header from "./components/Header";
import Recipes from "./components/Recipes";
export default function Home() {
  throw new Error("Test error to trigger ErrorBoundary");
  return (
    <div>
      <Header foodData={foodData} setFoodData={setFoodData} />
      <Recipes foodData={foodData} setFoodId={setFoodId} foodId={foodId} />
    </div>
  );
}
