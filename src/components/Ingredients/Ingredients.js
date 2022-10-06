import React, {useCallback, useEffect, useReducer, useState} from 'react';
import useHttp from "../../hooks/http";

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

  const {sending, error, fetchResponse, httpRequest, resetError} = useHttp();

  console.log("RENDERING");

  useEffect(() => {
    if(fetchResponse.action) {
      if(fetchResponse.action.type === "GET") {
        const ingredientsHelper = [];
        for(const i in fetchResponse.data) {
          ingredientsHelper.push({ id: i, ...fetchResponse.data[i]});
        }

        dispatchIngredients({type: "SET", ingredients: ingredientsHelper});
      }
      if(fetchResponse.action.type === "ADD") {
        const finalIngredient = {...fetchResponse.action.body, id: fetchResponse.data.name};

        dispatchIngredients({type:"ADD", ingredient: finalIngredient});
      }
      if(fetchResponse.action.type === "REMOVE") {
        dispatchIngredients({type:"REMOVE", id: fetchResponse.action.id});
      }
    }

  }, [fetchResponse]);

  useEffect(() => {

    httpRequest({type: "GET", url: "https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients.json"});

  }, []);

  const addIngredientHandler = useCallback((ingredient) => {

    httpRequest({type: "ADD", url: "https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients.json", method:"POST", body: ingredient});

  }, [httpRequest])

  const removeIngredientHandler = useCallback((id) => {

    httpRequest({type: "REMOVE", url: `https://max-react-hooks-4184d-default-rtdb.firebaseio.com/ingredients/${id}.json`, method:"DELETE", id: id});
  }, [httpRequest])

  const errorCloseHandler = useCallback(() => {
    resetError();
  }, [resetError])

  const searchChangedHandler = useCallback((term) => {
    setSearchTerm(term);
  }, [])

  const filteredList = searchTerm === "" ? ingredients : ingredients.filter(i => i.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      {error ? <ErrorModal onClose={errorCloseHandler}>{error}</ErrorModal> : null}

      <IngredientForm addIngredient={addIngredientHandler} />

      <section>
        <Search onSearchChange={searchChangedHandler} />
        {sending ?
          <LoadingIndicator/> :
          <IngredientList ingredients={filteredList} onRemoveItem={removeIngredientHandler}/>
        }
      </section>
    </div>
  );
}

export default Ingredients;
