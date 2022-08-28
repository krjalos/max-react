import {useState} from "react";

const useInput = (validateFunction) => {

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

  return {
    inputValue,
    inputIsValid,
    inputTouched,
    resetInput,
    changeHandler,
    blurHandler
  };
}

export default useInput;