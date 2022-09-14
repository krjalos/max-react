import React, { useState, useEffect } from "react";

export const LoginContext = React.createContext({
  isLoggedIn: false,
  authToken: '',
  updateAuth: () => {},
});

let timeOut;

const getStoredAuth = () => {

  const diff = localStorage.getItem('expireTime') - new Date().getTime();

  if(diff > 0) {
    const initialToken = localStorage.getItem('token');
    return {
      token: initialToken,
      expiresIn: diff
    };
  }else {
    localStorage.removeItem('token');
    localStorage.removeItem('expireTime');

    return null;
  }
}

const LoginContextProvider = props => {

  const storedAuth = getStoredAuth();
  const [authToken, setAuthToken] = useState(storedAuth ? storedAuth.token : null);
  const isLoggedIn = !!authToken;

  useEffect(() => {
    if(storedAuth) {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        updateAuth('');
      }, storedAuth.expiresIn);
    }
  },[storedAuth]);

  const updateAuth = (token, expiresIn) => {
    setAuthToken(token);
    clearTimeout(timeOut);

    if(token === '') {
      localStorage.removeItem('token');
      localStorage.removeItem('expireTime');

    }else {
      localStorage.setItem('token', token);

      const expireTime = new Date().getTime() + (+expiresIn * 1000);
      localStorage.setItem('expireTime', expireTime);

      timeOut = setTimeout(() => {
        updateAuth('');
      }, (+expiresIn * 1000));
    }
  }

  const contextValue = {
    isLoggedIn : isLoggedIn,
    authToken: authToken,
    updateAuth: updateAuth
  }

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;