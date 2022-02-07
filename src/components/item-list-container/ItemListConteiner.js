import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item";

const ItemListContainer = ({changeSelectedItem}) => {
  
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
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
    
      <h1>Lista de productos</h1>
      <hr />
      <Container>
        <Row>
          {" "}
          {products.map((product) => (
            <Item
              key={product.id}
              {...product}
              changeSelectedItem={changeSelectedItem}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;
