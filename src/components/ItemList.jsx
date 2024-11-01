import Item from "./Item";
import styles from "../styles/itemlist.module.css";
export default function ItemList({ food, isLoading }) {
  return (
    <div className={styles.itemList}>
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.extendedIngredients.map((item) => <Item item={item} />)
        )}
      </ul>
    </div>
  );
}
