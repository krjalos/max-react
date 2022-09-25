import {useState} from "react";

const INITIAL_PRODUCTS = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false
  }
];

const defaultContext = {
  products: [
    {
      id: '',
      title: '',
      description: '',
      isFavorite: false
    }
  ],
  toggleFavorite: (id) => {}
}

export const ProductContext = React.createContext(defaultContext);

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const toggleFavorite = (id) => {
    setProducts((prevState) => {

      const newState = [...prevState];

      const selectedIndex = newState.findIndex(product => product.id === id);
      newState[selectedIndex].isFavorite = !newState[selectedIndex].isFavorite;

      return newState;
    })
  }

  return (
    <ProductContext.Provider value={{products, toggleFavorite}}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;