import {useState, useRef, useContext} from 'react';
import {LoginContext} from "../../context/context";
import {useHistory} from "react-router-dom";

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();
  const passRef = useRef();

  const history = useHistory();

  const loginCtx = useContext(LoginContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const connect = async (url, body, errorMessage) => {
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json'
          }, method: 'POST', body: JSON.stringify(body)
        })

        if (response.ok) {
          const responseData = await response.json();

          return {status: 'ok', data:responseData};

        } else {
          const responseData = await response.json();

          if (responseData && responseData.error && responseData.error.message) {
            errorMessage = responseData.error.message;
          }

          alert(errorMessage);
          return {status: 'fail', data:responseData};
        }
      } catch (error) {
        alert(error.message);
      }
    }

    setIsLoading(true);

    if (isLogin) {
      const data = await connect('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDG1ZgpOR0NsuKT2-7o55Y_9mXuZmQn-ys', {
          email: emailRef.current.value,
          password: passRef.current.value,
          returnSecureToken: true
        },
        'Signin failed!'
      );

      if(data.status === 'ok') {
        loginCtx.updateAuth(data.data.idToken, data.data.expiresIn);
        history.replace('/');
      }
    } else {
      const data = await connect('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDG1ZgpOR0NsuKT2-7o55Y_9mXuZmQn-ys', {
          email: emailRef.current.value,
          password: passRef.current.value,
          returnSecureToken: true
        },
        'Signup failed!'
      );
      if(data.status === 'ok') {
        history.replace('/');
      }

    }

    setIsLoading(false);
  }

  return (<section className={classes.auth}>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    {loginCtx.isLoggedIn ? <p>{loginCtx.authToken}</p> : null }
    <form onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor='email'>Your Email</label>
        <input ref={emailRef} type='email' id='email' required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Your Password</label>
        <input ref={passRef} type='password' id='password' required/>
      </div>
      <div className={classes.actions}>
        {isLoading ? <p>Registering</p> : <button>{isLogin ? 'Login' : 'Create Account'}</button>}
        <button
          type='button'
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>);
};

export default AuthForm;
