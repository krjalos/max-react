import React, {useContext} from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from "./components/Auth";
import LoginContext from "./context/use-context";

const App = props => {
  const loginCtx = useContext(LoginContext);

  return (
    <>
      {loginCtx.loggedIn ? <Ingredients /> : <Auth />}
    </>
  );
};

export default App;
