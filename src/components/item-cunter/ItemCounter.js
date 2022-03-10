import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import styles from "./ItemCounter.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
const ItemCounter = ({ item }) => {
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
    addItem(item, counter);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          p: 0,
          m: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 0,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={minusCounter}>
              <RemoveIcon />
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span className={styles.counter}>{counter}</span>
            </Box>
            <Button onClick={plusCounter}>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Box>
        <span className={`${styles.subTitle} ${styles.stock} `}>
          ({item.stock} disponibles)
        </span>
      </Box>

      <Button
        variant="contained"
        sx={{ mt: 2, mb: 1 }}
        onClick={setBuyCounter}
        className={`${styles.noTextTransform} ${styles.buyFuckingButton}  `}
      >
        {" "}
        <Link
          to="/cart"
          className={`${styles.noTextTransform} ${styles.widthFukinkLink}  `}
        >
          Comprar Ahora
        </Link>
      </Button>

      <Button
        variant="outlined"
        sx={{ mt: 0, mb: 0 }}
        className={`${styles.noTextTransform}  `}
        onClick={setBuyCounter}
      >
        Agregar al carrito
      </Button>
    </>
  );
};

export default ItemCounter;
