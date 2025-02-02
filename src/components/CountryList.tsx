import styles from "./CountryList.module.css";
import Spinner from "./Spinner.tsx";
import CountryItem from "./CountryItem.tsx";
import Message from "./Message.tsx";
import CityInterface from "../Interfaces/CityInterface.tsx";
import CountryInterface from "../Interfaces/CountryInterface.tsx";
import { useCities } from "../contexts/CitiesContext.tsx";

interface Props {
  cities: CityInterface[];
  isLoading: boolean;
}

function CountryList() {
  const { cities, isLoading } = useCities() as Props;

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add Your first city by clicking on a city on the map" />
    );

  const countries: CountryInterface[] = cities.reduce(
    (array: CountryInterface[] | [], city: CityInterface) => {
      if (
        !array.map((el: CountryInterface) => el.country).includes(city.country)
      ) {
        return [...array, { country: city.country, emoji: city.emoji }];
      } else return array;
    },
    [],
  );

  return (
    <ul className={styles.countryList}>
      {countries.map((country: CountryInterface) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
