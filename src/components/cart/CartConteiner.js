import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const CartConteiner = () => {
  
  const itemsQuantity = useContext(CartContext).itemsQuantity;

  if (itemsQuantity === 0)
    return (
      <div>
        <h1>carrito vacio</h1>
        <Link to="/">
          <button>Volver a inicio</button>
        </Link>
      </div>
    );

  return (
    <div>
      
      <Cart />
    </div>
  );
};

export default CartConteiner;
