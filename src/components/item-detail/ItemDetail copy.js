import { useState, useEffect } from "react";
import ItemCounter from "../item-cunter/ItemCounter";
import { Link } from "react-router-dom";
import CartConteiner from "../cart/CartConteiner";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Skeleton } from "@mui/material";

const ItemDetail = ({ showProduct }) => {
  const [totalToAdd, setTotalToAdd] = useState(null);
  const [cardFoot, setCardFoot] = useState(null);
  const [isImgLoad, setIsImgLoad] = useState(false);

  useEffect(() => {
    if (totalToAdd > 0) {
      setCardFoot(
        <>
          <h5>Agregaste {totalToAdd} unidades al carrito</h5>
          <Link to="/cart">
            <button>Terminar mi compra</button>
          </Link>
        </>
      );
    } else {
      setCardFoot(
        <ItemCounter
          stock={showProduct.stock}
          setTotalToAdd={setTotalToAdd}
          item={{ ...showProduct }}
        />
      );
    }
  }, [totalToAdd, showProduct]);

  return (
    <div>
      <Box sx={{ display: "inline-flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 300 }}>
          <Box sx={{ width: 280, height: 280 }}>
            {isImgLoad ? null : (
              <Skeleton variant="rectangular" width={280} height={280} />
            )}
            <img
              src={showProduct.imgSrc}
              width={280}
              height={280}
              alt={showProduct.name}
              onLoad={() => setIsImgLoad(true)}
            />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {showProduct.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {showProduct.description}{" "}
            </Typography>
            <hr />
            <Typography variant="body2">
              Precio:{" "}
              {showProduct.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}{" "}
              | Stock disponible {showProduct.stock} u.
            </Typography>
          </CardContent>
          {cardFoot}
        </Card>
      </Box>
      <CartConteiner />
    </div>
  );
};

export default ItemDetail;
