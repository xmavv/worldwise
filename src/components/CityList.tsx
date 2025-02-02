import styles from "./CityList.module.css";
import Spinner from "./Spinner.tsx";
import CityItem from "./CityItem.tsx";
import Message from "./Message.tsx";
import CityInterface from "../Interfaces/CityInterface.tsx";
import { useCities } from "../contexts/CitiesContext.tsx";

interface Props {
  cities: CityInterface[];
  isLoading: boolean;
}

function CityList() {
  const { cities, isLoading } = useCities() as Props;

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add Your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
