import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);

  const addToCart = (id, price) => {
    setCart(prev => ({
      ...prev,
      [id]: {
        qty: (prev[id]?.qty || 0) + 1,
        price
      }
    }));
  };

  const updateQty = (id, qty) => {
    setCart(prev => {
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: { ...prev[id], qty } };
    });
  };

  return (
    <StoreContext.Provider value={{ cart, orders, setOrders, addToCart, updateQty }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
