import { useEffect } from "react";
import styles from "../styles/recipelist.module.css";
export default function RecipeList({ food, setFoodId }) {
  return (
    <div className={styles.recipeCardElement}>
      <img src={food.image} alt="sample" />
      <h1>{food.title}</h1>
      <button
        onClick={() => {
          setFoodId(food.id);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}
