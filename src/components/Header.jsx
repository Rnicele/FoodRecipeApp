import styles from "../styles/header.module.css";
import logo from "../assets/foodappIcon.png";
import Search from "./Search";
export default function Header({ foodData, setFoodData }) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="food app icon" />
      <div className={styles.search}>
        {/* <h1>EXPLORE RECIPES</h1> */}
        <Search
          forPage={"body"}
          foodData={foodData}
          setFoodData={setFoodData}
        />
      </div>
    </div>
  );
}
