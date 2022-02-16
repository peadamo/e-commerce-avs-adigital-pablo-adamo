import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem, counter) => {
    if (items.some((item) => item.id === currentItem.id)) return;

    currentItem["quantity"] = counter;

    setItems([...items, { ...currentItem }]);
  };

  const removeItem = (id) => {

    // let temp=items

    setItems(

        items.filter((item)=>item.id!==id)
    )



  
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
