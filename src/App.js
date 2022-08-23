import React, {useReducer, useState} from "react";
import Header from "./components/Header/Header";
import Topimage from "./components/Topimage/Topimage";
import PageContent from "./components/PageContent/PageContent";
import Menu from "./components/Menu/Menu";
import OrderContextProvider from "./components/contexts/OrderContextProvider";
import Cart from "./components/Cart/Cart";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];



function App() {

    const [showCart, setShowCart] = useState(false);

    const toggleCartHandler = () => {
        setShowCart((prevState) => {
            return !prevState;
        });
    }

  return (
      <OrderContextProvider>
          {showCart && <Cart onClose={toggleCartHandler}></Cart>}
          <Header onCartOpen={toggleCartHandler}></Header>
          <Topimage/>
          <PageContent/>
          <Menu items={DUMMY_MEALS}/>
      </OrderContextProvider>
  );
}

export default App;
