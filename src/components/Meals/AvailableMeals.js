import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect, useState} from "react";

const AvailableMeals = () => {

  const [mealsList, setMealsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch('https://max-react-d73e4-default-rtdb.firebaseio.com/meals.json');
      const data = await response.json();

      setLoading(false);

      setMealsList(Object.values(data).map(meal => (<MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />)));
    }

    fetchMeals().catch((error) => {
      setError(error.message);
      setLoading(false)
    });

  }, []);

  return (
    <section className={classes.meals}>
    {error ? <p>{error}</p> : null}
    {loading ? <p>Courses are loading</p> : null}
    {mealsList.length > 0 ? <Card><ul>{mealsList}</ul></Card> : null}
  </section>
  );
};

export default AvailableMeals;
