import styles from "./CountryItem.module.css";
import CountryInterface from "../Interfaces/CountryInterface.tsx";

interface Props {
  country: CountryInterface;
}

function CountryItem({ country }: Props) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
