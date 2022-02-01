import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemCount from "../function-component/ItemCount";

const Item = ({ name, price, id, setSelectedItem, stock }) => {
  const selectItem = () => {
    setSelectedItem({ name, price, id, stock });
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-lg-end">
          <Col>
            <h2>Nombre Producto: {name} </h2>
            <h2>Precio Producto: {price} </h2>
            <button onClick={selectItem}>Seleccionar Producto</button>
          </Col>
          <Col>
            <row>
              <h2>Stock</h2>
            </row>
            <row>
              <h3>{stock} unidades </h3>
            </row>
          </Col>
          <Col>
            <ItemCount stock={stock} />
          </Col>
        </Row>
      </Container>

      <hr />
    </div>
  );
};

export default Item;
