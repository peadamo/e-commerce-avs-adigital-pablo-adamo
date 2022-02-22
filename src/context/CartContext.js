import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)

  const currentItemIndex = (id) => {
    const index = items.findIndex((item) => item.id === id);
    return index;
  };

  const addItem = (currentItem, counter) => {
    if (isInCart(currentItem)) {
      items[currentItemIndex(currentItem.id)].quantity =
        items[currentItemIndex(currentItem.id)].quantity + counter;
      setItems(items);
      setItemsQuantity(itemsQuantity + counter);
      setTotalPrice(totalPrice+counter*currentItem.price)
    } else {
      currentItem["quantity"] = counter;

      setItems([...items, { ...currentItem }]);
      setItemsQuantity(itemsQuantity + counter);
      setTotalPrice(totalPrice+currentItem.quantity*currentItem.price)
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setItemsQuantity(itemsQuantity - items[currentItemIndex(id)].quantity);
    setTotalPrice(totalPrice-items[currentItemIndex(id)].quantity*items[currentItemIndex(id)].price)
  };

  const clearCart = () => {
    setItems([]);
    setItemsQuantity(0);
    setTotalPrice(0)
  };

  const isInCart = (currentItem) => {
    if (items.some((item) => item.id === currentItem.id)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <CartContext.Provider
      value={{ items, itemsQuantity,totalPrice, addItem, clearCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
