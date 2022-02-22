import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Table } from "react-bootstrap";

const Cart = () => {
  const items = useContext(CartContext).items;
  const clearCart = useContext(CartContext).clearCart;
  const removeItem = useContext(CartContext).removeItem;
 
  const totalPrice = useContext(CartContext).totalPrice

 

  return (
    <div>
      <h1>Carrito de compras</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Detalle</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>$ {item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <h3>Precio Total $ {totalPrice}</h3>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
