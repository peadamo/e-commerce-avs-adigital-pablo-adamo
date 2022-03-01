import { React, useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Box, Button, Stack, TextField } from "@mui/material";
import {
  getFirestore,
  collection,
  addDoc,
  
  doc,
  writeBatch,
} from "firebase/firestore";

const Cartform = () => {
  const items = useContext(CartContext).items;
  const clearCart = useContext(CartContext).clearCart;
  const totalPrice = useContext(CartContext).totalPrice;
  const [buyer, setBuyer] = useState({
    name: "name",
    email: "email",
    adress: "adress",
    phone:"phone",
  });
  const [orderId, setOrderId] = useState(null);
  const [isPurchaseDone, setIsPurchaseDone] = useState(false);

  const sendOrder = () => {
    const order = {
      totalPrice,
      buyer,
      items,
      date:Date.now()
    };

    const db = getFirestore();
    const batch = writeBatch(db);
    const ordersCollection = collection(db, "orders");
    // const batch = db.batch();

    addDoc(ordersCollection, {}).then(({ id }) => {
      setOrderId(id);
      const docRef = doc(db, "orders", `${id}`);
      batch.update(docRef, order);
      items.map((item) => {
        let newStock = item.stock - item.quantity;
        const docRef = doc(db, "items", item.id);
       
        batch.update(docRef, { stock: newStock });
        return null
      });

      batch.commit();
    });
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
            <TextField
              required
              id="outlined-required"
              label="Telefono"
              onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={() => {
              sendOrder();
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
