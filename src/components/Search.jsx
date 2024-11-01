import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export default function Search({ forPage, foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchFood() {
      // wait till get the response; we need to use async function when we use await
      const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      if (!res.ok) {
        // If the response status is not OK, set error state
        setHasError(true);
      } else {
        const data = await res.json();
        setFoodData(data.results);
      }
    }
    fetchFood();
  }, [query]);

  useEffect(() => {
    // Redirect to /error if hasError is true
    if (hasError) {
      navigate("/error");
    }
  }, [hasError, navigate]);

  if (hasError) {
    return null; // Prevent rendering if navigating to error page
  }
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
