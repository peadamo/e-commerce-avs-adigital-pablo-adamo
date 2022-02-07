import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
const ItemDetail = ({ id, name, description,price, imgSrc }) => {


  return (
    <>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Precio: $ {price}</ListGroupItem>
        </ListGroup>
        <Card.Body></Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
