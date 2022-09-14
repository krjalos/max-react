import {Switch, Route, Redirect} from 'react-router-dom';
import {LoginContext} from "./context/context";

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {useContext} from "react";

function App() {

  const loginCtx = useContext(LoginContext);

  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      {!loginCtx.isLoggedIn ? <Route path='/auth'>
        <AuthPage/>
      </Route> : null }
      {loginCtx.isLoggedIn ? <Route path='/profile'>
        <UserProfile/>
      </Route> : null }
      <Route path='*'>
        <Redirect to='/'/>
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;
