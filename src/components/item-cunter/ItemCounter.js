import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Button, Container, Row, Col } from "react-bootstrap";

const ItemCounter = ({ setTotalToAdd,item }) => {
  const [counter, setCounter] = useState(0);

  const addItem = useContext(CartContext).addItem;

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= item.stock) return;
    setCounter(counter + 1);
  };

  const setBuyCounter = () => {
    setTotalToAdd(counter);
    addItem(item,counter)
  };

  return (
    <>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={1}>
              <Button variant="primary" size="sm" onClick={minusCounter}>
                -
              </Button>
            </Col>
            <Col lg="auto">
              <span>{counter}</span>
            </Col>
            <Col lg={1}>
              <Button variant="primary" size="sm" onClick={plusCounter}>
                +
              </Button>
            </Col>
            <Col lg={4}>
              <Button variant="primary" size="sm" onClick={setBuyCounter}>
                Añadir
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ItemCounter;
