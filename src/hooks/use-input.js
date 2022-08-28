import {useState} from "react";

const useInput = (validateFunction, submitHappened) => {

  console.log(submitHappened);

  const [inputValue, setInputValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validateFunction(inputValue);
  const showError = !inputIsValid && (inputTouched || submitHappened);

  const changeHandler = event => {
    setInputValue(event.target.value)
  }

  const blurHandler = () => {
    setInputTouched(true);
  }

  const resetInput = () => {
    setInputValue('');
  }

  return {
    inputValue,
    showError,
    inputIsValid,
    resetInput,
    changeHandler,
    blurHandler
  };
}

export default useInput;