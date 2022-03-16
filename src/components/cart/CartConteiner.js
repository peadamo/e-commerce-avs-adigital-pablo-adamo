import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { UserContext } from "../../context/UserContext";
import LogUserButtons from "../NavBar/LogUserButtons";
import { Container } from "@mui/material";

const CartConteiner = () => {
  
  const itemsQuantity = useContext(CartContext).itemsQuantity;
  const user = useContext(UserContext);

  if (itemsQuantity === 0)
    return (
      <div>
        <h1>carrito vacio</h1>
        <Link to="/">
          <button>Volver a inicio</button>
        </Link>
      </div>
    );

    if (user.user.id == null)
    return (
      <Container>
        <h1>Debes estar registrado para poder finalizar la compra</h1>
        <LogUserButtons />

      </Container>
    );

  return (
    <div>
      
      <Cart />
    </div>
  );
};

export default CartConteiner;
