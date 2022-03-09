import { useState, useEffect } from "react";
import ItemCounter from "../item-cunter/ItemCounter";
import { Link } from "react-router-dom";
import CartConteiner from "../cart/CartConteiner";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Skeleton } from "@mui/material";
import "./ItemDetail.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { MultilineText } from "./MultilineText";
const Item = styled(Paper)(() => ({}));

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
console.log(showProduct.fullDescription)
  return (
    <>
      <Box sx={{ flexGrow: 1, display: "inline-flex" }}>
        <Box sx={{ flexDirection: "column" }}>
          <h2 className="backRed">DatosProducto</h2>
          <h3>miniaturas</h3>
          <img
            src={showProduct.imgSrc}
            width={280}
            height={280}
            alt={showProduct.name}
          />

          <hr />
          <h3>caracteristicas</h3>
          <hr />

          {showProduct.fullDescription.split("&").map((line)=>
            
            (<MultilineText linea={line}/>)
          )}


          <hr />
          {/* <p>{showProduct.fullDescription}</p> */}
        </Box>
        <Box>
          <h2>datos Compra</h2>
          <Item variant="outlined">
            <h5>categoria</h5>
            {showProduct.name}

            <h3>
              Precio:{" "}
              {showProduct.price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}
            </h3>
          </Item>

          <h4>Cuotas</h4>
          <h5>Stock Disponible?</h5>
          <h6>Stock disponible {showProduct.stock} u.</h6>
          <ItemCounter
            stock={showProduct.stock}
            setTotalToAdd={setTotalToAdd}
            item={{ ...showProduct }}
          />
          <Link to="/cart">
            <button>Terminar mi compra</button>
          </Link>
          <h6>Detalle garantia</h6>
        </Box>
      </Box>
    </>
  );
};

export default ItemDetail;
