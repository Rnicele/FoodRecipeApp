import { useEffect, useState } from "react";
import styles from "../styles/recipeinformation.module.css";
import ItemList from "./ItemList";
export default function RecipeInformation({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.information}>
      <div className={styles.titleInformation}>
        <img src={food.image} alt="" />
        <div className={styles.title}>
          <h1>{food.title}</h1>
          <div className={styles.perServing}>
            <h2>${(food.pricePerServing / 100).toFixed(2)} </h2>
            <span> Per Serving</span>
          </div>
        </div>
        <div className={styles.tags}>
          <span className={styles.ready}>{food.readyInMinutes} Minutes</span>
          <span className={styles.serving}>Serves up to {food.servings}</span>
          <span className={styles.vegetarian}>
            {food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
          </span>
          {food.vegan ? <span className={styles.vegan}>Vegan</span> : ""}
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>INSTRUCTIONS</h2>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step, key) => (
            <li key={key}>{step.step}</li>
          ))
        )}
      </div>
      <div className={styles.ingredients}>
        <h2>INGREDIENTS</h2>
        <ItemList food={food} isLoading={isLoading} />
      </div>
    </div>
  );
}
