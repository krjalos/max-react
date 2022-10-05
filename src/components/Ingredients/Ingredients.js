import React, {useEffect, useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {

  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredientsLoaded, setIngredientsLoaded] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch('https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients.json');

      if(response.ok) {
        const data = await response.json();

        const loadedIngredients = [];

        for (const key in data) {
          loadedIngredients.push({id: key, title: data[key].title, amount: data[key].amount});
        }

        setIngredients((prevState) => [...prevState, ...loadedIngredients]);

      }else {
        return "Can't fetch ingredients from server";
      }
    }

    fetchIngredients();

  }, []);

  const addIngredientHandler = async (ingredient) => {

    const response = await fetch('https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients.json', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredient)
    });

    const data = await response.json();

    const finalIngredient = {...ingredient, id: data.name};

    setIngredients((prevState) => [...prevState, finalIngredient]);
  }

  const removeIngredientHandler = (id) => {
    setIngredients((prevState) => {
      const newState = [...prevState];
      return newState.filter(i => i.id !== id);
    });
  }

  const searchChangedHandler = (term) => {
    setSearchTerm(term);
  }

  const filteredList = searchTerm === "" ? ingredients : ingredients.filter(i => i.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <IngredientForm addIngredient={addIngredientHandler}/>

      <section>
        <Search onSearchChange={searchChangedHandler} />
        <IngredientList ingredients={filteredList} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
