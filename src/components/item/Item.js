import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

export default function MediaCard({
  id,
  name,
  description,
  price,
  imgSrc,
  stock,
}) {
  const [isImgLoad, setIsImgLoad] = useState(false);

  return (
    <>
      <Box sx={{ display: "inline-flex", justifyContent: "center" ,p:1}}>
        <Card sx={{ maxWidth: 300 }}>
          <Link to={`/item/${id}`}>
            <Box sx={{ width: 280, height: 280 }}>
              {/* <CardMedia component="img" image={imgSrc} alt={name} onLoad={()=>{console.log("dd")}} /> */}
              {isImgLoad ? null : (
                <Skeleton variant="rectangular" width={280} height={280} />
              )}
              <img
                src={imgSrc}
                width={280}
                height={280}
                alt={name}
                onLoad={() => setIsImgLoad(true)}
              />
            </Box>
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}{" "}
            </Typography>
            <hr />
            <Typography variant="body2">
              Precio:{" "}
              {price.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })}{" "}
              | Stock: {stock} u.
            </Typography>
          </CardContent>
          <Link to={`/item/${id}`} className="noTextTransform">
            <CardActions
              sx={{ display: "grid", gridTemplateRows: "repeat(1, 1fr)", p: 1 }}
            >
              <Button size="small" variant="contained" >
                Comprar
              </Button>
            </CardActions>
          </Link>

          <CardActions
            sx={{ display: "grid", gridTemplateRows: "repeat(1, 1fr)", p: 1 }}
          >
            {/* <Button size="small" variant="outlined">
              <IconButton
                size="small"
                aria-label="show cart counter"
                color="inherit"
                sx={{ p: 0 }}
              >
                <ShoppingCartIcon />
              </IconButton>
              Agregar
            </Button> */}
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
