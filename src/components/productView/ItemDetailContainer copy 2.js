import { React, useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup, Spinner } from "react-bootstrap";
import { productsDetailAPI } from "../../helpers/promises2";

const ItemDetailContainer = ({ changeSelectedItem, product }) => {
  const [loading, setLoading] = useState(true);
  const [productsDetail, setProductsDetail] = useState([]);

  useEffect(() => {
    getProductsDetail();
  }, []);

  const getProductsDetail = async () => {
    try {
      const resultDetail = await productsDetailAPI;
      setProductsDetail(resultDetail);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(true);
      console.log("Finalización del consumo de la API productsDetailsAPI");
    }
  };

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  return (
    <div>
      <h1>Soy un contenedor de detalles del producto</h1>
      <button onClick={changeSelectedItem(null)}>Volver atras</button>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={productsDetail[0].imgSrc} />
        <Card.Body>
          <Card.Title>{productsDetail[0].name}</Card.Title>
          <Card.Text>{productsDetail[0].description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Precio: $ {productsDetail[0].price}</ListGroupItem>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
