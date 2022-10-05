import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import ErrorModal from "../UI/ErrorModal";

const IngredientForm = React.memo(props => {
  const [formFields, setFormFields] = useState({title: "", amount: ''});
  const [showError, setShowError] = useState(false);

  const formFieldChangeHandler = (event) => {
    setFormFields((prevState) => {
      const paramToChange = {};
      paramToChange[event.target.id] = event.target.value;
      return {...prevState, ...paramToChange};
    });
  }

  const submitHandler = event => {
    event.preventDefault();

    if(formFields.amount > 0 && formFields.title.trim().length > 0) {
      props.addIngredient({title: formFields.title, amount: formFields.amount});
      setFormFields({title: "", amount: ''});
    }else {
      setShowError(true);
    }
  };

  const modalCloseHandler = () => {
    setShowError(false);
  }

  return (
    <>
      {showError ? <ErrorModal onClose={modalCloseHandler}>Incorrect fields!</ErrorModal> : null}
      <section className="ingredient-form">
        <Card>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label htmlFor="title">Name</label>
              <input value={formFields.title} type="text" id="title" onChange={formFieldChangeHandler} />
            </div>
            <div className="form-control">
              <label htmlFor="amount">Amount</label>
              <input value={formFields.amount} type="number" id="amount" onChange={formFieldChangeHandler}/>
            </div>
            <div className="ingredient-form__actions">
              <button type="submit">Add Ingredient</button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
});

export default IngredientForm;
