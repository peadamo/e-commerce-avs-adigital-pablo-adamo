import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
const ItemCounter = ({ stock, setSotckSelected }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSotckSelected(counter);
  }, [setSotckSelected,counter]);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <Button onClick={minusCounter} variant="primary" size="sm">
          -
        </Button>

        <span>{counter}</span>
        <Button onClick={plusCounter} variant="primary" size="sm">
          +
        </Button>
      </div>
    </>
  );
};

export default ItemCounter;
