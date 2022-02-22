import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartIconCounter = () => {
  const itemsQuantity = useContext(CartContext).itemsQuantity;
  if (itemsQuantity > 0)
    return (
      <>
        <Button className="cartItemCount" variant="danger" disabled>
          {itemsQuantity}
        </Button>
      </>
    )
    return null
};

export default CartIconCounter;
