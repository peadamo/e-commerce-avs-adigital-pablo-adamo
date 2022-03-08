import { Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";



const ItemCounter = ({ setTotalToAdd, item }) => {
  const [counter, setCounter] = useState(0);

  const addItem = useContext(CartContext).addItem;

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= item.stock) return;
    setCounter(counter + 1);
  };

  const setBuyCounter = () => {
    if (counter > 0) {
      setTotalToAdd(counter);
      addItem(item, counter);
    }
  };

  const resetCounter = () => {
    setCounter(0);
    setTotalToAdd(counter);
  };

  return (
    <>
      <div>
              <Button variant="primary" size="sm" onClick={minusCounter}>
                -
              </Button>
              <span>{counter}</span>
              <Button variant="primary" size="sm" onClick={plusCounter}>
                +
              </Button>
              <Button variant="primary" size="sm" onClick={setBuyCounter}>
                Añadir
              </Button>
              <Button variant="primary" size="sm" onClick={resetCounter}>
                Reiniciar
              </Button>
      </div>
    </>
  );
};

export default ItemCounter;
