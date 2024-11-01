import styles from "../styles/recipe.module.css";
import sampleImg from "../assets/sample.jpg";
import RecipeList from "./RecipeList";
import RecipeInformation from "./RecipeInformation";
import { useState } from "react";
export default function Recipes({ foodData, setFoodId, foodId }) {
  return (
    <div className={styles.recipeComponent}>
      <div className={styles.recipeList}>
        {foodData.map((food, key) => (
          <div className={styles.recipeCard} key={key}>
            <RecipeList food={food} setFoodId={setFoodId} />
          </div>
        ))}
      </div>
      <RecipeInformation foodId={foodId} />
    </div>
  );
}
