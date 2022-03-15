import ItemCounter from "../item-cunter/ItemCounter";
import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { MultilineText } from "./MultilineText";
import styles from "./ItemDetail.module.css";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import Grid from "@mui/material/Grid";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
const Item = styled(Paper)(() => ({}));

const ItemDetail = ({ showProduct }) => {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, display: "inline-flex", p: 1 }}
        className={`${styles.maxWidth95}`}
      >
        <BasicBreadcrumbs />
      </Box>

      <Box
        sx={{ flexGrow: 1, display: "inline-flex" }}
        className={`${styles.backWhite} ${styles.maxWidth95}`}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box sx={{ flexDirection: "column", p: 1 }}>
                <img
                  src={showProduct.imgSrc}
                  width={280}
                  height={280}
                  alt={showProduct.name}
                />

                <hr />
                <h3>Caracteristicas</h3>
                <hr />

                {showProduct.fullDescription.split("&").map((line) => (
                  <MultilineText linea={line} />
                ))}

                <hr />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ p: 1 }}>
                <Item variant="outlined">
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className={styles.textLeft}
                  >
                    <span className={styles.subTitle}>Nuevo</span>
                    <span className={`${styles.title} `}>
                      {showProduct.name}
                    </span>
                    <span className={`${styles.price} `}>
                      {showProduct.price.toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0,
                      })}
                    </span>
                    <span className={`${styles.greenBold} `}>
                      en 12 x{" "}
                      {(showProduct.price / 12).toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0,
                      })}{" "}
                      sin interés
                    </span>
                    <Box sx={{ pt: 1 }}>
                      <span className={`${styles.link} `}>
                        Ver los medios de pago
                      </span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        pt: 2,
                      }}
                    >
                      <LocalShippingOutlinedIcon
                        className={`${styles.greenIcon} `}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span className={`${styles.greenBold} `}>
                          Envio gratis a todo el país
                        </span>
                        <span className={`${styles.subTitle} `}>
                          Conocé los tiempos y las formas de envío.
                        </span>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        pt: 2,
                      }}
                    >
                      <KeyboardReturnOutlinedIcon
                        className={`${styles.greenIcon} `}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span className={`${styles.greenBold} `}>
                          Devolución gratis
                        </span>
                        <span className={`${styles.subTitle} `}>
                          Tenés 30 días desde que lo recibís.
                        </span>
                        <span className={`${styles.link} `}>Conocer más</span>
                      </Box>
                    </Box>
                    <h5>Stock Disponible</h5>
                   
                    <ItemCounter
                        stock={showProduct.stock}
                        item={{ ...showProduct }}
                      />
                    
                  </Box>
                </Item>
               
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ItemDetail;
