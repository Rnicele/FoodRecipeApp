import styles from "../styles/home.module.css";

import Header from "./components/Header";
import Recipes from "./components/Recipes";
export default function Home() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <div>
      <Header foodData={foodData} setFoodData={setFoodData} />
      <Recipes foodData={foodData} setFoodId={setFoodId} foodId={foodId} />
    </div>
  );
}
