import React, {useState} from "react";

const LoginContext = React.createContext({loggedIn: false, toggleLoggedIn: () => {}});

const LoginContextProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = (logIn = false) => {
    setLoggedIn(logIn);
  }

  return (
    <LoginContext.Provider value={{loggedIn, toggleLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;

export {LoginContextProvider};