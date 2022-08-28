import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const [submitHappened, setSubmitHappened] = useState(false);

  const {inputValue: nameValue, inputIsValid: nameInputValid, showError: nameShowError, resetInput: resetName, changeHandler: nameChangeHandler, blurHandler: nameBlurHandler} = useInput((value) => {
    return value.trim() !== "";
  }, submitHappened);

  const {inputValue: emailValue, inputIsValid: emailInputValid, showError: emailShowError, resetInput: resetEmail, changeHandler: emailChangeHandler, blurHandler: emailBlurHandler} = useInput((value) => {
    return value.trim() !== '' && value.includes("@") && value.includes('.');
  }, submitHappened);


  const formIsValid = nameInputValid && emailInputValid;

  const formSubmitHandler = event => {
    event.preventDefault();

    setSubmitHappened(true);

    if (!formIsValid) {
      return false;
    }

    setSubmitHappened(false);
    resetName();
    resetEmail();

    console.log(`State = ${nameValue}`);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameShowError && 'invalid'}`}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBlurHandler}
               type='text'
               id='name'
               value={nameValue}
               onChange={nameChangeHandler}
        />
        {nameShowError && <p className='error-text'>Input is invalid</p>}
      </div>
      <div className={`form-control ${emailShowError && 'invalid'}`}>
        <label htmlFor='email'>Email</label>
        <input onBlur={emailBlurHandler}
               type='text'
               id='email'
               value={emailValue}
               onChange={emailChangeHandler}
        />
        {emailShowError && <p className='error-text'>Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
