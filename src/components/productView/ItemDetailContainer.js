import { React, useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import { showProductsAPI } from "./delay";
const ItemDetailContainer = ({ changeSelectedItem, product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsDetail();
    return () => {
      setLoading(true);
      console.log("loading set true");
    };
  }, []);

  const getProductsDetail = async () => {
    try {
     await showProductsAPI;
     
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("Finalización del consumo de la API detailProduct");
    }
  };

  console.log(loading);
  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <div>
        <h1>Soy un contenedor de detalles del producto</h1>
        <button onClick={changeSelectedItem(null)}>Volver atras</button>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.imgSrc} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Precio: $ {product.price}</ListGroupItem>
          </ListGroup>
          <Card.Body></Card.Body>
        </Card>
      </div>
    );
  }
};

export default ItemDetailContainer;
