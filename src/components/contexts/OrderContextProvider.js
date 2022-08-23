import {useReducer} from "react";

import OrderContext from "./order-context";

const updateCart = (state, action) => {
    if(action.action === "ADD_ITEM") {

        const newItems = [...state];

        const existingItemIndex = newItems.findIndex(item => {
            return item.id === action.item.id
        });

        if(existingItemIndex >= 0) {
            newItems[existingItemIndex].amount += action.item.amount;
        }else {
            newItems.push({
                id: action.item.id,
                name: action.item.name,
                price: action.item.price,
                amount: +action.item.amount
            });
        }

        return newItems;
    }

    if(action.action === "REMOVE_ITEM") {
        return state.reduce((result, item) => {
            if(item.id === action.item.id){
                if(+item.amount > action.item.amount){
                    result.push({...item, amount: +item.amount - +action.item.amount});
                }
            }else {
                result.push({...item});
            }
            return result;
        }, []);
    }
}

const OrderContextProvider = props => {

    const [order, dispatchOrder] = useReducer(updateCart, []);

    return (
        <OrderContext.Provider value={{order:order, dispatch: dispatchOrder}}>
            {props.children}
        </OrderContext.Provider>
    );
}

export default OrderContextProvider;