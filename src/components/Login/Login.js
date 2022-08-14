import React, {useState,useEffect, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, setEmailState] = useReducer((state, action) => {
    if(action.type === "update") {
      return {value:action.value, isValid: action.value.includes("@")}
    }
  }, {value: '', isValid: false});

  const [passState, setPassState] = useReducer((state, action) => {
    if(action.type === "update") {
      return {value:action.value, isValid: action.value.length > 6}
    }
  }, {value: '', isValid: false});

  const { isValid: emailIsValid } = emailState;
  const { isValid: passIsValid } = passState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
          emailIsValid && passIsValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passIsValid]);

  const emailChangeHandler = (event) => {
    setEmailState({type:"update", value:event.target.value});
  };

  const passwordChangeHandler = (event) => {
    setPassState({type:"update", value:event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
