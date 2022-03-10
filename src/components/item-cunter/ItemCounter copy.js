import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import styles from "./ItemCounter.module.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ItemCounter = ({ setTotalToAdd, item }) => {
  const [counter, setCounter] = useState(1);

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
              <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={minusCounter}><RemoveIcon/></Button>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >

        <span className={styles.counter}>{counter}</span>
        </Box>
        <Button onClick={plusCounter}><AddIcon/></Button>
      </ButtonGroup>
      <Button variant="contained" onClick={setBuyCounter}>Contained</Button>
    </Box>

      </div>
    </>
  );
};

export default ItemCounter;
