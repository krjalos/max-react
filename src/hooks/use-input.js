import {useState} from "react";
import classes from "../components/Cart/OrderForm.module.css";

const useInput = (validateFunction, inputData) => {

  const [inputValue, setInputValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validateFunction(inputValue);

  const changeHandler = event => {
    setInputValue(event.target.value)
  }

  const blurHandler = () => {
    setInputTouched(true);
  }

  const resetInput = () => {
    setInputValue('');
    setInputTouched(false);
  }

  const inputCode = () => {

    return (
      <div key={inputData.id} className={classes.inputWrapper}>
        <label htmlFor={inputData.id}>{inputData.name}</label>
        <input value={inputValue} onChange={changeHandler} onBlur={blurHandler} type="text" id={inputData.id}/>
        {inputTouched && !inputIsValid && <p className={classes.errorText}>{inputData.name} {inputData.error}</p>}
      </div>
    );
  }

  return {
    inputObject : {
      inputIsValid,
      inputCode,
      resetInput,
      id: inputData.id,
      inputValue
    }
  };
}

export default useInput;