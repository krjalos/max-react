import React, {useEffect, useReducer, useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (prevState, action ) => {
  switch(action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...prevState, action.ingredient];
    case 'REMOVE':
      return prevState.filter(i => i.id !== action.id);
    default:
      throw new Error("No valid action type");
  }
}

function Ingredients() {

  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients.json').then((response) => {
      return response.json();
    }).then((data) => {
      const loadedIngredients = [];

      for (const key in data) {
        loadedIngredients.push({id: key, title: data[key].title, amount: data[key].amount});
      }

      dispatchIngredients({type:"SET", ingredients: loadedIngredients});
      setLoading(false);
    }).catch(error => {
      setError(error.message);
    });

  }, []);

  const addIngredientHandler = (ingredient) => {
    setLoading(true);
    fetch('https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients.json', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ingredient)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      const finalIngredient = {...ingredient, id: data.name};

      dispatchIngredients({type:"ADD", ingredient: finalIngredient});
      setLoading(false);
    }).catch(error => {
      setError(error.message);
    });
  }

  const removeIngredientHandler = (id) => {
    setLoading(true);
    fetch(`https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients/${id}.json`, {
      method:"DELETE"
    }).then(() => {
      dispatchIngredients({type:"REMOVE", id: id});
      setLoading(false);
    }).catch(error => {
      setError(error.message);
    });
  }

  const errorCloseHandler = () => {
    setError(null);
    setLoading(false);
  }

  const searchChangedHandler = (term) => {
    setSearchTerm(term);
  }

  const filteredList = searchTerm === "" ? ingredients : ingredients.filter(i => i.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      {error ? <ErrorModal onClose={errorCloseHandler}>{error}</ErrorModal> : null}

      <IngredientForm addIngredient={addIngredientHandler} />

      <section>
        <Search onSearchChange={searchChangedHandler} />
        {loading ?
          <LoadingIndicator/> :
          <IngredientList ingredients={filteredList} onRemoveItem={removeIngredientHandler}/>
        }
      </section>
    </div>
  );
}

export default Ingredients;
