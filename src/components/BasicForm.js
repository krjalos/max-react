import useInput from "../hooks/use-input";
import {useState} from "react";

const BasicForm = (props) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    inputValue: nameValue,
    inputIsValid: nameInputValid,
    inputTouched: nameTouched,
    resetInput: resetName,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    inputValue: lastNameValue,
    inputIsValid: lastNameInputValid,
    inputTouched: lastNameTouched,
    resetInput: resetLastName,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    inputValue: emailValue,
    inputIsValid: emailInputValid,
    inputTouched: emailTouched,
    resetInput: resetEmail,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler
  } = useInput((value) => {
    return value.includes("@");
  });
  
  const formIsValid = nameInputValid && lastNameInputValid && emailInputValid;

  const submitHandler = event => {
    event.preventDefault();

    setSubmitted(true);
    
    if(!formIsValid) {
      console.log("Form is invalid");
      return false;
    }

    console.log(`Submit: ${nameValue}, ${lastNameValue}, ${emailValue}`);

    setSubmitted(false);
    resetName();
    resetLastName();
    resetEmail();
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={`form-control ${!nameInputValid && (nameTouched || submitted) && 'invalid'}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
          {!nameInputValid && (nameTouched || submitted) && <p className='error-text'>Name is empty</p>}
        </div>
        <div className={`form-control ${!lastNameInputValid && (lastNameTouched || submitted) && 'invalid'}`}>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {!lastNameInputValid && (lastNameTouched || submitted) && <p className='error-text'>Last name is empty</p>}
        </div>
      </div>
      <div className={`form-control ${!emailInputValid && (emailTouched || submitted) && 'invalid'}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {!emailInputValid && (emailTouched || submitted) && <p className='error-text'>Email is incorrect</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
