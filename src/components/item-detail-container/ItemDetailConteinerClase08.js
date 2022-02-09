import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import { useParams } from "react-router-dom";
import { Card, ListGroupItem, ListGroup, Col, Button } from "react-bootstrap";

const ItemDetailConteinerClase08 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showProduct, setShowProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProducts();
    setShowProduct(products.filter((product) => product.id === id)[0])
  }, [id, products]);

  

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={showProduct.imgSrc} />
          <Card.Body>
            <Card.Title>{showProduct.name}</Card.Title>
            <Card.Text>{showProduct.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Precio: $ {showProduct.price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Seleccionar producto</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemDetailConteinerClase08;
