import React from "react";

const OrderContext = React.createContext(
    {
        order: {},
        addItem: () => {},
        removeItem: () => {}
    }
);

export default OrderContext;