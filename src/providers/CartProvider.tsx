import { createContext, useContext } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ items: [], onAddItem: () => {} }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
