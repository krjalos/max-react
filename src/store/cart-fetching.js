import { cartActions } from "./cart";

export const uploadCart = (items) => {

  return async (dispatch) => {
    dispatch(cartActions.setNotification({
      status: "",
      title: "Sending Request",
      message: "In Progress"
    }));

    const fetchCart = async () => {

      const response = await fetch('https://max-react-d73e4-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
      });

      if(!response.ok){
        throw new Error("Sending cart data failed!");
      }

      dispatch(cartActions.setNotification({
        status: "success",
        title: "S",
        message: "S indeeeedio"
      }));
    }

    fetchCart().catch(error => {
      dispatch(cartActions.setNotification({
        status: "error",
        title: "Sending Failed",
        message: "Sending failed indeed!"
      }));
    });
  }
}

export const downloadCart = () => {

  return async (dispatch) => {

    const fetchCart = async () => {

      const response = await fetch('https://max-react-d73e4-default-rtdb.firebaseio.com/cart.json');

      if(!response.ok){
        throw new Error("Sending cart data failed!");
      }

      const items = await response.json();

      dispatch(cartActions.replaceCart(items));

      dispatch(cartActions.setNotification({
        status: "success",
        title: "downloading S",
        message: "Fetching S indeeeedio"
      }));

    }

    fetchCart().catch(error => {
      dispatch(cartActions.setNotification({
        status: "error",
        title: "Downloading Failed",
        message: "Downloading failed indeed!"
      }));
    });
  }
}