import styles from "../styles/item.module.css";
export default function Item({ item }) {
  return (
    <li>
      {item.name} - {item.amount} {item.unit}
    </li>
  );
}
