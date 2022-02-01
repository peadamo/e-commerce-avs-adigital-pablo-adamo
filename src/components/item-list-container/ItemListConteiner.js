import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../item/Item";

const items = [
  { id: "1", name: "jorgito", price: "80", stock: 15 },
  { id: "2", name: "gualmayen", price: "30", stock: 13 },
  { id: "3", name: "aguila", price: "150", stock: 20 },
  { id: "4", name: "capitan del espacio", price: "10", stock: 200 },
];

const ItemListConteiner = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Container fluid>
      <Row>
        <Col>
          {items.map(({ id, name, price, stock }) => (
            <Item
              key={id}
              name={name}
              price={price}
              id={id}
              stock={stock}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </Col>
        <Col lg="auto">
          <div>
            <h1>Item List Container</h1>
            <h3>Producto Seleccionado</h3>
            <p>{selectedItem ? selectedItem.id : "ninguno"}</p>
            <p>{selectedItem ? selectedItem.name : "ninguno"}</p>
            <p>{selectedItem ? selectedItem.price : "ninguno"}</p>
            <p>{selectedItem ? selectedItem.stock : "ninguno"}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListConteiner;
