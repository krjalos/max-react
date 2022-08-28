import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const [submitHappened, setSubmitHappened] = useState(false);

  const {
    inputValue: nameValue,
    inputIsValid: nameInputValid,
    inputTouched: nameTouched,
    resetInput: resetName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler
  } = useInput((value) => {
    return value.trim() !== "";
  }, submitHappened);

  const {
    inputValue: emailValue,
    inputIsValid: emailInputValid,
    inputTouched: emailTouched,
    resetInput: resetEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler
  } = useInput((value) => {
    return value.trim() !== '' && value.includes("@") && value.includes('.');
  }, submitHappened);

  const formIsValid = nameInputValid && emailInputValid;

  const formSubmitHandler = event => {
    event.preventDefault();

    setSubmitHappened(true);

    if (!formIsValid) {
      console.log(`Fail`);
      return false;
    }

    console.log(`submit`);

    setSubmitHappened(false);
    resetName();
    resetEmail();
  }

  return (

    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!nameInputValid && (submitHappened || nameTouched) && 'invalid'}`}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBlurHandler}
               type='text'
               id='name'
               value={nameValue}
               onChange={nameChangeHandler}
        />
        {!nameInputValid && (submitHappened || nameTouched) && <p className='error-text'>Input is invalid</p>}
      </div>
      <div className={`form-control ${!emailInputValid && (submitHappened || emailTouched) && 'invalid'}`}>
        <label htmlFor='email'>Email</label>
        <input onBlur={emailBlurHandler}
               type='text'
               id='email'
               value={emailValue}
               onChange={emailChangeHandler}
        />
        {!emailInputValid && (submitHappened || emailTouched) && <p className='error-text'>Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
