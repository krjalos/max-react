import {initStore} from './store';

const productStore = () => {
  initStore(
    {
      toggleFavorite: (currentState, productId) => {
        const newState = {...currentState};
        const newProducts = [...newState.products];

        const prodIndex = newProducts.findIndex(p => p.id === productId);
        newProducts[prodIndex].isFavorite = !newProducts[prodIndex].isFavorite;

        newState.products = newProducts;

        return newState;
      }
    },
    {
      products: [{
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
        }]
    }
  );
}

export default productStore;