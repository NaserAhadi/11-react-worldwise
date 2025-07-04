import styles from "./CountryList.module.css";
import Spinner from "@/components/Spinner.jsx";
import Message from "@/components/Message.jsx";
import CountryItem from "@/components/CountryItem.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.length &&
        countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
    </ul>
  );
}

export default CountryList;
