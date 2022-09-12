import {Route, Switch, Redirect} from "react-router-dom";
import QuotesList from "./pages/QuotesList";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (<div>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <QuotesList/>
        </Route>
        <Route path='/quotes/:quoteID'>
          <QuoteDetails/>
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  </div>);
}

export default App;
