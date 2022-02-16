import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { productsAPI } from "../../helpers/promises";
import { useParams } from "react-router-dom";
import Item from "../item/Item";

const ItemListContainer = () => {
  const { id } = useParams();

  // console.log(id);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      // console.log("Finalización del consumo de la API productsAPI");
    }
  };

  if (loading) {
    return (
      <div>
        <br />
        <br /> <h1>Cargando...</h1>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      <Container>
        <Row>
          {!id &&
            products.map((product) => <Item key={product.id} {...product} />)}
          {products
            .filter((product) => product.category === id)
            .map((product) => (
              <Item key={product.id} {...product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;
