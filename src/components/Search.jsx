import { useEffect, useState } from "react";
import styles from "../styles/search.module.css";
import searchIcon from "../assets/Search.png";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
export default function Search({ forPage, foodData, setFoodData }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchFood() {
      // wait till get the response; we need to use async function when we use await
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  // const position = forPage === "body" ? styles.searchBody : styles.searchHeader;
  return (
    <div className={styles.searchHeader}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <img src={searchIcon} alt="search icon" onClick={() => fetchFood()} /> */}
    </div>
  );
}
