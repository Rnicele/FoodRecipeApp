import Header from "./Header";
import Recipes from "./Recipes";
export default function Home() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("716300");
  return (
    <div className="App">
      <Header foodData={foodData} setFoodData={setFoodData} />
      <Recipes foodData={foodData} setFoodId={setFoodId} foodId={foodId} />
    </div>
  );
}
