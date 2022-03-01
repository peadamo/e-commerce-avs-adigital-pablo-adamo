import { React, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Box, Button, Stack, TextField } from "@mui/material";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const Cartform = () => {
  const items = useContext(CartContext).items;
  const clearCart = useContext(CartContext).clearCart;
  const totalPrice = useContext(CartContext).totalPrice;
  const [buyer, setBuyer] = useState({
    name: "name",
    email: "email",
    adress: "adress",
  });
  const [orderId, setOrderId] = useState(null);
  const [isPurchaseDone, setIsPurchaseDone] = useState(false);

  const sendOrder = () => {
    const order = {
      totalPrice,
      buyer,
      items,
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  const updateOrder = (itemId,newStock) => {
    const db = getFirestore();
    const docRef = doc(db, "items", itemId);
    updateDoc(docRef, { stock: newStock });
  };

  const updateStock = () => {
     
    items.map((item) => {
    let newStock=item.stock-item.quantity
        
        updateOrder(item.id,newStock)});
  };

  if (isPurchaseDone)
    return (
      <div>
        <h1>Compra finalizada con exito</h1>
        <h2>Codigo de compra:</h2>
        <hr />
        <h2>{orderId}</h2>
        <hr />
        <button
          onClick={() => {
            setIsPurchaseDone(false);
            clearCart();
          }}
        >
          Finalizar
        </button>
      </div>
    );

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={0}
          >
            <TextField
              required
              id="outlined-required"
              label="Nombre"
              onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            />
            <TextField
              required
              id="outlined-required"
              label="Direccion"
              onChange={(e) => setBuyer({ ...buyer, adress: e.target.value })}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={() => {
                sendOrder();
              updateStock();
                setIsPurchaseDone(true);
            }}
          >
            Finalizar Compra
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Cartform;
