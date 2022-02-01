import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [product, setProduct] = useState({
    restStock: stock,
    initial: 1,
    onAdd: 0,
  });

  const add = () => {
    if (product.initial + 1 <= product.restStock) {
      setProduct({ ...product, initial: product.initial + 1 });
    }
  };

  const rest = () => {
    if (product.initial - 1 > 0) {
      setProduct({ ...product, initial: product.initial - 1 });
    }
  };

  const addCart = () => {
    if (product.restStock - product.initial >= 0) {
      setProduct({
        ...product,
        restStock: product.restStock - product.initial,
        onAdd: product.onAdd + product.initial,
      });
    }
  };

  const restart = () => {
    setProduct({
      restStock: stock,
      initial: 1,
      onAdd: 0,
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <h1>Comprar</h1>
          </Row>
          <Row>
            <Col>
              <button onClick={rest}>-</button>
            </Col>
            <Col>
              <input style={{ width: "50%" }} value={product.initial}></input>
            </Col>
            <Col>
              <button onClick={add}>+</button>
            </Col>
          </Row>
          <Row>
            <button onClick={addCart}>Añadir a la compra</button>
          </Row>
        </Col>
        <Col>
          <Row>
            {" "}
            <h2>Total</h2>
            <h3>{product.onAdd}</h3>
          </Row>

          <Row>
            <button onClick={restart}>Reiniciar</button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCount;
