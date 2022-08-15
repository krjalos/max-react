import React, {useState,useEffect, useReducer, useContext, useRef} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../context/auth-context";
import Input from "./Input";

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

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if(formIsValid) {
      authCtx.onLogin(emailState.value, passState.value);
    }else if(!emailState.isValid){
      emailInputRef.current.goTo();
    }else {
      passwordInputRef.current.goTo();
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input ref={emailInputRef} isValid={emailState.isValid} label="E-Mail" type="email" inputId="email" value={emailState.value} onChange={emailChangeHandler}/>
        <Input ref={passwordInputRef} isValid={passState.isValid} label="Password" type="password" inputId="password" value={passState.value} onChange={passwordChangeHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
